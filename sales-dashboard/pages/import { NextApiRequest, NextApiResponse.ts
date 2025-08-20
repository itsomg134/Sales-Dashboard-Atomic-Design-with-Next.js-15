import { NextApiRequest, NextApiResponse } from 'next';
import { generateSalesData } from '@/utils/mockData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const salesData = generateSalesData();
  res.status(200).json(salesData);
}