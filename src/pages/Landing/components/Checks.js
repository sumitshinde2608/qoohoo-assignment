import React from "react";
import check from "./../../../assets/check.png";
const Checks = (props) => {
  return (
    <div className="flex flex-col items-center">
      <img src={check} className="h-48 w-48" />
      <span className=" text-white font-medium ">{props.text}</span>
    </div>
  );
};

export default Checks;
