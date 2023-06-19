import Image from "next/image";
import React from "react";

const BookNow = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto mx-auto max-w-7xl">
        <h1 className="relative w-full text-5xl font-bold tracking-wider text-center">
          <span
            className="text-neutral-600 bg-clip-text bg-gradient-to-b"
            style={{ textShadow: "5px 1px 2px rgba(0,0,0,0.3)" }}
          >
            <span className="text-indigo-800">BOOK</span> NOW
          </span>
        </h1>

        <div className="flex items-center justify-between w-full h-auto mt-10">
          <Image
            src={"/team.gif"}
            alt="team"
            width={500}
            height={500}
            className="flex shrink-0"
          />

          <div className="w-full max-w-2xl h-96 border-2 border-[#a3228f]"></div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
