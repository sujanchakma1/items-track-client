import React from "react";
import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner2.webp"
import banner3 from "../../assets/Banner/banner3.webp";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={banner1}
          className="w-full h-[450px] object-cover rounded-md "
        />
        <div className="absolute mt-20 lg:w-[70%] p-16 space-y-2">
          <motion.h2
            className="text-5xl md:text-7xl font-bold"
            animate={{
              color: ["#ff5733", "#ffaf33", "#f633ff  ", "#33afff "],
              transition: { duration: 2, repeat: Infinity },
            }}
          >
             Lost Items Search
          </motion.h2>
          <p>
            A person looking for a lost item (like phone, bag, or pet).
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={banner2}
          className="w-full h-[450px] object-cover rounded-md "
        />
        <div className="absolute mt-20 lg:w-[70%] p-16 space-y-2">
          <motion.h2
            className="text-5xl md:text-7xl  font-bold"
            animate={{
              color: ["#ff5733", "#ffaf33", "#f633ff  ", "#33afff "],
              transition: { duration: 2, repeat: Infinity },
            }}
          >
            Found Items Announcement
          </motion.h2>

          <p >
             Someone holding a found item and looking around or posting about it.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={banner3}
          className="w-full h-[450px] object-cover rounded-md "
        />
        <div className="absolute mt-20 lg:w-[70%] p-16 space-y-2">
          <motion.h2
            className="text-5xl md:text-7xl font-bold"
            animate={{
              color: ["#ff5733", "#ffaf33", "#f633ff  ", "#33afff "],
              transition: { duration: 2, repeat: Infinity },
            }}
          >
            Digital Tracking & Community Help
          </motion.h2>

          <p>
            A tech-based lost & found platform interface / mobile app / people collaborating.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
