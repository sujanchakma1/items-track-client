import React from "react";
import { motion } from "framer-motion";

const RecoveredItemColumn = ({ recovered }) => {
  console.log(recovered);
  const {
    thumbnail,
    title,
    description,
    photoURL,
    name,
    recoveredDate,
    recoveredLocation,
    post_type,
    location,
    date,
  } = recovered;
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      className="card bg-base-200 shadow-md"
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
        <p>{description}</p>
        <div>
          {post_type} in
          <span className="text-sm opacity-50"> {location}</span>
        </div>
        <div>
          {post_type} on
          <span className="text-sm opacity-50"> {date}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div>
              {" "}
              Recovered by <span className="font-bold">{name}</span> !
            </div>
            <div>
              Recovered in{" "}
              <span className="text-sm opacity-50">
                {recoveredLocation}
              </span>
            </div>
            <div>
              Recovered on{" "}
              <span className="text-sm opacity-50">{recoveredDate}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecoveredItemColumn;
