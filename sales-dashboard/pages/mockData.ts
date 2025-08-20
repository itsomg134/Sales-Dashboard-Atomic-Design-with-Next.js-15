import { SalesData } from '@/types/sales';

export const generateSalesData = (): SalesData[] => {
  return [
    {
      year: 2022,
      data: [
        { month: 'Jan', sales: 12000 },
        { month: 'Feb', sales: 19000 },
        { month: 'Mar', sales: 15000 },
        { month: 'Apr', sales: 21000 },
        { month: 'May', sales: 25000 },
        { month: 'Jun', sales: 22000 },
        { month: 'Jul', sales: 28000 },
        { month: 'Aug', sales: 24000 },
        { month: 'Sep', sales: 26000 },
        { month: 'Oct', sales: 30000 },
        { month: 'Nov', sales: 32000 },
        { month: 'Dec', sales: 40000 }
      ]
    },
    {
      year: 2023,
      data: [
        { month: 'Jan', sales: 15000 },
        { month: 'Feb', sales: 21000 },
        { month: 'Mar', sales: 18000 },
        { month: 'Apr', sales: 23000 },
        { month: 'May', sales: 27000 },
        { month: 'Jun', sales: 25000 },
        { month: 'Jul', sales: 31000 },
        { month: 'Aug', sales: 29000 },
        { month: 'Sep', sales: 33000 },
        { month: 'Oct', sales: 37000 },
        { month: 'Nov', sales: 39000 },
        { month: 'Dec', sales: 48000 }
      ]
    },
    {
      year: 2024,
      data: [
        { month: 'Jan', sales: 18000 },
        { month: 'Feb', sales: 24000 },
        { month: 'Mar', sales: 21000 },
        { month: 'Apr', sales: 27000 },
        { month: 'May', sales: 32000 },
        { month: 'Jun', sales: 29000 },
        { month: 'Jul', sales: 35000 },
        { month: 'Aug', sales: 38000 },
        { month: 'Sep', sales: 42000 },
        { month: 'Oct', sales: 45000 },
        { month: 'Nov', sales: 47000 },
        { month: 'Dec', sales: 52000 }
      ]
    }
  ];
};