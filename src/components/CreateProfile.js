import React from "react";

const CreateProfile = (props) => {
  const { profileimg, location, filehandler, setlocation } = props;
  const Next = () => {
    document.getElementById("CreateProfile").style.display = "none";
    document.getElementById("status").style.display = "flex";
    document.getElementById("prev").style.display = "block";
  };
  return (
    <div
      className="flex flex-col md:w-1/2 px-4 md:px-12 space-y-8 "
      id="CreateProfile"
    >
      <div className="flex flex-col space-y-4 text-center md:text-start">
        <div className="text-3xl font-extrabold text-slate-800">
          Welcome! Let's create your profile
        </div>
        <div className="text-sm text-gray-500">
          Let others get to know you better! you can do these later
        </div>
      </div>
      <div className="flex flex-col space-y-4 px-2">
        <div className="text-xl font-extrabold text-slate-800">
          Add an avatar
        </div>
        <div className="flex flex-col items-center sm:flex-row gap-2 md:gap-8">
          <div
            className={`h-24 lg:h-32 w-24 lg:w-32 ${
              profileimg ? "" : "border-dashed border-gray-300"
            } rounded-full flex items-center justify-center cursor-pointer`}
            style={{ borderWidth: "3px" }}
          >
            <img
              src=""
              alt="profileimg"
              className="hidden object-cover object-center rounded-full h-full w-full"
              id="profileimg"
            />
            {!profileimg && (
              <i className="fa-solid fa-camera text-gray-400"></i>
            )}{" "}
          </div>
          <div className="flex flex-col items-center sm:items-start gap-4 py-4">
            <div className="relative">
              <label
                htmlFor="photo"
                className="px-4 py-2 text-sm font-semibold text-slate-800 border rounded-lg duration-200 z-10 cursor-pointer"
              >
                Choose image
              </label>
              <input
                type="file"
                id="photo"
                onChange={filehandler}
                className="absolute top-0 left-0 hidden"
              />
            </div>
            <div className="text-gray-400 text-sm font-medium cursor-pointer">
              <i className="fa-solid fa-angle-right"></i> Or choose one of our
              defaults
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 pt-2 md:pt-6 px-2">
        <div className="text-xl font-extrabold text-slate-800">
          Add your location
        </div>
        <div className="w-full">
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => {
              setlocation(e.target.value);
            }}
            className="border-b h-9 border-0 border-gray-300 w-full focus:ring-0 focus:bg-gray-50 rounded-xs focus:border-pink-500 text-base font-semibold"
            placeholder="Enter a location"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:w-1/3">
        <button
          className={`px-24 py-2.5 text-sm font-medium text-white ${
            profileimg && location
              ? "bg-pink-500 hover:bg-pink-600"
              : "bg-pink-300 cursor-default"
          } rounded-lg duration-200`}
          disabled={!(profileimg && location)}
          onClick={Next}
        >
          Next
        </button>
        <div className={`text-xs font-semibold text-gray-400 text-center ${
            (profileimg && location)? "block":"hidden" }`}>
          or Press RETURN
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
