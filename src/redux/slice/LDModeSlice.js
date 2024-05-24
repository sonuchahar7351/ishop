import { createSlice } from "@reduxjs/toolkit";

const initialState={
    LDModeState:'Light',
}

//LDMode Slice
const LDModeSlice = createSlice({
    name:'LDModeSlice',
    initialState,
    reducers:{
        LDModeReducer: (state, action) => {
            if(action.payload === 'Light'){
                state.LDModeState='Light'
            }else{
                state.LDModeState='Dark'
            }
        },
    }
})

export const {LDModeReducer}  = LDModeSlice.actions;
export default LDModeSlice.reducer;