import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:null
}

export const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
        setData:(state, action)=>{
            state.data = action.payload
        },
        removeData:(state, action)=>{
            state.data = null
        }
    }
})


export const { setData, removeData } = dataSlice.actions;

export default dataSlice.reducer;
