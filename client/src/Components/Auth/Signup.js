import React, { useState } from "react";
import Svg from "../../assets/Svg";
import wave from "../../assets/wave.svg";
import { BiUser } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
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
    <div className="flex flex-colh-screen">
      <div className="hidden"></div>
      <div className=" flex-1 flex flex-col ">
        <div className=" left-0 -z-10  right-0 rounded  ">
        <Svg />
        </div>

        <div className="-mt-[16vh] sm:-mt-[21vh] md:-mt-[25vh] lg:-mt-[30vh] flex-1 flex flex-col  h-fit">
          <form
            className="bg-transparent  h-fit "
            onSubmit={handleSubmit}
            
          >
            <div className="  flex flex-col justify-center h-fit ">
              <div className=" py-6 px-7   font-bold text-3xl sm:text-5xl text-black tracking-tight flex   justify-end ">
                Sign up
              </div>
              <div className="p-6 sm:p-10 md:p-20 lg:px-36">
                <div className="  flex my-10 py-3 px-5 ">
                  <label htmlFor="name" className="mr-3 ">
                    <BiUser className="text-input text-2xl sm:text-3xl" />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="text-2xl sm:text-3xl border-b-2 outline-none border-input flex-grow mr-2"
                    onChange={handleChange}
                  />
                </div>
                <div className=" flex my-10 py-3 px-5">
                  <label htmlFor="email" className="mr-3 ">
                    <MdAlternateEmail className="text-input text-2xl sm:text-3xl" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email ID "
                    className="border-b-2 text-2xl sm:text-3xl outline-none border-input flex-grow mr-2"
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
                    className="border-b-2 text-2xl sm:text-3xl outline-none border-input flex-grow mr-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-center p-2 ">
                  <button className="bg-button_bg text-button_text text-2xl sm:text-3xl rounded-lg w-full mx-4 py-2 font-semibold">
                    Sign up
                  </button>
                </div>
                <div className=" flex items-center  p-2">
                  <div className="flex-grow h-px bg-gray-400 mx-2"></div>
                  <span className=" pb-1 text-2xl sm:text-3xl text-gray-500">or</span>
                  <div className="flex-grow h-px bg-gray-400 mx-2"></div>
                </div>
                <div className=" flex justify-center p-2">
                  <button className="bg-google_bg text-google_text text-2xl sm:text-3xl rounded-lg w-full mx-4 py-2 font-semibold">
                    Sign up with Google
                  </button>
                </div>
                <div className=" flex justify-center py-2">
                  <span className="text-input tracking-tight font-medium text-lg sm:text-xl">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-black font-semibold tracking-tight text-lg sm:text-xl"
                    >
                      Log in
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
  );
}

export default Signup;
