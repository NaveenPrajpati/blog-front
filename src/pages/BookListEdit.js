import React, { useEffect } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { getBookId, updateBook } from '../service/PostService';

export default function BookListEdit() {
let navigate=useNavigate();
  let par=useParams();

  // useEffect(()=>{
  //   const token=localStorage.getItem('token')
  //   getBookId(par.id)
  //   .then(res=>{
  //     console.log(res.data)
  //     setBook(res.data)
  //   })
  // },[])

  const[book,setBook]=useState({
    id:"",
    title:"",
    author:"",
  })
  function handleChange(event){
    const val=event.target.value;
    setBook({...book,[event.target.name]:val});
  }

  function upDateBook(event){
    event.preventDefault();
    // updateBook(book,par.id)
    // .then(()=>{
    //   alert('data updata success')
    //   navigate('/')
    // })
    // .catch(error=>console.log(error))


  }


  return (
    <div>
    <Navbar></Navbar>
    <form className='w-[600px] mx-auto'>
          <div className="space-y-12">
           
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Edit Information</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Book Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Book Author
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="author"
                  value={book.author}
                  onChange={handleChange}
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          

            
          </div>
            </div>
    
            </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <NavLink to={"/empList"} className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </NavLink>
            <button
              type="submit"
              onClick={upDateBook}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
          </div>
        </form>
    
        </div>
  )
}
