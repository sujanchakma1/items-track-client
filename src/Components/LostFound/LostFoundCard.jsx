import React from "react";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router";

const LostFoundCard = ({ LostFound }) => {
  const { thumbnail, title, description, _id, location } = LostFound;
  return (
    <div className="card bg-base-300 shadow-md hover:shadow-xl">
      <figure>
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="w-full h-[300px] object-cover p-5 rounded"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <p>Location : {location}</p>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={`/allItems/details/${_id}`} className="w-full">
            <button className="btn btn-primary w-full rounded-full items-center">
             <IoIosMore size={18}/> See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LostFoundCard;
