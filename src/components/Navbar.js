import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { loginstate } from '../redux/slices/navbarSlice';

export default function Navbar() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const logedIn=useSelector((state)=>state.navbarState.logedIn)
  const userName=useSelector((state)=>state.navbarState.userName)
  
 
  function handleLogin(event){
    event.preventDefault();
      dispatch(loginstate(false));
    const key=JSON.parse(localStorage.removeItem('profile'))
    navigate("/login")
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
     {logedIn && <p className='text-xl font-bold bg-white text-red-400 px-1 rounded-lg'>{userName}</p>}
     {logedIn && 
    <h2 onClick={handleLogin} className='text-2xl font-bold bg-slate-800 p-1 rounded-lg cursor-pointer'>Logout</h2>
      }
    </div>
    </nav>

    </div>
  )
}
