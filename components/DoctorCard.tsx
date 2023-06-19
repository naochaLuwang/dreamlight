import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctorCard = () => {
  return (
    <div
      className="w-full border-2 border-[#a3228f] rounded-lg h-auto py-10 flex flex-col    items-center"
      style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
    >
      <div className="relative w-48 h-48 border-2 border-[#a3228f] rounded-md">
        <Image
          src={"/deka.jpeg"}
          alt="doc placeholder"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h1 className="mt-4 text-3xl font-medium">Dr. Hiranya Deka</h1>
      <p className="mt-1 text-base">MBBS, MS , Mch</p>
      <p className="">Urology</p>

      <Link
        href="/"
        className="rounded-md px-3.5 py-2 mt-10 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#a3228f] "
      >
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#a3228f] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative text-[#a3228f] transition duration-300 group-hover:text-white ease">
          Read More
        </span>
      </Link>
    </div>
  );
};

export default DoctorCard;
