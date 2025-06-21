import React from 'react';
import { FaLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const ItemsNotRecovered = () => {
  return (
    <div className="text-center items-center space-y-5 p-10 bg-base-200 rounded-2xl">
      <h2 className="text-2xl font-semibold">
        You haven't Recovered any Items yet.!
      </h2>
      <h2 className="text-2xl font-bold">Please Recovered a Items</h2>
      <Link to="/allItems">
        {" "}
        <button className="btn btn-primary"><FaLeftLong size={18} />Recovered Items</button>
      </Link>
    </div>
  );
};

export default ItemsNotRecovered;