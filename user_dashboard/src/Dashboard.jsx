import { React, useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Toggle } from "react-toggle";
import { Switch } from "@mui/material";

const titles = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Groceries & Gourmet Food",
  "Baby Products",
  "Books & Stationery",
  "Sports & Fitness",
  "Toys & Games",
  "Movies & Music",
  "Pet Supplies",
  "Automotive",
  "Tools & Hardware",
  "Garden & Outdoors",
  "Health & Nutrition",
  "Musical Instruments",
  "Office Supplies",
  "Industrial & Scientific",
  "Arts & Crafts",
  "Gift Cards",
];

const permissions = [
  "Track site activity",
  "Share personal preferences",
  "Share order history",
];

function removeItem() {}

const Card = ({ title }) => {
  return (
    <>
      <div className="h-30 w-30 bg-white rounded-lg px-5 py-2 mx-2 shadow-xl">
        <p className="block text-lg text-center py-2">{title}</p>
        <div className="flex justify-around mb-0">
          <FontAwesomeIcon icon={faPlus} />
          <FontAwesomeIcon icon={faMinus} onClick={removeItem} />
        </div>
      </div>
    </>
  );
};

const SettingCard = ({ title }) => {
  return (
    <>
      <div className="flex justify-begin">
        <p className="text-lg">{title}</p>
        <Switch />
      </div>
    </>
  );
};

const variable = "title";

const Dashboard = () => {
  return (
    <>
      <div className="w-screen h-screen">
        {/* header */}
        <header className="h-fit bg-brand-dark p-4 flex justify-between text-white">
          <p className="font-bold text-4xl space-mono">Privacy Center</p>
          <div className="font-bold text-2xl">Amazon | Nikhil</div>
        </header>
        {/* topics */}
        <div className="p-5">
          <div className="h-fit bg-brand-white shadow-2xl rounded-lg">
            <div className="p-4">
              <h2 className="font-bold text-2xl ml-2 mt-2">Topics</h2>
              <h3 className="text-xl ml-2 mt-2">
                Choose your preffered topics
              </h3>
              <div className="flex overflow-scroll py-5">
                {titles.map((title, index) => (
                  <Card title={title} key={index} />
                ))}
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        {/* toggle settings */}
        <div className="p-5">
          <div className="h-fit rounded-xl bg-brand-white shadow-2xl">
            <div className="p-4">
              <h2 className="font-bold text-2xl ml-2 mt-2">Settings</h2>
              <h3 className="text-xl ml-2 mt-2">Change what information is collected</h3>
            </div>
            <div className="px-8 pb-3">
              {permissions.map((permission, index) => (
                <SettingCard title={permission} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
