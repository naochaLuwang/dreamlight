import React from "react";

const Doctors = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-auto py-20 mx-auto max-w-7xl">
        <h1 className="relative w-full text-5xl font-bold tracking-wider text-center">
          <span
            className="text-neutral-600 bg-clip-text bg-gradient-to-b"
            style={{ textShadow: "5px 1px 2px rgba(0,0,0,0.3)" }}
          >
            OUR <span className="text-indigo-800">DOCTORS</span>
          </span>
        </h1>
        <div className="grid w-full grid-cols-3 gap-6"></div>
      </div>
    </div>
  );
};

export default Doctors;
