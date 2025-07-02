import React from "react";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router";

const AllItemsCard = ({ allItems }) => {
  // console.log(allItems);
  const { thumbnail, description, _id, title, post_type, location } = allItems;
  return (
    <div
      whileHover={{ scale: 0.9 }}
      className="card bg-base-200 shadow-md hover:shadow-xl"
    >
      <figure>
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="w-full h-[300px] object-cover rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <h2 className="card-title">Post Type: {post_type}</h2>
        <p>Location : {location}</p>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={`/allItems/details/${_id}`} className="w-full">
            <button className="btn btn-primary w-full rounded-lg">
              <IoIosMore size={18} /> See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllItemsCard;
