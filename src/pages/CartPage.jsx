import React from "react";
import { useSelector } from "react-redux";
import CartItemComponent from "../components/CartItemComponent";

function CartPage() {
  const { cart, totalPrice } = useSelector((state) => state.cartStore);
  console.log(cart);

  return (
    <div className="px-5 lg:px-0">
      {cart.length > 0 ? (
        <div className="mt-5 lg:mt-12">
          <div className="container mx-auto flex flex-col justify-between lg:flex-row gap-3">
            {/* left side */}
            <div className="w-full lg:w-[70%]">
              <div className="grid grid-cols-4 bg-blue-200 h-[60px] place-items-center">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
              {/* body content */}
              <div>
                {cart.map((item, index) => {
                  return <CartItemComponent key={index} index={index} item={item} />;
                })}
              </div>
            </div>
            {/* right side */}
            <div className="flex flex-col gap-2">
             <div className="bg-blue-200 text-center">
               <h1 className="text-center text-2xl font-bold px-10">Total Price</h1>

              <span className="text-xl text-center">${totalPrice}</span>
             </div>

              <button className="bg-yellow-600 text-white px-5 py-2 rounded-lg cursor-pointer">Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div>Nema proizvoda</div>
      )}
    </div>
  );
}

export default CartPage;
