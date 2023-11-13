import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
import productSlice from "./productSlice";
import singleProductSlice from "./singleProductSlice";

const store = configureStore({

    reducer:{
        cart: CartSlice,
        product : productSlice,
        singleProduct: singleProductSlice,
    },

});

export default store;