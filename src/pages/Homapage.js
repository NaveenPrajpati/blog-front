import React, { useEffect, useState } from 'react'
import PostForm from '../components/PostForm'
import { loginstate, setUser } from '../redux/slices/navbarSlice';

import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
import { useDispatch } from 'react-redux';
import Pagination from '../components/Pagination';

function Homapage() {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setUser(JSON.parse(localStorage.getItem('userData')).user))
        dispatch(loginstate(true))
  },[])

  return (
    <div className='w-full p-10 '>
      <Navbar/>
      <Pagination itemsPerPage={4}/>
    <div className='flex flex-col-reverse sm:flex-row justify-center'>
      <div className='sm:w-[60%]'>
       <Posts/>
      </div>
      <PostForm />
      
      </div>
      
    </div>
  )
}

export default Homapage