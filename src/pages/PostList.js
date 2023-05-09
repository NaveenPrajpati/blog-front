import React, { createContext, useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, Navigate, Link, NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

import PostForm from '../components/PostForm'

export default function PostList() {


    

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex'>

            
                <div>
                    <PostForm />
                </div>
            </div>
        </div>
    )
}
