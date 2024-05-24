import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import LDModeSlice from "./slice/LDModeSlice";
//create Store 
export const store = configureStore({
    reducer:{
        allCart:cartSlice,
        LDMode:LDModeSlice,
    }
})