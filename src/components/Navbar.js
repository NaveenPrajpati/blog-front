import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { loginstate } from '../redux/slices/navbarSlice';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const {logedIn,userName}=useSelector((state)=>state.navbarState)
  
 
  function handleLogin(event){
    event.preventDefault();
      dispatch(loginstate(false));
    const key=JSON.parse(localStorage.removeItem('profile'))
    
  }
  return (
    <div>
    <nav className='w-full p-1 bg-teal-500 text-white flex justify-around mb-5' >
    <div className='flex gap-1'>
    <NavLink to='/addbook'><h1 className='text-2xl font-bold bg-slate-800 p-1 rounded-lg cursor-pointer'>
    Add Book
    </h1></NavLink>
    <NavLink to='/'><h2 className='text-2xl font-bold bg-slate-800 p-1 rounded-lg cursor-pointer'>Book List</h2></NavLink>
    </div>
    <div className='flex gap-2 items-center'>
     {logedIn || isAuthenticated && <p className='text-xl font-bold bg-white text-red-400 px-1 rounded-lg'>{userName}</p>}
     {!logedIn || !isAuthenticated && 
    <h2 onClick={()=>navigate("/login")} className='text-2xl font-bold bg-teal-900 p-1 rounded-lg cursor-pointer'>Log In</h2>
      }
     {!logedIn || !isAuthenticated && 
    <h2 onClick={()=>navigate("/signup")} className='text-2xl font-bold bg-teal-900 p-1 rounded-lg cursor-pointer'>SignUp</h2>
      }
     {isAuthenticated && 
    <h2 onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='text-2xl font-bold bg-slate-800 p-1 rounded-lg cursor-pointer'>Logout</h2>
      }
     {logedIn && 
    <h2  className='text-2xl font-bold bg-slate-800 p-1 rounded-lg cursor-pointer'>Logout</h2>
      }
    </div>
    </nav>

    </div>
  )
}
