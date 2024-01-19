import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiBarChartAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  FaUserCircle,
  FaRegHeart,
  FaRegCreditCard,
} from "react-icons/fa";
import { BiLogOut, BiMessageSquareDetail} from "react-icons/bi";

import {
  IoBagOutline,
  IoSettingsOutline,
  IoChatbubbleOutline,
  IoAnalyticsOutline,
} from "react-icons/io5";

// Dummy data for graph
const graphData = [
  { name: "Sunday", views: 2000 },
  { name: "Monday", views: 3000 },
  { name: "Tuesday", views: 1500 },
  { name: "Wednesday", views: 3500 },
  { name: "Thursday", views: 2800 },
  { name: "Friday", views: 4000 },
  { name: "Saturday", views: 4500 },
];

const adsData = [
  {
    title: "Toyota Fielder",
    price: "160.00",
    category: "Home & Living",
    imageUrl:
      "https://imgctcf.aeplcdn.com/thumbs/p-nc-p-s500-ver4/images/cars/Toyota-Corolla-Cross.JPG?q=75",
  },
  {
    title: "Samsung Galaxy S21",
    price: "799.00",
    category: "Electronics",
    imageUrl:
      "https://fdn.gsmarena.com/imgroot/reviews/21/samsung-galaxy-s21-ultra/lifestyle/-1200w5/gsmarena_003.jpg",
  },
  {
    title: "Leather Sofa",
    price: "299.99",
    category: "Furniture",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/292368048/MT/PU/VB/3675667/leather-sofa-set.png",
  },
  {
    title: "Mountain Bike",
    price: "475.00",
    category: "Sports & Outdoors",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/ride-mountain-bike-shorts-642ade5f2f26d.jpg?crop=0.501xw:1.00xh;0.193xw,0&resize=640:*",
  },
  {
    title: "Professional Camera",
    price: "1220.00",
    category: "Photography",
    imageUrl:
      "https://i.pinimg.com/originals/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg",
  },
];

const activitiesData = [
  {
    icon: <FaRegHeart />,
    text: 'Your ad "v21 48mp osi selfie" is successfully published.',
    link: "#",
  },
  {
    icon: <AiOutlineMessage />,
    text: "John Wick saved your ad to his favourite collection.",
    link: "#",
  },
  {
    icon: <AiOutlineSetting />,
    text: "Please complete your profile editing to post ads.",
    link: "#",
  },
  {
    icon: <FaUserCircle />,
    text: 'Your ad "converse blue training shoes" is successful published.',
    link: "#",
  },
  {
    icon: <BiLogOut />,
    text: "Sir, 5 days remaining to complete your Adlisting membership charge.",
    link: "#",
  },
];
// const Sidebar = () => {

//   return (

