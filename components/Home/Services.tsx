import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    icon: "checkup.png",
    title: "Free Checkup",
    description:
      "Take charge of your well-being with our complimentary health checkup, designed to empower you on your journey to optimal health.",
  },
  {
    icon: "ambulance.png",
    title: "24/7 Ambulance",
    description:
      "Take charge of your well-being with our complimentary health checkup, designed to empower you on your journey to optimal health.",
  },
  {
    icon: "doctor.png",
    title: "Expert Consultancy",
    description:
      "Take charge of your well-being with our complimentary health checkup, designed to empower you on your journey to optimal health.",
  },
  {
    icon: "medicine.png",
    title: "Medicines",
    description:
      "Take charge of your well-being with our complimentary health checkup, designed to empower you on your journey to optimal health.",
  },
  {
    icon: "hospitalbed.png",
    title: "Bed Facility",
    description:
      "Take charge of your well-being with our complimentary health checkup, designed to empower you on your journey to optimal health.",
  },
  {
    icon: "care.png",
    title: "Total Care",
    description:
      "Take charge of your well-being with our complimentary health checkup, designed to empower you on your journey to optimal health.",
  },
];

const Services = () => {
  return (
    <div className="w-full h-auto py-10 mx-auto max-w-7xl">
      <h1 className="relative w-full text-4xl font-bold tracking-wider text-center">
        <span
          className="text-transparent text-black bg-clip-text bg-gradient-to-b"
          style={{ textShadow: "5px 1px 2px rgba(0,0,0,0.3)" }}
        >
          Our <span className="text-indigo-800">Services</span>
        </span>
      </h1>
      <div className="grid w-full grid-cols-3 gap-6 py-20">
        {data.map((item, index) => (
          <div
            className="w-full px-10 py-10 h-96 border-2 border-[#a3228f] rounded-lg "
            key={index}
            style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
          >
            <Image
              src={`/${item.icon}`}
              alt="service"
              width={100}
              height={100}
            />
            <h1 className="mt-3 text-2xl font-semibold tracking-wider">
              {item.title}
            </h1>
            <p className="mt-3 text-base text-neutral-600 line-clamp-2">
              {item.description}
            </p>

            <div className="relative px-6 py-3 mt-10 font-bold text-white group w-fit ">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#a3228f] bg-opacity-90 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative">Learn More</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
