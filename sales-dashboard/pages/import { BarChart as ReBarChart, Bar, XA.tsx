import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SalesData } from '@/types/sales';

interface BarChartProps {
  data: SalesData[];
}

const CustomBarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = data.flatMap(yearData => 
    yearData.data.map(item => ({
      year: yearData.year,
      month: item.month,
      sales: item.sales
    }))
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReBarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']} />
        <Legend />
        {data.map((yearData, index) => (
          <Bar 
            key={yearData.year} 
            dataKey="sales" 
            name={`Sales ${yearData.year}`}
            data={yearData.data}
            fill={`hsl(${index * 120}, 70%, 50%)`}
          />
        ))}
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;