import { SalesData, ChartType } from '@/types/sales';
import BarChart from '@/components/atoms/BarChart';
import LineChart from '@/components/atoms/LineChart';
import PieChart from '@/components/atoms/PieChart';

interface SalesChartProps {
  data: SalesData[];
  chartType: ChartType;
}

const SalesChart: React.FC<SalesChartProps> = ({ data, chartType }) => {
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <BarChart data={data} />;
      case 'line':
        return <LineChart data={data} />;
      case 'pie':
        return <PieChart data={data} />;
      default:
        return <BarChart data={data} />;
    }
  };

  return (
    <div className="h-96 w-full">
      {renderChart()}
    </div>
  );
};

export default SalesChart;