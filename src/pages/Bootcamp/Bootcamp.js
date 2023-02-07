import React, { useRef } from "react";
import useIntersection from "../../hooks/useIntersection";
import Tabs from "./components/Tabs";

const Bootcamp = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "-200px");
  if (inViewport) {
    ref.current.classList.add("animate-fade-in-up");
  }
  return (
    <div
      ref={ref}
      className="h-screen grid grid-cols-1 gap-4 content-between justify-items-center max-md:h-auto"
    >
      <div className="text-4xl font-sans font-extrabold text-[#161E3C] mt-24 w-full text-center">
        Bootcamps
      </div>
      <div>
        <Tabs />
      </div>
      <div className="h-24 max-md:h-min w-full bg-[#C1CFFF] flex justify-between items-center max-md:justify-center max-md:flex-col-reverse">
        <div className="mx-44 max-md:mx-0 max-md:my-4 ">
          Powered by <span className="font-bold text-xl">TYME</span>
        </div>
        <div className="flex w-96 justify-evenly items-center max-md:justify-center max-md:flex-col">
          <div className="max-md:mx-4 max-md:mt-8"> Privacy Policy</div>
          <div className="max-md:mx-4">Terms & Conditions</div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Bootcamp;
