import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FoodContext } from "../context/FoodContext"; // adjust path

const Navbar = () => {
  let navigate = useNavigate();
  const { token, clearToken } = useContext(FoodContext);

  return (
    <div className="w-full h-[72px] border-b border-gray-200 py-4 px-6 flex items-center justify-between font-medium bg-[#fffffe]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chef-hat w-6 h-6 text-white"
          >
            <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
            <path d="M6 17h12"></path>
          </svg>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Delizioso
          </h1>
          <p className="text-xs text-gray-500 -mt-1">Fine Dining</p>
        </div>
      </div>

      {/* Links */}
      <ul className="sm:flex gap-5 text-base text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 group">
          <p className="relative font-medium text-gray-800 hover:text-orange-600 cursor-pointer pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
            Home
          </p>
        </NavLink>

        <NavLink to="/menu" className="flex flex-col items-center gap-1">
          <p className="relative font-medium text-gray-800 hover:text-orange-600 cursor-pointer pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
            Menu
          </p>
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="relative font-medium text-gray-800 hover:text-orange-600 cursor-pointer pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
            About
          </p>
        </NavLink>
      </ul>

      {/* Right section */}
      <div className="flex items-center gap-6">
        {/* Cart button */}
        <button
          onClick={() => navigate("/cart")}
          className="inline-flex items-center justify-center gap-2 rounded-md h-10 w-10 relative hover:bg-orange-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart w-5 h-5 text-gray-600"
          >
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>
        </button>

        {/* Profile button */}
        {token && (
          <button
            onClick={() => navigate("/profile")}
            className="inline-flex items-center justify-center gap-2 rounded-md h-10 w-10 hover:bg-orange-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user w-5 h-5 text-gray-600"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        )}

        {/* Show Login/Register if NOT logged in */}
        {!token ? (
          <button
            onClick={() => navigate("/loginOrRegister")}
            className="items-center bg-[#f6970d] justify-center gap-2 rounded-md font-medium h-10 px-4 py-2 text-sm text-white hover:text-gray-800 hidden sm:flex"
          >
            Login/Register
          </button>
        ) : (
          <button
            onClick={() => {
              clearToken();
              navigate("/");
            }}
            className="items-center bg-red-500 justify-center gap-2 rounded-md font-medium h-10 px-4 py-2 text-sm text-white hover:bg-red-600 hidden sm:flex"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
