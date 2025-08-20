import SalesDashboard from './components/organisms/SalesDashboard';

const DashboardTemplate = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Sales Dashboard</h1>
        <p className="text-gray-600">Analyze your sales performance over the years</p>
      </header>
      <main>
        <SalesDashboard />
      </main>
    </div>
  );
};

export default DashboardTemplate;