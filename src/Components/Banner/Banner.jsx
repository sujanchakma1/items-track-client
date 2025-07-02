import React from "react";
import banner from "../../assets/Banner/banner.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="-mt-10">
      <div className="relative flex justify-center">
        <img src={banner} alt="" className="w-full h-[400px] object-cover" />
        <div className="absolute space-y-2 text-center mt-20  lg:mt-24 bg-black/50 p-5 rounded-md lg:max-w-lg max-w-md text-white">
          <h2 className="text-5xl font-bold items-center">
            Welcome to{" "}
            <span className="font text-5xl font-bold items-center">
              <span className="text-[#c133ff] font font-semibold"> Items</span>
              Track
            </span>
          </h2>
          <p className="">
            It is a lost and found item tracking website where users can post
            lost or found items with details and images. It helps people
            reconnect with their lost belongings easily.
          </p>
          <Link to="/allItems">
            <button className="btn btn-primary rounded-lg">
              See Lost & Found Items
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
