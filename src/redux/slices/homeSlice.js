import { createSlice } from "@reduxjs/toolkit";

const initialState={
    image:"",

}


export const homeSlice=createSlice({
    name:"home",
    initialState,
    reducers:{
       setImage(state,action){
            state.image=action.payload
        }
    }
})

export default homeSlice.reducer;
export const {setImage} =homeSlice.actions