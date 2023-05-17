import React, { useEffect, useState } from 'react'
import PostForm from '../components/PostForm'
import { loginstate, setUser } from '../redux/slices/navbarSlice';

import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/Pagination';

function Homapage() {

  const dispatch = useDispatch();
  const { postData, loading, isLiked } = useSelector(state => state.postState)


  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem('userData')).user))
    dispatch(loginstate(true))
  }, [])

  return (
    <div className='w-full p-10 flex flex-col items-center sm:block'>
      <Navbar />

      <div className='flex flex-col-reverse sm:flex-row sm:justify-between  mx-10'>
        <div className='sm:w-[80%]'>
          <Pagination itemsPerPage={7} />
        </div>
        <div className=''>
          <PostForm />
        </div>

      </div>

    </div>
  )
}

export default Homapage