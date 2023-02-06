import React from "react";

const Card = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFD7B1] p-4 mx-10 max-md:mb-12 rounded-md">
      <img
        className="w-72 h-72 rounded-md"
        src={props.img}
        alt="Sunset in the mountains"
      />
      <div className=" py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      </div>
      <div className="pb-2">
        <a
          href=""
          className="inline-flex items-center align-center justify-center w-full px-3 py-2 text-sm font-medium text-white bg-[#161E3C] rounded-lg hover:bg-white hover:text-black text-center"
        >
          Join us
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
        </a>
      </div>
    </div>
  );
};

export default Card;
