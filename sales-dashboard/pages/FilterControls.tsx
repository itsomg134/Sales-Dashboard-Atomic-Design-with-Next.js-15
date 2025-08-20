import { ChartType } from '@/types/sales';

interface FilterControlsProps {
  threshold: number;
  chartType: ChartType;
  onThresholdChange: (threshold: number) => void;
  onChartTypeChange: (type: ChartType) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  threshold,
  chartType,
  onThresholdChange,
  onChartTypeChange
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="w-full md:w-auto">
        <label htmlFor="threshold" className="block text-sm font-medium text-gray-700 mb-1">
          Sales Threshold: ${threshold.toLocaleString()}
        </label>
        <input
          id="threshold"
          type="range"
          min="0"
          max="50000"
          step="1000"
          value={threshold}
          onChange={(e) => onThresholdChange(Number(e.target.value))}
          className="w-full md:w-64"
        />
      </div>
      <div className="flex gap-2">
        {(['bar', 'line', 'pie'] as ChartType[]).map((type) => (
          <button
            key={type}
            onClick={() => onChartTypeChange(type)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              chartType === type
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} Chart
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterControls;