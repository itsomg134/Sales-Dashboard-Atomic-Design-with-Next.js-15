import { LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SalesData } from '@/types/sales';

interface LineChartProps {
  data: SalesData[];
}

const CustomLineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartData = data.flatMap(yearData => 
    yearData.data.map(item => ({
      year: yearData.year,
      month: item.month,
      sales: item.sales
    }))
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReLineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']} />
        <Legend />
        {data.map((yearData, index) => (
          <Line 
            key={yearData.year} 
            type="monotone"
            dataKey="sales" 
            name={`Sales ${yearData.year}`}
            data={yearData.data}
            stroke={`hsl(${index * 120}, 70%, 50%)`}
            activeDot={{ r: 8 }}
          />
        ))}
      </ReLineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;