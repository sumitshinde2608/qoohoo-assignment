import React from "react";
import Bootcamp from "./pages/Bootcamp/Bootcamp";
import Courses from "./pages/Courses/Courses";
import Landing from "./pages/Landing/Landing";

const App = () => {
  return (
    <div className="max-sm:w-full">
      <Landing />
      <Courses />
      <Bootcamp />
    </div>
  );
};

export default App;
