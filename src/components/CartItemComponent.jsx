import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteItemCartAction, setPriceHandler } from '../store/cartSlice';

function CartItemComponent({ item,index }) {
    const dispatch = useDispatch()

    function removeItemHandler(){
        dispatch(deleteItemCartAction(item))
    }
  return (
    <div className="grid grid-cols-4 place-items-center relative border-b-2 pb-2">
      <div>
        {/* img */}
        <img
          src={item.images[0]}
          className="hidden md:flex w-[100px] h-[100px] object-contain"
          alt=""
        />
        {/* property of product */}
        <div className="">
          <h2 className="text-xs">{item.name}</h2>
        </div>
      </div>
      <div>
        <p>{item.price}</p>
      </div>
      <div className="flex items-center">
        <button className="px-2 py-1 bg-slate-300 text-[18px] cursor-pointer"
        onClick={()=>dispatch(setPriceHandler({increment:1,index}))}>+</button>
        <span className="px-2 py-1 bg-slate-300 text-[18px]">{item.count}</span>
        <button className="px-2 py-1 bg-slate-300 text-[18px] cursor-pointer"
         onClick={()=>dispatch(setPriceHandler({increment:-1,index}))}>-</button>
      </div>
      <div>
        {/* cartTotal */}
        ${item.cartTotal}
      </div>
      {/* remove */}
        <ImCross color="red" className="absolute right-[20px] top-[10px]" onClick={removeItemHandler}/>
  
    </div>
  );
}

export default CartItemComponent;
