import { createSlice } from "@reduxjs/toolkit"


const initialState={
    logedIn:false,
    userName:''
}

export const navbarSlice=createSlice({
    name:'navbar',
    initialState,
    reducers:{
        loginstate(state,action){
            state.logedIn=action.payload
        },
        setusername(state,action){state.userName=action.payload}
    }

})

export const {loginstate,setusername}=navbarSlice.actions
export default navbarSlice.reducer