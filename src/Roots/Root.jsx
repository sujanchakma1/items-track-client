import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="outlet bg-amber-50 ">
        <div className="lg:max-w-6xl mx-10 lg:mx-auto mt-22 py-10">
          <Outlet></Outlet>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;
