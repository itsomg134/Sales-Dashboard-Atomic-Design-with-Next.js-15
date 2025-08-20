# Sales Dashboard

A modern sales dashboard built with Next.js 15, TypeScript, and Tailwind CSS using atomic design principles.

## Features

- **Multi-year Sales Data**: View sales data for 2022, 2023, and 2024
- **Interactive Charts**: Switch between bar, line, and pie charts
- **Custom Filtering**: Set a sales threshold to filter data
- **Responsive Design**: Works on desktop and mobile devices
- **Type Safety**: Full TypeScript implementation

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Recharts for data visualization
- Atomic Design Principles

## Project Structure

```
sales-dashboard/
├── components/
│   ├── atoms/          # Basic UI components (BarChart, LineChart, PieChart)
│   ├── molecules/      # Combination of atoms (SalesChart, FilterControls)
│   ├── organisms/      # Complex components (SalesDashboard)
│   └── templates/      # Page-level components (DashboardTemplate)
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   └── dashboard.tsx   # Dashboard page
├── styles/             # Global styles
├── types/              # TypeScript type definitions
└── utils/              # Utility functions and mock data
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## Enhancements Implemented

1. **Custom Filter Input**: Added a range slider to set sales threshold
2. **Multiple Chart Types**: Implemented bar, line, and pie charts using Recharts
3. **API Integration Ready**: Created API endpoint structure for future real data integration

## Future Enhancements

- Connect to real sales API instead of mock data
- Add authentication and user-specific dashboards
- Implement data export functionality
- Add more advanced filtering options (by month, product category, etc.)
- Include performance metrics and KPIs

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request