import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import userImage from "../../../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Sign Out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="text-lg font-medium" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium" to="/about">
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mt-8">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="w-6" src={logo} alt="website-logo" />
            <span className="text-3xl font-bold">
              s.<span className="text-yellow-500">A</span>cademy
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <label
              tabIndex={0}
              data-tip={user?.displayName}
              className="btn btn-ghost btn-circle avatar mr-2 tooltip"
            >
              <div className="w-10 rounded-full" >
                <img alt="user-image" src={user?.photoURL} />
              </div>
            </label>
          ) : (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mr-2"
            >
              <div className="w-10 rounded-full">
                <img alt="user-image" src={userImage} />
              </div>
            </label>
          )}

          {user ? (
            <button onClick={handleSignOut} className="btn text-lg font-medium">
              Sign Out
            </button>
          ) : (
            <button className="btn text-lg font-medium">
              <Link to="/signIn">Sign In</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
