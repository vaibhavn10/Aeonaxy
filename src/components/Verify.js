import React from 'react'
import Navbar from './Navbar'
import VerifyMsg from './VerifyMsg';
import Footer from './Footer';

const Verify = (props) => {
    const {profileimg} = props;
  return (
    <div className="hidden" id="verify">
      <Navbar profileimg={profileimg}/>
      <div className="flex items-center justify-center relative">
        <VerifyMsg/>
      </div>
      <Footer/>
    </div>
  )
}

export default Verify
