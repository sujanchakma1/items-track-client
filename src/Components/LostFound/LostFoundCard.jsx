import { motion } from "framer-motion";
import React from "react";
import { TbDetails } from "react-icons/tb";
import { Link } from "react-router";

const LostFoundCard = ({ LostFound }) => {
  const { thumbnail, title, description,_id,location } = LostFound;
  return (
    <motion.div 
            whileHover={{ scale: 0.9 }}
             className="card bg-base-200 shadow-md">
      <figure>
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="w-full h-[300px] object-cover rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <p>Location : {location}</p>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={`/allItems/details/${_id}`} className="w-full">
            <button className="btn btn-primary w-full">
              <TbDetails />
              Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default LostFoundCard;
