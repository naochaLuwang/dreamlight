import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRightCircle } from "react-icons/bi";

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
];

const Departments = () => {
  return (
    <div className="w-full h-auto">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="w-full h-auto bg-[#a3228f] flex flex-col py-20 lg:px-20 px-10 bg-opacity-90 rounded-r-2xl relative -z-30">
          <h1 className="text-4xl font-bold tracking-wide text-white">
            DEPARTMENTS
          </h1>
          <p className="mt-3 text-white">
            Dreamlight Hospital Guwahati clinical & surgical centres of
            excellence with great pre and post care facilities ensure that your
            loved ones get back to the best of their health in no time.
          </p>
          <div className="flex flex-col mt-5 space-y-2">
            <div className="flex items-center space-x-2">
              <BiChevronRightCircle className="w-6 h-6 text-white" />
              <p className="text-white">
                More than 500 patients are treated everyday
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiChevronRightCircle className="w-6 h-6 text-white" />
              <p className="text-white">Best In-Class Services</p>
            </div>
          </div>

          <Link
            href="/"
            className="mt-10 w-fit h-auto px-4 py-2.5 bg-white font-semibold rounded-sm"
          >
            ALL SPECIALITIES
          </Link>
        </div>
        <div className="w-full h-auto px-4 py-5 bg-white lg:px-10">
          <div className="grid w-full grid-cols-2 gap-4">
            {departments.map((department, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#a3228f] rounded-xl space-y-2"
                style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
              >
                <Image
                  src={`/${department.icon}`}
                  width={50}
                  height={50}
                  alt=""
                />
                <h1 className="text-lg font-medium text-center text-neutral-600">
                  {department.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
