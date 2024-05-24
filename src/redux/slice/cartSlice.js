import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
}

//cart Slice 
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {

        //add to cart 
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.carts[itemIndex].qty += 1;
            } else {
                const temp = { ...action.payload, qty: 1 };
                state.carts = [...state.carts, temp];
            }
        },

        //remove to cart a particular element

        removeToCart: (state, action) => {
            const data = state.carts.filter((el) => el.id !== action.payload);
            state.carts = data;
        },

        //remove single items

        removeSingleItems: (state, action) => {
            const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id)
            if (state.carts[itemIndex_dec].qty > 1) {
                state.carts[itemIndex_dec].qty -= 1;
            }
            else{
                const data = state.carts.filter((el) => el.id !== action.payload.id);
                state.carts = data;
            }
        }
    }
})

export const { addToCart, removeToCart, removeSingleItems } = cartSlice.actions;

export default cartSlice.reducer;