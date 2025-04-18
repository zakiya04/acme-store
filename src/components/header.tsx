import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between pb-4 bg-yellow-300">
      <div className="w-1/3 flex items-center justify-around p-4">
        <Link to="/" className="flex items-center justify-center">
          <div className="w-[40px] h-[40px] mr-2 border-[0.5px] border-gray-600 rounded-md">
            <img
              src={logo}
              className="w-full h-full object-cover rounded-md"
            ></img>
          </div>
          <h1 className="text-white font-semibold text-medium">ACME STORE</h1>
        </Link>
        <Link to="/products" className="text-gray-400">
          All
        </Link>
        <Link to="/ptoducts/" className="text-gray-400">
          Men's
        </Link>
        <Link to="" className="text-gray-400">
          Women's
        </Link>
      </div>
      <div className="w-1/3  p-4 ">
        <input
          placeholder="Search for Products..."
          className="border-[0.5px] text-gray-400 border-gray-500 px-3 py-2 w-full h-[40px] rounded-xl"
        ></input>
      </div>
      <div className="w-1/3 flex items-center justify-end p-4 cursor-pointer ">
        <div className="h-[40px] border border-gray-700 w-[40px] rounded-sm flex items-center justify-center">
          <RiShoppingCart2Fill className="text-gray-500 w-[50%] h-[50%] hover:w-[54%] hover:h-[56%] " />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
