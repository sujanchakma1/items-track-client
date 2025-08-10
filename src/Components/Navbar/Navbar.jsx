import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/Logo.png";
import { Link, NavLink } from "react-router";
import UseAuth from "../../Contexts/UseAuth";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOutUser } = UseAuth();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // dark mode default if no theme saved
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const links = (
    <>
      <li className="link link-hover">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="link link-hover">
        <NavLink to="/allItems">Lost & Found Items</NavLink>
      </li>
      <li className="link link-hover">
        <NavLink to="/addItems">Add Item</NavLink>
      </li>

      {user && (
        <>
          <li className="link link-hover">
            <NavLink to="/recoveredItems">Recovered Item</NavLink>
          </li>
          <li className="link link-hover">
            <NavLink to="/myItems">Manage Items</NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "Successfully Log Out!",
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };
  return (
    <div className="bg-secondary text-white shadow-sm fixed w-full top-0 z-50">
      <div className="navbar flex justify-between max-w-6xl mx-auto">
        <div className="flex items-center -ml-8">
          <img src={Logo} alt="" className="w-24 items-center -mr-5 mb-3" />
          <h2 className="font text-3xl font-bold items-center">
            <span className="text-[#c133ff] font font-semibold">Items</span>
            Track
          </h2>
        </div>
        <div className="flex gap-5 items-center">
          <div className=" hidden lg:flex lg:*:gap-5">
            <ul className="menu-horizontal text-sm">{links}</ul>
          </div>
          <div className=" flex gap-5 items-center">
            {/* DaisyUI Theme Toggle */}
            <div className="">
              <label className="swap swap-rotate cursor-pointer border border-secondary bg-base-200 p-2 rounded-full">
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                  aria-label="Toggle theme"
                />
                {/* Sun icon */}
                <svg
                  className="swap-off h-8 w-8 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                {/* Moon icon */}
                <svg
                  className="swap-on h-8 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            {user ? (
              <>
                <div className="dropdown items-center relative group">
                  <div tabIndex={0} role="button" className="cursor-pointer">
                    <a className="my-anchor-element">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={user.photoURL}
                        alt="Profile"
                      />
                    </a>
                    <Tooltip anchorSelect=".my-anchor-element" place="top">
                      {user.displayName}
                    </Tooltip>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content  bg-gray-500 rounded-box mt-3 w-52 p-2 -left-38 shadow flex gap-5"
                  >
                    {links}
                  </ul>
                </div>
                <button
                  onClick={handleLogOutUser}
                  className="btn btn-primary btn-sm rounded-full"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/auth/login">
                  {" "}
                  <button className="btn btn-primary btn-sm rounded-full">
                    Login
                  </button>
                </Link>
                <Link to="/auth/register">
                  <button className="btn btn-primary btn-outline btn-sm rounded-full">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
