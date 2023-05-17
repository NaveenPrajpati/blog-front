import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { loginstate, setSearch, setusername } from '../redux/slices/navbarSlice';
import { useAuth0 } from '@auth0/auth0-react';
import image1 from '../images/create.png'
import image2 from '../images/instagram-stories.png'

export default function Navbar() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const {logedIn,userData,searchOpt}=useSelector((state)=>state.navbarState)
  if(isAuthenticated)
  dispatch(loginstate(isAuthenticated))

  function handleLogin(event){
    event.preventDefault();
    navigate('/login')
    localStorage.clear();
      dispatch(loginstate(false));

  }

  const handleSearch=(event)=>{
    dispatch(setSearch(event.target.value))
  }


  return (
    <div>
    <nav className='min-w-[350px] w-full sm:h-16 gap-2 p-2 shadow-2xl flex flex-col sm:flex-row sm:justify-around  mb-5 rounded-2xl bg-slate-300'>
    
    <div className='flex justify-center'>
    <img src={image1} alt="image" className=' w-32  -rotate-6'/>
    <img src={image2} alt="image" className=' w-32  rotate-3 -ml-5'/>
    </div>

    <div className='mx-auto'>
      <input type="text" name="" id="" className='rounded-lg p-2 outline-none text-blue-500 font-semibold ' placeholder='search post' onChange={handleSearch} value={searchOpt}/>
    </div>
    
    <div className='gap-3 justify-center flex items-center'>
     {logedIn  && <p className='text-xl font-bold  text-red-500 px-1 rounded-lg'>{userData.name}</p>}
     {!logedIn  && 
    <h2 onClick={()=>navigate("/login")} className='text-2xl text-white font-bold bg-slate-700 p-1 rounded-lg cursor-pointer'>Log In</h2>
      }
     {(!logedIn || isAuthenticated) && 
    <h2 onClick={()=>navigate("/signup")} className='text-2xl text-white font-bold bg-slate-700 p-1 rounded-lg cursor-pointer'>SignUp</h2>
      }
     {isAuthenticated && 
    <h2 onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='text-2xl font-bold bg-slate-800 p-1 rounded-lg cursor-pointer'>Logout</h2>
      }
     {logedIn && 
    <h2 onClick={handleLogin} className='text-xl text-white font-bold bg-slate-700 p-1 rounded-lg cursor-pointer'>Logout</h2>
      }
    </div>
    </nav>

    </div>
  )
}
