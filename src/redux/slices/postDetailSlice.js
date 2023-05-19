import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteComment, getComments, saveComment } from "../../service/CommentService";



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
    commentDetail:{},
    showDetail:{}
    
}

export const postDetailSlice=createSlice({
    name:"postDetail",
    initialState,
    reducers:{
      postDetailArray(state,action){
          state.commentData=action.payload
        },
        setLoading(state,action){
         
            state.loading=action.payload
        },
        setCommentdetail(state,action){
            state.commentDetail=action.payload
        },
        setShowDetail: (state, action) => {
          state.showDetail = action.payload;
        },
        setError: (state, action) => {
          state.error = action.payload;
        },
        
    },
    extraReducers:(builder)=>{
      builder
      .addCase(getAllComment.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllComment.fulfilled, (state, action) => {
        state.loading = false
    
      })
      .addCase(getAllComment.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      });



      
     
    }
})

export const {postDetailArray,setShowDetail,setCommentdetail} =postDetailSlice.actions
export default postDetailSlice.reducer