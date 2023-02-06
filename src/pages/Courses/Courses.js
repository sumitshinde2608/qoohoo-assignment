import React from "react";
import Card from "./components/Card";
import forest from "./../../assets/forest.jpg";
import moon from "./../../assets/moon.png";
import ocean from "./../../assets/ocean.jpg";

const Courses = () => {
  return (
    <div className="h-160 md:h-auto bg-[#C1CFFF] py-32 max-md:py-20 flex justify-around items-center flex-col ">
      <div className="text-4xl max-md:text-2xl mb-8 font-sans font-extrabold ">
        Checkout my courses
      </div>
      <div className="flex max-md:flex-col ">
        <Card img={forest} />
        <Card img={moon} />
        <Card img={ocean} />
      </div>
    </div>
  );
};

export default Courses;
