import React, { use } from "react";
import LostFoundCard from "./LostFoundCard";
import { FaRightToBracket } from "react-icons/fa6";
import { Link } from "react-router";

const LostFound = ({ lostFoundPromise }) => {
  const lostFounds = use(lostFoundPromise);

  // console.log(lostFounds)
  return (
    <div className="my-10 space-y-10">
      <h2 className="text-5xl text-center font-bold text-[#ffb533]">Lost $ Found Items</h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {lostFounds.map((LostFound) => (
          <LostFoundCard
            key={LostFound._id}
            LostFound={LostFound}
          ></LostFoundCard>
        ))}
      </div>
      <Link to="/allItems">
        <button className="btn btn-outline btn-primary w-full">
          <FaRightToBracket />
          See All
        </button>
      </Link>
    </div>
  );
};

export default LostFound;
