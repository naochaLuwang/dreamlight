import React from "react";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const links = [
  {
    title: "About Us",
  },
  {
    title: "Services",
  },
  {
    title: "Departments",
  },
  {
    title: "Contact Us",
  },
];

const services = [
  {
    title: "24/7 ICU & EMERGENCY SERVICES",
  },
  {
    title: "24/7 AMBULANCE SERVICES",
  },
  {
    title: "24/7 LABORATORY SERVICES",
  },
  {
    title: "24/7 TRAUMA & CRITICAL CARE MANAGEMENT",
  },
  {
    title: "RADIOLOGY & IMAGING",
  },
  {
    title: "BED FACILITY",
  },
];

const Footer = () => {
  return (
    <div className="w-full h-auto py-10 text-white from-pink-900 bg-opacity-90 bg-gradient-to-br to-pink-950 ">
      <div className="grid w-full grid-cols-1 gap-6 px-6 lg:px-16 lg:grid-cols-4">
        <div className="flex flex-col w-full min-w-2xl">
          <h1 className="border border-b-[1px] border-transparent w-fit border-b-[#BDBDBF]">
            ABOUT
          </h1>
          <p className="mt-5 text-sm line-clamp-7 text-[#BDBDBF]">
            Discover Dreamlight Hospital - Baihata Chariali&apos;s premier
            healthcare destination. With international standard facilities,
            cutting-edge equipment, and exceptional services, we provide the
            best in patient care. Trust our experienced team to deliver
            top-quality medical expertise under one roof. Your well-being is our
            priority.
          </p>
          <p className="mt-2 text-sm text-[#BDBDBF] hover:text-white">
            read more
          </p>
        </div>

        <div className="flex flex-col lg:pl-14">
          <h1 className="border border-b-[1px] border-transparent w-fit border-b-[#BDBDBF]">
            QUICK LINKS
          </h1>

          {links.map((link, index) => (
            <Link href="/" className="mt-5" key={index}>
              <p className="text-sm text-[#BDBDBF] hover:text-white">
                {link.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <h1 className="border border-b-[1px] border-transparent w-fit border-b-[#BDBDBF]">
            SERVICES
          </h1>
          {services.map((service, index) => (
            <Link href="/" className="mt-5" key={index}>
              <p className="text-sm text-[#BDBDBF] hover:text-white">
                {service.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <h1 className="border border-b-[1px] border-transparent w-fit border-b-[#BDBDBF]">
            CONTACT US
          </h1>
          <div className="flex items-center mt-5 space-x-2">
            <BsTelephoneFill className="w-4 h-4 text-white" />
            <p className="text-sm text-[#BDBDBF] hover:text-white">
              03621 291 245
            </p>
          </div>

          <div className="flex items-center mt-2 space-x-2">
            <IoMail className="w-4 h-4 text-white" />
            <p className="text-sm text-[#BDBDBF] hover:text-white">
              dreamlighthospital@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-2 space-x-2">
            <FaMapMarkerAlt className="flex-shrink-0 w-4 h-4 text-white" />
            <p className="text-sm text-[#BDBDBF] hover:text-white">
              Guwahati Road Tiniali, Baihata Chariali, Baihata, India, Assam
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-10 py-1 lg:py-0 h-auto flex border-[1px] border-transparent border-opacity-80 border-y-[#BDBDBF] mt-14 items-center text-sm space-x-2 px-16 text-[#BDBDBF] justify-center lg:justify-start">
        <h1 className="text-center lg:text-start">
          Copyright &copy; 2023{" "}
          <span>
            <Link href="/" className="text-white">
              DREAMLIGHT HOSPITAL
            </Link>
          </span>{" "}
          Designed By{" "}
          <span>
            <Link
              href="https://relyhealthtech.com"
              target="_blank"
              className="text-white"
            >
              Rely Healthcare Technologies.
            </Link>
          </span>
          All rights reserved
        </h1>
      </div>

      <div className="flex items-center justify-center w-full mt-10 text-xs lg:text-sm ">
        <Link
          href="/about"
          className="text-[#BDBDBF] hover:text-white border border-transparent border-r-white lg:px-3 px-2"
        >
          About Us
        </Link>
        <Link
          href="/privacy_policy"
          className="text-[#BDBDBF] hover:text-white border border-transparent border-r-white lg:px-3 px-2"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms_conditions"
          className="text-[#BDBDBF] hover:text-white border border-transparent border-r-white  lg:px-3 px-2"
        >
          Terms & Conditions
        </Link>
        <Link
          href="/contact"
          className="text-[#BDBDBF] hover:text-white lg:px-3"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Footer;
