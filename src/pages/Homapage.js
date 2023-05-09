import React, { useState } from 'react'
import PostForm from '../components/PostForm'

import Navbar from '../components/Navbar'
import Posts from '../components/Posts'

function Homapage() {
  

  return (
    <div className='w-full p-10'>
      <Navbar/>
   
    <div className='flex flex-col-reverse sm:flex-row justify-center w-full'>
      <div className='w-full sm:w-[60%]'>

       <Posts/>
      </div>
      <PostForm />
      </div>
    </div>
  )
}

export default Homapage