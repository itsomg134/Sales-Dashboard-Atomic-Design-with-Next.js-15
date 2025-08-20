'use client';

import { useState } from 'react';
import SalesChart from '@/components/molecules/SalesChart';
import FilterControls from '@/components/molecules/FilterControls';
import { SalesData, ChartType } from '@/types/sales';
import { generateSalesData } from '@/utils/mockData';

const SalesDashboard = () => {
  const [threshold, setThreshold] = useState<number>(10000);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [salesData, setSalesData] = useState<SalesData[]>(generateSalesData());

  const handleThresholdChange = (newThreshold: number) => {
    setThreshold(newThreshold);
  };

  const handleChartTypeChange = (type: ChartType) => {
    setChartType(type);
  };

  const filteredData = salesData.map(yearData => ({
    ...yearData,
    data: yearData.data.filter(item => item.sales >= threshold)
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <FilterControls 
        threshold={threshold}
        chartType={chartType}
        onThresholdChange={handleThresholdChange}
        onChartTypeChange={handleChartTypeChange}
      />
      <div className="mt-6">
        <SalesChart 
          data={filteredData} 
          chartType={chartType}
        />
      </div>
    </div>
  );
};

export default SalesDashboard;