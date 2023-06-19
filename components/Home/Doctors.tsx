import React from "react";
import DoctorCard from "../DoctorCard";

const Doctors = () => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="w-full h-auto py-20 mx-auto max-w-7xl">
        <h1 className="relative w-full text-4xl font-bold tracking-wider text-center">
          <span
            className="text-neutral-600 bg-clip-text bg-gradient-to-b"
            style={{ textShadow: "5px 1px 2px rgba(0,0,0,0.3)" }}
          >
            OUR <span className="text-indigo-800">DOCTORS</span>
          </span>
        </h1>
        <div className="grid w-full grid-cols-1 gap-6 px-4 mt-20 lg:grid-cols-3 lg:px-0">
          {[...Array(6)].map((_, index) => (
            <DoctorCard key={index} />
          ))}
        </div>

        <div className="flex items-center justify-center w-full h-auto">
          <div className="relative px-6 py-3 mt-10 font-bold text-white group w-fit ">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#a3228f] bg-opacity-90 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span className="relative">View More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
