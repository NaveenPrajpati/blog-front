import { createSlice } from "@reduxjs/toolkit"


const initialState={
    logedIn:false,
    userData:{}
}

export const navbarSlice=createSlice({
    name:'navbar',
    initialState,
    reducers:{
        loginstate(state,action){
            state.logedIn=action.payload
        },
        setUser(state,action){
            state.userData=action.payload
        }
    }

})

export const {loginstate,setUser}=navbarSlice.actions
export default navbarSlice.reducer