import React, { useState } from 'react'
import { BiUser } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import LoginSvg from '../../assets/LoginSvg';
function Login() {
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    console.log("name: " + e.target.name);
    console.log("value: " + e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="hidden"></div>
      <div className=" flex-1 flex flex-col ">
        <div className=" left-0 -z-10  right-0 rounded  ">
        <LoginSvg />
        </div>

        <div className="-mt-[8vh] sm:-mt-[10vh] md:-mt-[10vh] lg:-mt-[15vh] flex-1 flex flex-col  h-fit">
          <form
            className="bg-transparent  h-fit "
            onSubmit={handleSubmit}
            
          >
            <div className="  flex flex-col justify-center h-fit ">
              <div className=" py-6 px-10 md:pl-16 lg:pl-20  font-bold text-3xl sm:text-5xl text-black tracking-tight flex   justify-start ">
                Log in
              </div>
              <div className="px-5 py-1 sm:px-14 sm:py-7 md:px-28 md:py-9 lg:px-40 lg:py-9">
                
                <div className=" flex my-10 py-3 px-5">
                  <label htmlFor="email" className="mr-3 ">
                    <MdAlternateEmail className="text-input text-2xl sm:text-3xl" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email ID "
                    className="border-b-2 text-2xl sm:text-3xl outline-none min-w-0 border-input flex-grow mr-2"
                    onChange={handleChange}
                  />
                </div>
                <div className=" flex my-10 py-3 px-5">
                  <label htmlFor="password" className="mr-3 ">
                    <MdLockOutline className="text-input text-2xl sm:text-3xl" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Set Password"
                    className="border-b-2 text-2xl sm:text-3xl outline-none min-w-0 border-input flex-grow mr-2"
                    onChange={handleChange}
                  />
                </div>
                <div className=' px-5 -mt-5 pb-10'>
                  <span className='text-black font-bold tracking-tight text-lg sm:text-xl cursor-pointer'>
                      Forgot Password?
                  </span>
                </div>
                <div className="flex justify-center p-2 ">
                  <button className="bg-button_bg text-button_text text-2xl sm:text-3xl rounded-lg w-full mx-4 py-2 font-semibold">
                    Login
                  </button>
                </div>
                <div className=" flex items-center  p-2">
                  <div className="flex-grow h-px bg-gray-400 mx-2"></div>
                  <span className=" pb-1 text-2xl sm:text-3xl text-gray-500">or</span>
                  <div className="flex-grow h-px bg-gray-400 mx-2"></div>
                </div>
                <div className=" flex justify-center p-2">
                  <button className="bg-google_bg text-google_text text-2xl sm:text-3xl rounded-lg w-full mx-4 py-2 font-semibold">
                    Login with Google
                  </button>
                </div>
                <div className=" flex justify-center py-2">
                  <span className="text-input tracking-tight font-medium text-lg sm:text-xl">
                    Don't have an account?{" "}
                    <Link
                      to="/"
                      className="text-black font-semibold tracking-tight text-lg sm:text-xl"
                    >
                      Sign up
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            {errorMsg && errorMsg ? (
              <div className="text-red-500 text-xl m-2">{errorMsg}</div>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login