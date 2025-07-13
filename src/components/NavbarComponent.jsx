import React from "react";
import HeadingComponent from "./HeadingComponent";
import { Link } from "react-router-dom";
//logo
import logo from "../assets/images/logo-bosch.png";
//cart
import { CiShoppingCart } from "react-icons/ci";
function NavbarComponent() {
  return (
    <div>
      <HeadingComponent />
      <nav className="bg-blue-600 h-full lg:h-[100px] py-5">
        <div className="container mx-auto gap-5 flex flex-col lg:flex-row items-center h-full justify-between">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <img className="h-[70px]" src={logo} alt="Logo" />
            </Link>
          </div>
          {/* Search Bar */}
          <div className="bg-white rounded-[20px]">
            <input
              className="bg-transparent outline-none px-[25px] py-[17px]"
              type="text"
              placeholder="Search product"
            />
            <button className="bg-yellow-500 text-whiteTextColor px-[25px] py-[17px] rounded-[20px]">
              Search
            </button>
          </div>

          {/* Links */}
          <div className="">
            <Link
              to="/cart"
              className="flex justify-center items-center text-white text-xl"
            >
              <CiShoppingCart color="white" size={30} />
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
