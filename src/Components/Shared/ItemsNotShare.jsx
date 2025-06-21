import React from "react";
import { FaLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const ItemsNotShare = () => {
  return (
    <div className="text-center items-center space-y-5 p-10 bg-base-200 rounded-2xl">
      <h2 className="text-2xl font-semibold">
        You haven't Added any Items yet.!
      </h2>
      <h2 className="text-2xl font-bold">Please Added a Items</h2>
      <Link to="/addItems">
        {" "}
        <button className="btn btn-primary"><FaLeftLong size={18} />Added Items</button>
      </Link>
    </div>
  );
};

export default ItemsNotShare;
