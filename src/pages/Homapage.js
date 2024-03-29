import React, { useEffect, useState } from 'react'
import PostForm from '../components/PostForm'
import { loginstate, setUser } from '../redux/slices/navbarSlice';
import jwtDecode from "jwt-decode"
import Navbar from '../components/Navbar'

import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import PostDetail from './PostDetail';
import { useNavigate } from 'react-router-dom';

function Homapage() {

  const dispatch = useDispatch();
 const navigate=useNavigate()
  const {showDetail} = useSelector(state => state.postDetailState)
  const {logedIn}=useSelector((state)=>state.navbarState)
  const { enableDetail} = useSelector(state => state.postState)


  useEffect(() => {
    if(localStorage.getItem('userData')){
    const token=JSON.parse(localStorage.getItem('userData')).token
    const decodedToken = jwtDecode(token);
    const expirationTime = decodedToken.exp * 1000; // Convert expiration time to milliseconds
    const currentTime = new Date().getTime()
    if(currentTime < expirationTime){
    dispatch(setUser(JSON.parse(localStorage.getItem('userData')).user))
    dispatch(loginstate(true))
    }
  }else{
    dispatch(setUser({}))
      localStorage.clear();
      
      navigate('/')
  }

  }, [])

  return (
    <div className='w-full p-10 flex flex-col items-center sm:block'>
      <Navbar />
      <div className='border-2 my-5 '>
        <p className='text-red-400 text-center font-bold'>Demo id demoaccount@gmail.com and password 123</p>
      </div>
      {enableDetail &&  <div className=''><PostDetail showDetail={showDetail}/></div>}
        <div className='flex flex-col-reverse md:flex-row md:justify-between  mx-10'>
        {!enableDetail &&   <div className={`  ${logedIn?'sm:w-[80%]':'w-full'}`}>
        <p className='font-semibold text-xl text-center'>login to create stories</p>
          <Pagination itemsPerPage={8} />
        </div>}
        <div className=' mx-auto'>
        {logedIn?(!enableDetail && <PostForm />): 
     
         ''
    
        }
       

        </div>

      </div>

    </div>
  )
}

export default Homapage