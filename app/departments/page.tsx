import Banner from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const departments = [
  {
    icon: "gs.png",
    title: "GENERAL SURGERY",
  },
  {
    icon: "embryo.png",
    title: "OBS & GYNAECOLOGY",
  },
  {
    icon: "neuro.png",
    title: "NEUROLOGY",
  },
  {
    icon: "infertility.png",
    title: "INFERTILITY",
  },
  {
    icon: "ortho.png",
    title: "ORTHOPEDICS",
  },
  {
    icon: "urology.png",
    title: "UROLOGY",
  },
  {
    icon: "urology.png",
    title: "MEDICINE",
  },
  {
    icon: "urology.png",
    title: "PEDIATRICS",
  },
  {
    icon: "urology.png",
    title: "NEURO SURGERY",
  },
  {
    icon: "urology.png",
    title: "DIABETOLOGY",
  },
  {
    icon: "urology.png",
    title: "ENT",
  },
  {
    icon: "urology.png",
    title: "SURGICAL GASTROENTEROLOGY",
  },
  {
    icon: "urology.png",
    title: "CRITICAL CARE",
  },
];

const DepartmentPage = () => {
  return (
    <div className="w-full h-auto py-20">
      <div className="flex flex-col items-center justify-center w-full h-auto">
        <h1 className="text-3xl tracking-wider font-medium text-[#a3228f]">
          Discover Our Comprehensive Specialties at Dreamlight Hospital,Guwahati
        </h1>
        <div className="flex items-center justify-center w-full mt-5 space-x-2">
          <div className="w-40 h-[2px] bg-[#a3228f]"></div>
          <Image src={"/care.png"} alt="pulse" height={50} width={50} />
          <div className="w-40 h-[2px] bg-[#a3228f]"></div>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 gap-6 py-20 mx-auto max-w-7xl">
        {departments.map((department, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full h-auto py-10 border-2 border-[#a3228f] rounded-xl "
            style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
          >
            <Image src={`/${department.icon}`} width={50} height={50} alt="" />
            <h1 className="mt-2 text-2xl font-medium text-center text-neutral-600">
              {department.title}
            </h1>
            <p className="font-bold">. . .</p>

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
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