//   );
// };
const HeaderCard = ({ icon, title, count }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      {icon}

      <div className="ml-4">
        <p className="text-sm font-semibold text-gray-700">{title}</p>
        <p className="text-lg font-bold">{count}</p>
      </div>
    </div>
  );
};
const Graph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="views" fill="#3182CE" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const ActivityItem = ({ icon, text, link }) => {
  return (
    <div className="flex items-start space-x-4 p-2">
      <div className="text-green-500">{icon}</div>
      <div className="flex-1">
        <p className="text-sm">{text}</p>
        {link && (
          <a href={link} className="text-blue-500 text-xs">
            View ad
          </a>
        )}
      </div>
    </div>
  );
};
const AdItem = ({ title, price, category, imageUrl }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <img src={imageUrl} alt="Ad" className="h-16 w-16 object-cover rounded" />
      <div>
        <h5 className="text-md font-semibold">{title}</h5>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-lg font-bold">${price}</p>
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="p-5">
      {/* Header cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <HeaderCard
          icon={<BiBarChartAlt2 size={20} className="text-blue-500" />}
          title="Posted Ads"
          count="27"
        />
        <HeaderCard
          icon={<FaRegHeart size={20} className="text-green-500" />}
          title="Favourite Ads"
          count="43"
        />
        <HeaderCard
          icon={<BiLogOut size={20} className="text-red-500" />}
          title="Expire Ads"
          count="14"
        />
      </div>

      <div className="flex flex-row gap-4 items-stretch">
        {/* Graph Section */}
        <div className="w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Ads View</h2>
          <Graph data={graphData} />
        </div>

        {/* Activity Feed Section */}
        <div className="w-1/2 h-full bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          {activitiesData.map((activity, index) => (
            <ActivityItem
              key={index}
              icon={activity.icon}
              text={activity.text}
              link={activity.link}
            />
          ))}
        </div>
      </div>

      {/* Recently PostedAds Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Recently Posted Ads</h2>
        <div className="space-y-4 overflow-x-auto">
          {adsData.map((ad, index) => (
            <AdItem
              key={index}
              title={ad.title}
              price={ad.price}
              category={ad.category}
              imageUrl={ad.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PostAdForm = () => {
  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here
  };

  // Placeholder for upload image handler
  const handleImageUpload = () => {
    // Image upload logic goes here
  };

  return (
    <div className="m-5 p-5 bg-white">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6">POST YOUR AD</h1>

        {/* Ad Name */}
        <div className="mb-4">
          <label
            htmlFor="adName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Ad Name
          </label>
          <input
            type="text"
            id="adName"
            name="adName"
            placeholder="Ad Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Category and Subcategory */}
        <div className="flex mb-4 space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select...</option>
              {/* Options would be populated here */}
            </select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="subcategory"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Subcategory
            </label>
            <select
              id="subcategory"
              name="subcategory"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select...</option>
              {/* Options would be populated here */}
            </select>
          </div>
        </div>

        {/* Brand and Model */}
        <div className="flex mb-4 space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="brand"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Brand
            </label>
            <select
              id="brand"
              name="brand"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select...</option>
              {/* Options would be populated here */}
            </select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="model"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Model
            </label>
            <select
              id="model"
              name="model"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select...</option>
              {/* Options would be populated here */}
            </select>
          </div>
        </div>

        {/* Ad Tags */}
        <div className="mb-4">
          <label
            htmlFor="adtags"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tags
          </label>
          <input
            type="text"
            id="adtags"
            name="adtags"
            placeholder="Ad Tags..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Price and Nego */}
        <div className="mb-4 flex flex-wrap -mx-3">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="adPrice"
            >
              Ad Price (INR)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="adPrice"
              type="text"
              placeholder="Pick a good price - what would you pay?"
            />
          </div>
        </div>

        {/* Ad Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ad description"
          ></textarea>
        </div>

        {/* Ad Features */}
        <div className="mb-4">
          <label
            htmlFor="feature"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Feature (optional)
          </label>
          <textarea
            id="feature"
            name="feature"
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={
              "Write a feature in each line eg.\nFeature 1 \nFeature 2"
            }
          ></textarea>
        </div>

        {/* Photo Upload Section */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Photos
          </label>
          <div className="flex items-center">
            {/* Placeholder for uploaded images */}
            <div className="p-2 border rounded-lg mr-2">
              <img
                src={
                  "https://i.pinimg.com/originals/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg"
                }
                alt="Ad"
                className="h-16 w-16 object-cover
              rounded"
              />
            </div>
            <div className="p-2 border rounded-lg mr-2">
              <img
                src={
                  "https://imgeng.jagran.com/images/2022/nov/Best%20Cameras%20For%20Photography1669186135779.jpg"
                }
                alt="Ad"
                className="h-16 w-16 object-cover
              rounded"
              />
            </div>
            {/* Upload Button */}
            <button
              onClick={handleImageUpload}
              className="p-4 border rounded-lg bg-gray-200"
            >
              +
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <div className="flex rounded-md shadow-sm">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Phone"
              />
            </div>
          </div>

          {/* Backup Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="backupPhone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Backup Phone Number (Optional)
            </label>
            <div className="flex rounded-md shadow-sm">
              <input
                type="tel"
                id="backupPhone"
                name="backupPhone"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Backup Phone"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email address"
            />
          </div>

          {/* Website Link */}
          <div className="mb-4">
            <label
              htmlFor="website"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Website Link (Optional)
            </label>
            <input
              type="url"
              id="website"
              name="website"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your website url"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Country */}
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select...</option>
              {/* Populate with countries */}
            </select>
          </div>

          {/* City */}
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              City
            </label>
            <select
              id="city"
              name="city"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select...</option>
              {/* Populate with cities */}
            </select>
          </div>

          {/* State */}
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              State (Optional)
            </label>
            <select
              id="state"
              name="state"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select...</option>
              {/* Populate with states */}
            </select>
          </div>
        </div>

        {/* Location & Map Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Location */}
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your location"
            />
          </div>

          {/* Map Location */}
          <div className="mb-4">
            <label
              htmlFor="mapLocation"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Map Location (Optional)
            </label>
            <input
              type="text"
              id="mapLocation"
              name="mapLocation"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Map location"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Post Ads
          </button>
          <button
            type="button"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            View Posting Rules
          </button>
        </div>
      </form>
    </div>
  );
};

