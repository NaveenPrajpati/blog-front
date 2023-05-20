import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../service/UserService';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { loginstate, setUser } from '../redux/slices/navbarSlice';


export default function Login() {

  const dispatch = useDispatch();
  
  const { loginWithRedirect } = useAuth0();

  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  function handleChange(event) {
    setloginData({ ...loginData, [event.target.name]: event.target.value });
  }


  function handle(event) {
    event.preventDefault();

    loginUser(loginData)
      .then(res => {
        localStorage.setItem('userData',JSON.stringify(res.data))
        alert("login success")
        // dispatch(setUser(JSON.parse(localStorage.getItem('userData')).user))
        // dispatch(loginstate(true))
  
        navigate("/")
      })
      .catch((error) => {
        console.log("request mai error aara hai")
        console.log(error)

      })
  }



  return (
    <div className='p-5'>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}

                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}

                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
             
              <button
                onClick={handle}
                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <button onClick={() => loginWithRedirect()} className="mt-3 flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-gray-100 focus-visible:outline">Log In with Google</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-300">
            Not a member?{' '}
            <Link to={"/signup"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>

        </div>
      </div>

    </div>
  )
}
