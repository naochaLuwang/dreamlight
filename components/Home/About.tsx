import React from "react";

const About = () => {
  return (
    <div className="w-full  bg-[#f1f3f8] h-auto">
      <div className="w-full h-auto py-10 mx-auto maxx-w-7xl">
        <h1 className="relative w-full text-5xl font-bold tracking-wider text-center">
          <span
            className="text-transparent text-black bg-clip-text bg-gradient-to-b"
            style={{ textShadow: "5px 1px 2px rgba(0,0,0,0.3)" }}
          >
            <span className="text-indigo-800">ABOUT</span> US
          </span>
        </h1>
      </div>
    </div>
  );
};

export default About;
