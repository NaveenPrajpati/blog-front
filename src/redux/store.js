import { configureStore } from "@reduxjs/toolkit";
import navbarStateReducer from './slices/navbarSlice';
import homeReducer from './slices/homeSlice'
import postReducer from './slices/postsSlice'

export const postStore=configureStore({
    reducer:{
        navbarState:navbarStateReducer,
        homeState:homeReducer,
        postState:postReducer
    }
})