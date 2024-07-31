import { configureStore } from "@reduxjs/toolkit";
import sliderSlice  from "./features/slider.js";
import productSlice from "./features/products.js";
import cartSlice from "./features/cart.js";

export const store = configureStore({
    reducer:{
        slider: sliderSlice,
        product: productSlice,
        cart: cartSlice

    }
})

