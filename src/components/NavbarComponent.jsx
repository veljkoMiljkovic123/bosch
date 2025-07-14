import React from "react";
import { useSelector } from "react-redux";
import HeadingComponent from "./HeadingComponent";
import { Link } from "react-router-dom";
//logo
import logo from "/public/images/logo-bosch.png";
//cart
import { CiShoppingCart } from "react-icons/ci";

function NavbarComponent() {
  const { totalProduct } = useSelector((state) => state.cartStore);
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
       

         {/* Links */}
<div className="flex justify-center items-center">
  <Link
    to="/cart"
    className="flex justify-center items-center text-white text-xl gap-1"
  >
    {/* Ikonica */}
    <CiShoppingCart color="white" size={25} />
    
    {/* Badge pored ikonice */}
    <span className="bg-yellow-600 w-[20px] h-[20px] rounded-full flex items-center justify-center text-xs text-black font-bold">
      {totalProduct}
    </span>

    <span className="ml-1">Cart</span>
  </Link>
</div>

        </div>
      </nav>
    </div>
  );
}
/* bg-yellow-600 w-[20px] h-[20px] rounded-full flex-center justify-center */
export default NavbarComponent;
