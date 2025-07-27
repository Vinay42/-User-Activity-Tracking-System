import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace this with API call
    setData([
      { name: 'View', users: 400 },
      { name: 'Add to Cart', users: 240 },
      { name: 'Checkout', users: 120 },
      { name: 'Purchase', users: 60 },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📈 Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Conversion Funnel</h2>
          <LineChart width={400} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Product Clicks</h2>
          <BarChart width={400} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Bar dataKey="users" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
