import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const pieData = {
  labels: ["Footwear", "Clothing", "Electronic Devices", "Makeup"],
  datasets: [
    {
      label: "count",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Website Traffic",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const lineData = {
  labels,
  datasets: [
    {
      label: "Signups",
      data: labels.map(() => faker.datatype.number({ min: 20, max: 300 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Logins",
      data: labels.map(() => faker.datatype.number({ min: 20, max: 200 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Overview = () => {
  const stats = [
    { label: "Total Users", value: "2,765", change: "+10%" },
    { label: "New Users", value: "253", change: "+10%" },
    { label: "Average Users", value: "896", change: "+10%" },
  ];

  // Component for stat cards
  const StatCard = ({ label, value, change }) => (
    <div className="bg-brand-white rounded-lg p-4 text-center shadow-lg">
      <p className="text-sm text-brand-dark">{label}</p>
      <p className="text-xl text-brand-dark font-semibold">{value}</p>
      <p className="text-sm text-green-500">{change}</p>
    </div>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Top stats */}
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          label={stat.label}
          value={stat.value}
          change={stat.change}
        />
      ))}

      <div className="bg-brand-white shadow-lg rounded-lg py-2">
      <h2 className="text-xl font-bold mb-4 text-brand-dark ml-5 mt-3">Categories</h2>
        <Pie data={pieData} />
      </div>

      {/* Performance graph */}
      <div className="md:col-span-2 bg-brand-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-brand-dark">Performance</h2>
        {/* Placeholder for graph */}
        <Line options={options} data={lineData} />
      </div>

      {/* Details */}
      {/* <div className="bg-gray-900 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <div className="text-sm text-gray-400">
                <p>
                  Previous Close: <span className="text-white">4,324.32</span>
                </p>
                <p>
                  Year Range:{" "}
                  <span className="text-white">4,834.32 - 4,932.53</span>
                </p>
                <p>
                  Day Range:{" "}
                  <span className="text-white">2,623.28 - 3,823.74</span>
                </p>
                <p>
                  Market Cap: <span className="text-white">$23.7 T</span>
                </p>
                <p>
                  P/E Ratio: <span className="text-white">82.73</span>
                </p>
              </div>
            </div> */}

      {/* Watchlists graph */}
      {/* <div className="md:col-span-2 bg-gray-900 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Watchlists</h2>
              <div className="bg-gray-700 h-40 rounded-lg"></div>
            </div> */}
    </div>
  );
};

export default Overview;
