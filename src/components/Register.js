import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import sidelogo from "../assets/sidelogo.png";
import { useDispatch } from "react-redux";
import { actions } from "../store";

const Login = () => {
  const dispatch = useDispatch();
  const [userdetails, setuserdetails] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const submit = () => {
    dispatch(actions.createUser(userdetails))
  };
  const handleChange = (e) => {
    setuserdetails({...userdetails, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-row">
      <div className="w-1/3 h-screen hidden md:flex flex-col space-y-6 relative bg-amber-200 px-10 py-10">
        <div className="">
          <img src={logo1} alt="..." className="h-8" />
        </div>
        <div className="flex flex-col text-2xl font-extrabold text-yellow-800 tracking-tighter">
          <span>Discover the world's top</span>
          <span>Designers & Creatives.</span>
        </div>
        <div className="absolute bottom-24 left-10">
          <img src={sidelogo} alt="..." />
        </div>
        <div className="absolute bottom-10 left-10 font-semibold text-sm text-yellow-800">
          Art by{" "}
          <a href="/" className="underline underline-offset-1">
            Vaibhav
          </a>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center relative h-screen">
        <div className="absolute right-8 top-7 text-sm font-medium">
          Already a member?{" "}
          <a href="/" className="text-indigo-600 hover:text-indigo-800">
            Sign in
          </a>
        </div>
        <div className="flex flex-col space-y-6 w-full md:w-1/2 px-10 md:px-0">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-extrabold text-slate-800 text-center md:text-start tracking-tighter">
              Sign up to Dribbble
            </h1>
            <li className="text-sm text-red-500 font-medium">
              Username has already been taken
            </li>
          </div>
          <form className="space-y-6">
            <div className="flex gap-6">
              <div className="flex flex-1 flex-col">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold leading-6 text-slate-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={userdetails.name}
                  onChange={handleChange}
                  className="block w-full rounded-md py-2 px-4 text-slate-900 border-0 bg-gray-100 focus:bg-gray-200 ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 duration-200"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <label
                  htmlFor="username"
                  className="block text-sm font-bold leading-6 text-slate-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={userdetails.username}
                  onChange={handleChange}
                  className="block w-full rounded-md py-2 px-4 text-slate-900 border-0 bg-gray-100 focus:bg-gray-200 ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 duration-200"
                />
              </div>
            </div>
            <div className="">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-slate-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={userdetails.email}
                  onChange={handleChange}
                  className="block w-full rounded-md py-2 px-4 text-slate-900 border-0 bg-gray-100 focus:bg-gray-200 ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 duration-200"
                />
              </div>
            </div>
            <div className="">
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold leading-6 text-slate-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={userdetails.password}
                  onChange={handleChange}
                  className="block w-full rounded-md py-2 px-4 text-slate-900 border-0 bg-gray-100 focus:bg-gray-200 ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 duration-200"
                  placeholder="6+ characters"
                />
              </div>
            </div>
            <div className="">
              <div className="flex items-start">
                <input
                  id="filter-mobile-color-0"
                  name="terms"
                  value="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded-sm border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label className="ml-3 flex-1 text-sm text-gray-500">
                  Creating an account means you're okay with out{" "}
                  <a href="/" className="text-indigo-600 hover:text-indigo-800">
                    Terms of Service, Privacy Policy,
                  </a>{" "}
                  andout default{" "}
                  <a href="/" className="text-indigo-600 hover:text-indigo-800">
                    Notification Setting.
                  </a>
                </label>
              </div>
            </div>
            <div className="">
              <Link
                to="/profile"
                type="submit"
                className="px-8 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-lg duration-200"
                onClick={submit}
              >
                Create Account
              </Link>
            </div>
            <div className="">
              <div className="text-xs text-gray-500 w-full lg:w-2/3">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="/" className="text-indigo-600 hover:text-indigo-800">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/" className="text-indigo-600 hover:text-indigo-800">
                  Terms of Service
                </a>{" "}
                apply.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
