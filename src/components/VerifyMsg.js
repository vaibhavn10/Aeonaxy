import React from 'react'
import emailmsg from '../assets/emailmsg.png'
import { useSelector } from 'react-redux'

const VerifyMsg = () => {
  const userdetails = useSelector(state=>state.userdetails);
  return (
    <div
      className="flex flex-col md:w-1/2 px-4 md:px-12 space-y-8 py-24"
      id="CreateProfile"
    >
      <div className="flex flex-col items-center space-y-4 text-center md:text-start">
        <div className="text-3xl font-bold text-slate-800">
          Please verify your email...
        </div>
        <div className="text-sm text-zinc-500">
          <img src={emailmsg} alt="emailmsg" className="h-16"/>
        </div>
      </div>
      <div className="flex flex-col items-center text-center space-y-4 px-2">
        <div className="text-sm text-zinc-500">
            Please verify email address. We've sent a confirmation email to:          
        </div>
        <div className='text-center text-sm font-bold text-gray-800'>
            {userdetails.email}
        </div>
        <div className="text-sm text-zinc-500">
            Click the confirmation link in that email to begin using Dribbble.
        </div>
        <div className="text-sm text-zinc-500">
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can{" "}<a href="/" className="text-pink-500 hover:text-pink-700">resend the confirmation email</a>{" "}.
        </div>
        <div className="text-sm text-zinc-500">
            Wrong email address?{" "}<a href="/" className="text-pink-500 hover:text-pink-700">Change it</a>{" "}.
        </div>
      </div>
    </div>
  )
}

export default VerifyMsg
