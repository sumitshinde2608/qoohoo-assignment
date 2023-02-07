import React from "react";
import Tabs from "./components/Tabs";

const Bootcamp = () => {
  return (
    <div className="h-screen grid grid-cols-1 gap-4 content-between justify-items-center">
      <div className="text-4xl font-sans font-extrabold text-[#161E3C] mt-24 w-full text-center">
        Bootcamps
      </div>
      <div>
        <Tabs />
      </div>
      <div className="h-24 w-full bg-[#C1CFFF]"></div>{" "}
    </div>
  );
};

export default Bootcamp;
