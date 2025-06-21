import React, { use } from "react";
import {
  FaUserFriends,
  FaBoxOpen,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";

const usersPromise = fetch(
  "https://where-is-it-server-ten.vercel.app/users"
).then((res) => res.json());

const Statistic = ({ allLostFoundPromise }) => {
  const allLostFound = use(allLostFoundPromise);
  const users = use(usersPromise);

  const totalLost = allLostFound.filter(
    (item) => item.post_type === "Lost"
  ).length;
  const totalFound = allLostFound.filter(
    (item) => item.post_type === "Found"
  ).length;
  const totalRecovered = allLostFound.filter(
    (item) => item.status === "recovered"
  ).length;

  return (
    <div className="my-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-10 text-gray-800">
           <span className="text-[#8033ff]">Platform Statistics</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Lost Items */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
            <div className="mb-4">
              <FaSearch className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-3xl mb-3 font-semibold text-gray-700">
              {totalLost}
            </h3>
            <p className="text-gray-500">Total Lost Items</p>
          </div>

          {/* Found Items */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
            <div className="mb-4">
              <FaBoxOpen className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-3xl mb-3 font-semibold text-gray-700">
              {totalFound}
            </h3>
            <p className="text-gray-500">Total Found Items</p>
          </div>

          {/* Recovered Items */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
            <div className="mb-4">
              <FaCheckCircle className="text-purple-600 text-3xl" />
            </div>
            <h3 className="text-3xl mb-3 font-semibold text-gray-700">
              {totalRecovered}
            </h3>
            <p className="text-gray-500">Items Recovered</p>
          </div>
          {/* users */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
            <div className="mb-4">
              <FaUserFriends className="text-orange-500 text-3xl" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-700 mb-3">
              {users.length}
            </h3>
            <p className="text-gray-500">Active Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
