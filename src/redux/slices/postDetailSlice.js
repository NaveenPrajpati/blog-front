import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deletePost, getPosts, savePost, updatePost, updatePostLike } from "../../service/PostService";
import { deleteComment, getComments, saveComment } from "../../service/CommentService";


 export const createComment=createAsyncThunk("create",async(data, { rejectWithValue })=>{
 const res=await saveComment(data) 
  if(res.status!==201)
      return rejectWithValue()

   return res.data;
  })
export const getAllComment=createAsyncThunk("getAll",async(name, { rejectWithValue })=>{
 const res=await getComments() 
  if(res.status!==200)
      return rejectWithValue()
   return res.data;
})

export const removeComment=createAsyncThunk("delete",async(pid, { rejectWithValue })=>{
 const res=await deleteComment(pid)
  if(res.status!==200)
      return rejectWithValue()

   return res.data;
})


const initialState={
    commentData:[],
    loading:false,
    isLiked:false,
    error:null,
    comment:'',
    showDetail:{}
    
}

export const postDetailSlice=createSlice({
    name:"postDetail",
    initialState,
    reducers:{
      postDetailArray(state,action){
          state.postData=action.payload
        },
        setLoading(state,action){
         
            state.loading=action.payload
        },
        setComment(state,action){
            state.loading=action.payload
        },
        setShowDetail: (state, action) => {
          state.showDetail = action.payload;
        },
        
    },
    extraReducers:(builder)=>{
      builder
      .addCase(getAllComment.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllComment.fulfilled, (state, action) => {
        state.loading = false
        state.postData = action.payload;
      })
      .addCase(getAllComment.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      });

      builder
      .addCase(removeComment.pending, (state) => {
        state.loading = true
      })
      .addCase(removeComment.fulfilled, (state, action) => {
        state.loading = false
        state.postData=state.postData.filter((it)=>it._id!==action.payload._id)
      })
      .addCase(removeComment.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      });

      builder
      .addCase(createComment.pending, (state) => {
        state.loading = true
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false
        state.postData.push(action.payload)
      })
      .addCase(createComment.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      });
     
    }
})

export const {postDetailArray,setShowDetail,setComment} =postDetailSlice.actions
export default postDetailSlice.reducer