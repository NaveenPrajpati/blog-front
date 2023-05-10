import React, { useEffect, useState } from 'react'
import { getPostId, savePost, updatePost } from '../service/PostService';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, editPost, setError, setUpdateBtn, setUpdateId } from '../redux/slices/postsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function PostForm() {

  const {updateBtn,updataId }=useSelector(state => state.postState)
  const dispatch=useDispatch()

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    imageFile:null
  })

useEffect(()=>{
  if(updataId!=null){
    getPostId(updataId)
    .then(res=>{
      setPostData(res.data)
    })
    .catch(err=>{
      dispatch(setError(err))
    });
  }
},[updataId])

  const handlefileChange = (event) => {
    setPostData({ ...postData, [event.target.name]:event.target.files[0]});

  };

  function handleChange(event) {
    setPostData({ ...postData, [event.target.name]: event.target.value});
  }


    const handleSubmit=(event)=>{
      event.preventDefault();
    
        const formData = new FormData();
        formData.append('creator',postData.creator);
        formData.append('title',postData.title);
        formData.append('tags',postData.tags);
        formData.append('message',postData.message);
        formData.append('selectedFile',postData.imageFile);
       
        dispatch(createPost(formData))
            
    }

    const handleUpdate=()=>{
      dispatch(editPost(postData))
      
        toast.update(`update success`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          dispatch(setUpdateBtn(false))
          dispatch(setUpdateId(null))
    
    }

    const handleClear=(event)=>{
      setPostData({
        creator: "",
        title: "",
        tags: "",
        message: ""
      })
    }





  return (
    <div className="flex  ">
 <ToastContainer />
  <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[300px] sm:w-full h-fit" encType='multipart/form-data' action='/post'>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Creator
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} type="text" placeholder="title" name='creator' value={postData.creator}/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Title
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} type="text" placeholder="title" name='title' value={postData.title}/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Taga
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} type="text" placeholder="tags" name='tags' value={postData.tags}/>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Message
      </label>
      <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} type="text" placeholder="" name='message' value={postData.message}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Choose file
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handlefileChange} type="file" placeholder="" name='imageFile'/>
    </div>
    <div className="flex items-center justify-between">
     
   {!updateBtn &&   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
        submit
      </button>}
   {updateBtn &&   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleUpdate}>
        Update
      </button>}
     
    {!updateBtn && <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleClear}>
        clear
      </button>}
    {updateBtn && <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleClear}>
        cancel
      </button>}
      
    </div>
  </form>
</div>
  )
  
  }
export default PostForm