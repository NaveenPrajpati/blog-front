import { createSlice } from "@reduxjs/toolkit";
import { useContext } from "react";
import { myContext } from "../../App";


const initialState={
    postData:[],
    loading:false,
    error:null,
    updateBtn:false,
    updataId:null,
}

export const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
        postArray(state,action){
           // const {apiData,setApiData}=useContext(myContext)
           console.log(action.payload)
          state.postData=action.payload
        },
        setLoading(state,action){
         
            state.loading=action.payload
        },
        setError: (state, action) => {
            state.error = action.payload;
          },
          setUpdateBtn: (state, action) => {
            state.updateBtn = action.payload;
          },
          setUpdateId: (state, action) => {
            state.updataId = action.payload;
          },
    }
})

export const {postArray,setLoading,setError,setUpdateBtn,setUpdateId} =postSlice.actions
export default postSlice.reducer