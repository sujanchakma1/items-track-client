import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="outlet bg-amber-50">
        <div className="max-w-11/12 mx-auto mt-22 py-10 mb-0">
          <Outlet></Outlet>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;
