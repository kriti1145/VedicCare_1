import React, { useEffect, useState, useContext } from "react";
import logo from "../assets/Images/logo.png";
import { authContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { user, role, token, setUser, setToken, setRole } =
    useContext(authContext); // Assuming your context allows updating state
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate(); // to navigate after logout

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    window.location.href = "/login"; // Force reload to login page
  };

  const navItems = (
    <>
      <li className="nav-li">
        <a
          className="block px-4 py-2 text-sm lg:text-base font-medium"
          href="/home"
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a
          className="block px-4 py-2 text-sm lg:text-base font-medium"
          href="/service"
        >
          Service
        </a>
      </li>
      {role !== "doctor" && (
        <li className="nav-li">
          <a
            className="block px-4 py-2 text-sm lg:text-base font-medium"
            href="/findDoctor"
          >
            Find a Doctor
          </a>
        </li>
      )}
      <li className="nav-li">
        <a
          className="block px-4 py-2 text-sm lg:text-base font-medium"
          href="/contact"
        >
          Contact
        </a>
      </li>
      {!token && (
        <li className="nav-li block lg:hidden">
          <a
            className="block px-4 py-2 text-sm lg:text-base font-medium"
            href="/login"
          >
            Login
          </a>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-3 px-2 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md stick duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar flex items-center justify-between">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow rounded-box w-52 bg-gray-200"
            >
              {navItems}
            </ul>
          </div>
          <img src={logo} alt="" className="w-8 h-8 md:w-10 md:h-10" />
          <a
            className={`logo text-lg lg:text-2xl font-bold cursor-pointer ${
              sticky ? "logo-stick" : ""
            }`}
            href="/home"
          >
            VEDIcCARE
          </a>
        </div>
        <div className="navbar-center hidden lg:flex item-center">
          <ul
            className={`menu menu-horizontal px-1 ${
              sticky
                ? "nav-bar-menu-md duration-300 transition-all ease-in-out"
                : ""
            }`}
          >
            {navItems}
          </ul>
        </div>

        <div className="navbar-end flex items-center space-x-3">
          {token && user ? (
            <div className="flex items-center space-x-4">
              <Link
                to={`${
                  role === "doctor"
                    ? "/doctors/profile/me"
                    : "/users/profile/me"
                }`}
                className="flex space-x-3 items-center"
              >
                {user.photo && (
                  <figure className="w-[40px] h-[40px] rounded-full border border-solid border-[#7cb8aa] flex items-center justify-center bg-gray-200">
                    <img
                      src={user.photo}
                      className="w-full h-full rounded-full bg-gray-200"
                      alt="Profile"
                    />
                  </figure>
                )}
                <h2 className="py-2 font-bold text-md">{user.name}</h2>
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold transition-all duration-300 logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:block">
              <a
                href="/login"
                className={`bg-white px-6 py-2 duration-300 cursor-pointer login ${
                  sticky ? "txt duration-300 transition-all ease-in-out" : ""
                }`}
              >
                Login
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
