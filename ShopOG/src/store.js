import { configureStore } from "@reduxjs/toolkit";
import sliderSlice  from "./features/slider.js";

export const store = configureStore({
    reducer:{
        slider: sliderSlice

    }
})

