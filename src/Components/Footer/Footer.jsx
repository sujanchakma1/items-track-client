import React from "react";
import { GoMoveToTop } from "react-icons/go";
import logo from "../../../public/Logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" text-white bg-secondary p-20">
      <section className="max-w-6xl mx-auto footer sm:footer-horizontal">
        {" "}
        <aside>
          <div className="flex items-center">
            <img src={logo} alt="" className="w-36 -ml-10" />
            <h2 className="font text-4xl  font-bold -ml-10 mt-8">
              <span className="text-[#c133ff] font font-bold">Items</span>Track
            </h2>
          </div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="font text-2xl font-bold">
              <span className="text-[#c133ff] font font-bold">Items</span>Track
            </span>{" "}
            is owner{" "}
            <a
              className="underline text-blue-300"
              href="https://www.facebook.com/share/1LL4u1yggP/"
            >
              SUJAN CHAKMA
            </a>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <h1 className="link link-hover">
            <Link to="/">Home</Link>
          </h1>
          <h1 className="link link-hover">
            <Link to="/allItems">Lost & Found Items</Link>
          </h1>
          <h1 className="link link-hover">
            <Link to="/addItems">Add Lost & Found Item</Link>
          </h1>
          <h1 className="link link-hover">
            <Link to="/recoveredItems">All Recovered Item</Link>
          </h1>
          <h1 className="link link-hover">
            <Link to="/myItems">Manage My Items</Link>
          </h1>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <h1 className="">Terms of use</h1>
          <h1 className="">Privacy policy</h1>
          <h1 className="">Cookie policy</h1>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
