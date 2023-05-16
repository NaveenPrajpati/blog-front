import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { loginstate, setusername } from '../redux/slices/navbarSlice';
import { useAuth0 } from '@auth0/auth0-react';
import stories from '../images/photo.png'

export default function Navbar() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const {logedIn,userData}=useSelector((state)=>state.navbarState)
  if(isAuthenticated)
  dispatch(loginstate(isAuthenticated))

  function handleLogin(event){
    event.preventDefault();
    navigate('/login')
    localStorage.clear();
      dispatch(loginstate(false));

  }


  return (
    <div>
    <nav className='w-full sm:h-14 p-2 bg-teal-500 text-white flex flex-col sm:flex-row justify-around mb-5 rounded-2xl' >
    
    <div className='flex sm:h-full h-14'>
    <img src={stories} alt="image" className=' w-20 h-full'/>
    <p className='text-3xl text-white font-bold bg-gradient-to-b from-teal-600 to-teal-200 px-2 rounded-lg h-full'>My Stories</p>
    </div>
    
    <div className='gap-3 items-center flex'>
     {logedIn  && <p className='text-xl font-bold  text-red-500 px-1 rounded-lg'>{userData.name}</p>}
     {!logedIn  && 
    <h2 onClick={()=>navigate("/login")} className='text-2xl font-bold bg-teal-900 p-1 rounded-lg cursor-pointer'>Log In</h2>
      }
     {(!logedIn || isAuthenticated) && 
    <h2 onClick={()=>navigate("/signup")} className='text-2xl font-bold bg-teal-900 p-1 rounded-lg cursor-pointer'>SignUp</h2>
      }
     {isAuthenticated && 
    <h2 onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='text-2xl font-bold bg-slate-800 p-1 rounded-lg cursor-pointer'>Logout</h2>
      }
     {logedIn && 
    <h2 onClick={handleLogin} className='text-xl font-bold bg-slate-800 p-1 rounded-lg cursor-pointer'>Logout</h2>
      }
    </div>
    </nav>

    </div>
  )
}
