import React from "react";
import Navbar from "./components/Navbar";
import Checks from "./components/Checks";
import profile from "./../../assets/profile.jpg";
const Landing = () => {
  return (
    <div className="h-screen bg-[#161E3C] text-white max-md:h-auto max-md:pb-4">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full max-md:h-min">
        {" "}
        {/* Courses div */}
        <div className=" font-sans mb-8 flex items-center p-4 max-md:flex max-md:flex-col max-md:h-auto">
          <img
            src={profile}
            alt="profile"
            className="w-104 h-80 max-md:w-72 max-md:h-48 max-md:mb-4 border-2 border-white rounded-lg  mr-2"
          />
          <div className="align h-full ml-2 grid grid-cols-1 gap-4 content-around max-md:flex max-md:flex-col max-md:h-auto ">
            <div>
              <span className="text-[#F9A826] text-4xl font-black leading-28">
                Get ready{" "}
              </span>
              <span className="text-4xl font-medium leading-20">
                {" "}
                to grow
                <br />
                with us ⭐
              </span>
            </div>

            <span className="font-normal text-2xl">Start with us today</span>

            <button className="h-16 w-64 bg-[#FB9B43] rounded-xl flex items-center justify-center font-medium text-black hover:text-[#FB9B43] hover:bg-white">
              {" "}
              View all courses
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Points div */}
        <div className=" flex justify-around w-4/5 max-md:flex-col">
          <Checks text="500+ happy customers" />
          <Checks text="Learn as you go" />
          <Checks text="Self paced learning" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
