import React, { useEffect, useState } from 'react'
import PostForm from '../components/PostForm'
import { loginstate, setUser } from '../redux/slices/navbarSlice';

import Navbar from '../components/Navbar'

import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import PostDetail from './PostDetail';

function Homapage() {

  const dispatch = useDispatch();
 
  const {showDetail} = useSelector(state => state.postDetailState)


  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem('userData')).user))
    dispatch(loginstate(true))
  }, [])

  return (
    <div className='w-full p-10 flex flex-col items-center sm:block'>
      <Navbar />
      {(Object.keys(showDetail).length!==0)?<div className='mx-auto sm:w-[80%] '><PostDetail /></div>:
        <div className='flex flex-col-reverse sm:flex-row sm:justify-between  mx-10'>
        <div className='sm:w-[80%]'>
          <Pagination itemsPerPage={7} />
        </div>
        <div className=''>
          <PostForm />
        </div>

      </div>}

    </div>
  )
}

export default Homapage