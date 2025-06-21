import React from "react";
import Logo from "../../assets/Logo/Logo.png";
import { Link, NavLink } from "react-router";
import UseAuth from "../../Contexts/UseAuth";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOutUser } = UseAuth();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allItems">Lost & Found Items</NavLink>
      </li>
      <li>
        <NavLink to="/addItems">Add Lost & Found Item</NavLink>
      </li>
      <li>
        <NavLink to="/recoveredItems">All Recovered Item</NavLink>
      </li>
      <li>
        <NavLink to="/myItems">Manage My Items</NavLink>
      </li>
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
    <div className="bg-emerald-950 text-white shadow-sm fixed w-full top-0 z-50">
      <div className="navbar flex justify-between max-w-11/12 mx-auto">
        <div className="flex items-center ">
          <img src={Logo} alt="" className="w-24 items-center -mr-5 mb-3" />
          <h2 className="font text-3xl font-bold items-center">
            <span className="text-[#c133ff] font font-semibold">Items</span>Track
          </h2>
        </div>
        <div className=" hidden lg:flex lg:*:gap-5">
          <ul className="menu-horizontal px-1 py-2  rounded-sm">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allItems">Lost & Found Items</NavLink>
            </li>
          </ul>
        </div>
        <div className=" flex gap-5 items-center">
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
              <button onClick={handleLogOutUser} className="btn btn-primary">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/auth/login">
                {" "}
                <button className="btn btn-primary">Login</button>
              </Link>
              <Link to="/auth/register">
                <button className="btn btn-primary">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
