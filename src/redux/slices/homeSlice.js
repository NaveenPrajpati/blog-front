import { createSlice } from "@reduxjs/toolkit";

const initialState={
    image:"",
    user:''

}


export const homeSlice=createSlice({
    name:"home",
    initialState,
    reducers:{
       setImage(state,action){
            state.image=action.payload
        },
        setUser(state,action){
            state.user=action.payload
        }
    }
})

export default homeSlice.reducer;
export const {setImage,setUser} =homeSlice.actions