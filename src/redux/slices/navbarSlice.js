import { createSlice } from "@reduxjs/toolkit"


const initialState={
    logedIn:false,
    userData:{},
    searchOpt:''
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
        },
        setSearch(state,action){
            state.searchOpt=action.payload
        }
    }

})

export const {loginstate,setUser,setSearch}=navbarSlice.actions
export default navbarSlice.reducer