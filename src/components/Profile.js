import React, { useState } from "react";
import Topbar from "./Topbar";
import CreateProfile from "./CreateProfile";
import Status from "./Status";
import Verify from "./Verify";

const Profile = () => {
  const [profileimg, setprofileimg] = useState("");
  const [location, setlocation] = useState("");

  const filehandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(file);

    reader.onload = function(e) {
        const contents = e.target.result;
        document.getElementById("profileimg").src = contents;
        document.getElementById("profileimg").style.display = "block";
        setprofileimg(contents);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative">
      <Topbar />
      <div className="flex items-center justify-center relative">
        <CreateProfile profileimg={profileimg} location={location} filehandler={filehandler} setlocation={setlocation}/>
        <Status/>
      </div>
        <Verify profileimg={profileimg}/>
    </div>
  );
};

export default Profile;
