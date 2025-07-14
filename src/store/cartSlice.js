import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalProduct: 0,
    totalPrice: 0,
  },
  reducers: {
    saveInCartAction: (state, action) => {
      console.log(action.payload);
      let copyArray = [...state.cart];

      //1. Da li ga imam u koripi, indexna pozicija
      let findIndex = null;

      //ovde proveravam da li postoji u korpi
      copyArray.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      //dodajem novi proizvod ili uvecavam isti
      if (findIndex === null) {
        copyArray.push({
          ...action.payload,
          count: 1,
          cartTotal: action.payload.price,
        });
        state.totalProduct++;
        state.totalPrice += action.payload.price;
      } else {
        copyArray[findIndex].count++;
      }

      state.cart = copyArray;
    },

    deleteItemCartAction:(state,action)=>{
        let copyArray = [...state.cart];

      //1. Da li ga imam u koripi, indexna pozicija
      let findIndex = null;

      //ovde proveravam da li postoji u korpi
      copyArray.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return;
        }
      })

      if(findIndex != null){
      copyArray.splice(findIndex,1)
      state.totalProduct--;
      state.totalPrice = subTotal(copyArray)
      }
      state.cart=copyArray

    },

    setPriceHandler:(state,action)=>{
        console.log(action.payload);
        const{increment,index} = action.payload
        
        let copyArray = [...state.cart]

        copyArray[index].cartTotal += copyArray[index].price *increment

        state.totalPrice = subTotal(copyArray);

        if(copyArray[index].count === 1 && increment === -1){
            copyArray.splice(index,1);
            state.totalProduct--;
        }else{
            copyArray[index].count+=increment
        }

        state.cart = copyArray
    }

  },
});

//hendluj cartTotal
function subTotal(arrayCart){
    return arrayCart.reduce((acc,current)=>{
        return acc+current.cartTotal
    },0)
}

export const { saveInCartAction,deleteItemCartAction,setPriceHandler } = cartSlice.actions;
export default cartSlice.reducer;
