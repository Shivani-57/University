import React from 'react'
import { BiUser } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div>
       <div className='lg:flex'>
      {/* <div>
      <img src={wave} className='block border-2 border-pink-600'></img>

      </div> */}
      <div className='border-2'>
        
      </div>

      <div className='border-2 '>
        <form className='border-2 m-2 border-blue-500 md:border-pink-700 lg:border-green-700 xl:border-black' >
          <div className='m-4'>
            <div className='m-2 my-5 font-bold text-2xl text-black tracking-tight'>Log in</div>
            <div className='m-2'>
          
          <div className='flex my-10'>
            <label htmlFor='email' className='mr-3 '><MdAlternateEmail className='text-input text-2xl'/></label>
            <input type='email' name='email' id='email' placeholder='Email ID ' className='border-b-2 outline-none border-input flex-grow mr-2'/>
          </div>
          <div className='flex my-10'>
            <label htmlFor='password' className='mr-3 '><MdLockOutline className='text-input text-2xl'/></label>
            <input type='password' name='password' id='password' placeholder='Set Password' className='border-b-2 outline-none border-input flex-grow mr-2' />
          </div>
          <div>
            <span className='text-black tracking-tight text-lg font-medium cursor-pointer'>Forgot Password? </span>
          </div>
          <div className='flex justify-center my-5 '>
            <button className='bg-button_bg text-button_text text-xl rounded-lg w-full mx-4 py-2 font-semibold' >Log in</button>
          </div>
          <div className='flex items-center my-5'>
            <div className="flex-grow h-px bg-gray-400 mx-2"></div>
            <span className=" pb-1 text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-400 mx-2"></div>
          </div>
          <div className='flex justify-center my-5'>
            <button className='bg-google_bg text-google_text text-xl rounded-lg w-full mx-4 py-2 font-semibold'>Login with Google</button>
          </div>
          <div>
            <span className='text-input tracking-tight text-lg'>Don't have an account? <Link to="/" className='text-black font-medium tracking-tight text-lg'>Log in</Link></span>
          </div>
          </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login