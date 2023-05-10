import React, { createContext, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, getPostId, getPosts, updatePostLike } from '../service/PostService'
import { MoonLoader } from 'react-spinners'
import { postArray, setLoading, setError, setUpdateBtn, setUpdateId, getAllPost, removePost, likePost } from '../redux/slices/postsSlice'
import { HiDotsHorizontal, HiThumbUp, HiXCircle } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Posts() {
    const { postData, loading} = useSelector(state => state.postState)
    const dispatch = useDispatch()


    useEffect(() => {
        
        dispatch(getAllPost());

    }, []);

  
    
    const handleEdit = (id) => {
        dispatch(setUpdateId(id))
        dispatch(setUpdateBtn(true))
    }

const handleLike=(id)=>{
    dispatch(likePost(id))

}

    const handleDelete = (pid) => {
        dispatch(removePost(pid))         
                toast.success(`delete success`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
         
    }
    return (
        <div>
           {loading && <MoonLoader color="#36d7b7"  />}
            <ToastContainer />
            <ul className='flex flex-wrap flex-grow gap-5'>
                {postData.map((item,index) =>{ return(
                    <li className='' key={index}>
                        <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow">
                            <div className='w-full rounded-t-lg h-[150px] relative '>
                                <img src={item.imageFile} alt="image" className='object-fill h-full mx-auto w-full absolute' />
                                <div className='flex absolute items-center w-full justify-between px-1'>
                                    <p className='text-white font-bold'>{item.creator}</p>



                                    <div className="group relative flex justify-center cursor-pointer">
                                        <HiDotsHorizontal className='text-white font-bold' onClick={() => handleEdit(item._id)} />
                                        <span className="absolute -top-5 scale-0 rounded bg-gray-800 text-white group-hover:scale-100">edit</span>
                                    </div>

                                </div>
                            </div>
                            <div className="px-2">
                                <h5 className="text-sm text-slate-500 font-semibold">#{item.tags}</h5>
                                <h5 className="mb-1 text-xl font-bold ">{item.title}</h5>
                                <p className="mb-3 font-normal ">{item.message}</p>

                                <div className="flex justify-between">

                                    <div className='flex items-center text-blue-600 cursor-pointer' onClick={()=>handleLike(item._id)}>
                                        <HiThumbUp /><span>LIKE {item.likes}</span>
                                    </div>

                                    <div className='flex text-red-500 items-center cursor-pointer' onClick={() => handleDelete(item._id)}>

                                        <HiXCircle />Delete
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                )})
                }
            </ul>
        </div>
    );
}

export default Posts