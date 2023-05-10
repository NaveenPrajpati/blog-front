import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../service/UserService';
import Navbar from '../components/Navbar';

function Signup() {

    const [signupData,setSignupData]=useState({
        username:"",
        email:"",
        password:""
    })

    function handleChange(event){
        setSignupData({...signupData,[event.target.name]:event.target.value});
    }


    function handle(event){
        event.preventDefault();
    registerUser(signupData)
    .then(res=>console.log(res))
    .then(error=>{
        console.log(error)
    })
    }

  return (
    <div>
    <Navbar/>
    <div className="mt-20 flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className=" px-6 py-6 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded mb-4"
                        name="username"
                        placeholder="Full Name" 
                        onChange={handleChange}
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-2 rounded mb-4"
                        name="email"
                        onChange={handleChange}

                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-2 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                         />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-2 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                       onClick={handle}
                        className="w-full text-center py-2 rounded bg-green text-white bg-green-400 focus:outline-none my-1"
                    >Create Account</button>
                    <button
                       onClick={handle}
                        className="w-full text-center py-2 rounded bg-green text-white bg-blue-500 focus:outline-none my-1"
                    >Signup with google</button>

                    
                </div>
                

                <div className="text-grey-dark mt-4">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue-600" to={"/login"}>
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
        </div>
  )
}

export default Signup