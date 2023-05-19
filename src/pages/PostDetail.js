import React, { createContext, useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, Navigate, Link, NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

import PostForm from '../components/PostForm'
import { useDispatch, useSelector } from 'react-redux'
import { FaWindowClose,FaCommentDots } from "react-icons/fa";
import { getAllComment, setCommentdeta, setShowDetail } from '../redux/slices/postDetailSlice'
import Moment from 'react-moment'
import { createComment, setEnableDetail } from '../redux/slices/postsSlice'

export default function PostDetail({showDetail}) {
    const [comment, setComment] = useState('')

// useEffect(()=>{
//     dispatch(getAllComment())
// },[])
const { postData, loading,isLiked,enableDetail} = useSelector(state => state.postState)

    const {commentData} = useSelector(state => state.postDetailState)
    const {userData} = useSelector(state => state.navbarState)

const navigate=useNavigate()
const dispatch=useDispatch()
    function handleClose(){
        
        dispatch(setEnableDetail(false))
    }

    function handleComment(){
        const detail={
            comment:comment,
            id:showDetail._id
        }
       dispatch(createComment(detail))
    }

    function handleText(event){
      setComment(event.target.value)
    }
    

    return (
        <div>
         
            <div className=' bg-slate-200 relative p-2 rounded-3xl shadow-2xl shadow-black drop-shadow-2xl font-semibold'>

            <FaWindowClose className='text-red-400 absolute left-5 text-2xl' onClick={handleClose}/>
                <div className='flex flex-col-reverse sm:flex-row sm:justify-center gap-5 mt-6'>
                
                <div className='min-w-[300px] sm:w-[60%] '>
                <h1 className='text-2xl'> {showDetail.title}</h1>
                <h2 className='text-slate-600'><span className='text-black font-bold'>tags:</span> {showDetail.tags}</h2>

                <p className='text-slate-600'> <span className='text-black font-bold' >Description:</span> {showDetail.message}</p>
                <h2 className='text-slate-600'><span className='text-black font-bold' >Created By: </span>{showDetail.creator}</h2>
                <p className='text-slate-600 leading-3'><Moment fromNow>{showDetail.createdAt}</Moment></p>
                <hr />
                <div className='flex flex-col sm:flex-row gap-5 mt-5'>
                    <div className='sm:w-[50%]'>
                        <h2 className='text-black font-bold'>Comments</h2>
                        <ul>
                        {showDetail.comments.map(itm=>{return (

                            <li>{itm}</li>
                        )})}
                        </ul>
                    </div>
                    <div>
                        <p>Write Comment</p>
                        <textarea name="" id="" cols="30" rows="5"  onChange={handleText}></textarea><br />
                        <button className='bg-cyan-500 font-bold w-full rounded-md active:bg-cyan-600' onClick={handleComment}>Comment</button>
                    </div>
                </div>


                </div>

                <div className='min-w-[300px] sm:block  sm:w-[35%]'>
                    <img src={showDetail.imageFile} alt="" className='object-fill mx-auto'/>
                </div>
                
                </div>
            </div>
        </div>
    )
}
