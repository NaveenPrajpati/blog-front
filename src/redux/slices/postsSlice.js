import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useContext } from "react";
import { myContext } from "../../App";
import { deletePost, getPosts, savePost, updatePost, updatePostLike } from "../../service/PostService";


export const createPost=createAsyncThunk("create",async(data, { rejectWithValue })=>{
 const res=await savePost(data) 
  if(res.status!==200)
      return rejectWithValue()
   return res.data;
})
export const getAllPost=createAsyncThunk("getAll",async(name, { rejectWithValue })=>{
 const res=await getPosts() 
  if(res.status!==200)
      return rejectWithValue()
   return res.data;
})
export const removePost=createAsyncThunk("delete",async(pid, { rejectWithValue })=>{
  console.log(pid)
 const res=await deletePost(pid)
  if(res.status!==200)
      return rejectWithValue()

   return res.data;
})
export const likePost=createAsyncThunk("like",async(id, { rejectWithValue })=>{
 const res=await updatePostLike(id)
  if(res.status!==200)
      return rejectWithValue()

   return res.data;
})
export const editPost=createAsyncThunk("update",async(data, { rejectWithValue })=>{
  console.log(data)
 const res=await updatePost(data)
  if(res.status!==200)
      return rejectWithValue()

   return res.data;
})

const initialState={
    postData:[],
    loading:false,
    error:null,
    updateBtn:false,
    updataId:null,
    extraReducers:{

    }
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
    },
    extraReducers:(builder)=>{
      builder
      .addCase(getAllPost.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.loading = false
        state.postData = action.payload;
      })
      .addCase(getAllPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      });

      builder
      .addCase(removePost.pending, (state) => {
        state.loading = true
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.loading = false
        state.postData=state.postData.filter((it)=>it._id!==action.payload._id)
      })
      .addCase(removePost.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      });

      builder
      .addCase(createPost.pending, (state) => {
        state.loading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false
        state.postData=[action.payload]
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      });
      builder
      .addCase(likePost.pending, (state) => {
        
      })
      .addCase(likePost.fulfilled, (state, action) => {
        
        const find=(it)=>{
          if(it._id==action.payload._id)
            it.likes=action.payload.likes
        }
        state.postData.map(find);
      })
      .addCase(likePost.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      });
      builder
      .addCase(editPost.pending, (state) => {
        
      })
      .addCase(editPost.fulfilled, (state, action) => {
        
        const find=(it)=>{
          if(it._id==action.payload._id)
            it=action.payload
        }
        state.postData.map(find);
      })
      .addCase(editPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      });
    }
})

export const {postArray,setLoading,setError,setUpdateBtn,setUpdateId} =postSlice.actions
export default postSlice.reducer