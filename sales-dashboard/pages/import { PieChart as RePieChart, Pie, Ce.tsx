import { PieChart as RePieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SalesData } from '@/types/sales';

interface PieChartProps {
  data: SalesData[];
}

const CustomPieChart: React.FC<PieChartProps> = ({ data }) => {
  const yearlyData = data.map(yearData => ({
    name: yearData.year.toString(),
    value: yearData.data.reduce((sum, item) => sum + item.sales, 0)
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RePieChart>
        <Pie
          data={yearlyData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {yearlyData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Total Sales']} />
        <Legend />
      </RePieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;