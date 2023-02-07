import React, { useRef } from "react";
import Card from "./components/Card";
import forest from "./../../assets/forest.jpg";
import moon from "./../../assets/moon.png";
import ocean from "./../../assets/ocean.jpg";
import useIntersection from "./../../hooks/useIntersection";

const Courses = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "-200px");
  if (inViewport) {
    ref.current.classList.add("animate-fade-in-down");
  }
  return (
    <div
      ref={ref}
      className="h-160 md:h-auto bg-[#C1CFFF] py-32 max-md:py-20 flex justify-around items-center flex-col"
    >
      <div className="text-4xl max-md:text-2xl mb-8 font-sans font-extrabold ">
        Checkout my courses
      </div>
      <div className="flex max-md:flex-col">
        <Card img={forest} />
        <Card img={moon} />
        <Card img={ocean} />
      </div>
    </div>
  );
};

export default Courses;