const Dummy = () => {
  return <div className="p-5 w-full h-screen"></div>;
};

const Dashboard = () => {
  // Dummy data for the sake of this example

  const [index, setIndex] = useState(0);

  // const compArr = (index) => {
  //   if (index == 0) return <Overview />;
  //   else if (index == 1) return <PostAdForm />;
  //   else return <Dummy />;
  // };

  // const activeStyle = {
  //   backgroundColor: "rgba(74, 144, 226, 0.2)", // or any color you want for the active item
  //   color: "rgba(74, 144, 226, 1)",
  // };

  const navigate = useNavigate();

  function handlenavigate() {
    navigate("/");
  }

  const buttonBaseStyle = "flex items-center space-x-2 py-2 pl-5 w-full";
  const buttonActiveStyle =
    "flex items-center space-x-2 py-2 pl-5 w-full bg-blue-200 text-blue-500";

  return (
    <div className="flex h-full w-full bg-gray-100">
      <aside className="w-64 bg-white pt-5">
        <div className="flex items-center space-x-2 pl-5 ">
          <FaUserCircle size={40} />
          <span>Calvin Klein</span>
        </div>
        <nav className="mt-5">
          <button
            onClick={() => setIndex(0)}
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${buttonBaseStyle} ${
              index === 0 ? buttonActiveStyle : ""
            }`}
          >
            <AiOutlineHome size={20} />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setIndex(1)}
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${buttonBaseStyle} ${
              index === 1 ? buttonActiveStyle : ""
            }`}
          >
            <BiMessageSquareDetail size={20} />
            <span>Post a Ad</span>
          </button>
          <button
            onClick={() => setIndex(2)}
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${buttonBaseStyle} ${
              index === 2 ? buttonActiveStyle : ""
            }`}
          >
            <IoBagOutline size={20} />
            <span>My Ads</span>
          </button>
          <button
            onClick={() => setIndex(7)}
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${buttonBaseStyle} ${
              index === 7 ? buttonActiveStyle : ""
            }`}
          >
            <IoAnalyticsOutline size={20} />
            <span>Analytics</span>
          </button>
          <button
            onClick={() => setIndex(3)}
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${buttonBaseStyle} ${
              index === 3 ? buttonActiveStyle : ""
            }`}
          >
            <IoChatbubbleOutline size={20} />
            <span>Messages</span>
          </button>
          <button
            onClick={() => setIndex(4)}
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${buttonBaseStyle} ${
              index === 4 ? buttonActiveStyle : ""
            }`}
          >
            <FaRegCreditCard size={20} />
            <span>Plans & Billing</span>
          </button>
          <button
            onClick={() => setIndex(5)}
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${buttonBaseStyle} ${
              index === 5 ? buttonActiveStyle : ""
            }`}
          >
            <IoSettingsOutline size={20} />
            <span>Account Settings</span>
          </button>
          <button
            onClick={handlenavigate}
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${buttonBaseStyle} ${
              index === 6 ? buttonActiveStyle : ""
            }`}
          >
            <BiLogOut size={20} />
            <span>Sign Out</span>
          </button>
        </nav>
      </aside>
      <main className="flex-1">
        {index == 0 && <Overview />}
        {index == 1 && <PostAdForm />}
        {index > 1 && <Dummy />}
        {/* {index == 2 && <Dummy />} */}
      </main>
    </div>
  );
};

export default Dashboard;
