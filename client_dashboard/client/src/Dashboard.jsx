import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHouse,
  faServer,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
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
import { faker } from "@faker-js/faker";
import Overview from "./components/overview";
import FormCreator from "./components/forms";
import Tracker from "./components/tracking";
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";

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
      text: "Chart.js Line Chart",
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

const DashboardPage = () => {
  const [index, setIndex] = useState(0);

  const compArr = (index) => {
    if (index == 0) return <Overview />;
    else if (index == 1) return <FormCreator />;
    else return <Tracking />;
  };

  // Dummy data for stats
  const stats = [
    { label: "Total Users", value: "2,765", change: "+10%" },
    { label: "New Users", value: "253", change: "+10%" },
    { label: "Average Users", value: "896", change: "+10%" },
  ];

  // Component for stat cards
  const StatCard = ({ label, value, change }) => (
    <div className="bg-brand-white rounded-lg p-4 text-center">
      <p className="text-sm text-brand-dark">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-sm text-green-500">{change}</p>
    </div>
  );

  const activeStyle = {
    backgroundColor: "rgba(74, 144, 226, 0.2)", // or any color you want for the active item
    color: "rgba(74, 144, 226, 1)",
  };

  return (
    <div className="bg-gray-100 h-full text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="h-full bg-white w-64 py-6 px-6">
          <h2 className="font-bold text-brand-dark py-3 text-3xl">Dashboard</h2>
          <button
            className="flex justify-center py-4 mt-4"
            onClick={() => setIndex(0)}
          >
            <FontAwesomeIcon icon={faHouse} size="lg" color="black" />
            <p className="px-3 text-xl text-brand-dark font-bold">Home</p>
          </button>
          <button
            className="flex justify-evely py-4"
            onClick={() => setIndex(1)}
          >
            <FontAwesomeIcon icon={faCode} size="lg" color="black" />
            <p className="px-3 text-xl text-brand-dark font-bold">Forms</p>
          </button>
          <button
            className="flex justify-evely py-4"
            onClick={() => setIndex(2)}
          >
            <FontAwesomeIcon icon={faServer} size="lg" color="black" />
            <p className="px-3 text-xl text-brand-dark font-bold">Tracking</p>
          </button>
          <div className="flex justify-evely py-4 mt-96">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size="lg"
              color="black"
            />
            <p className="px-3 text-xl text-brand-dark font-bold">Logout</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {index == 0 && <Overview />}
          {index == 1 && <FormCreator />}
          {index == 2 && <Tracker />}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
