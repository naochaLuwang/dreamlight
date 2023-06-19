"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsCalendar3WeekFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageButton from "../ImageButton";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Blogs = () => {
  return (
    <div className="relative w-full h-auto py-20 bg-white bg-opacity-50">
      <div className="fixed inset-0 w-full h-full -z-30 ">
        <Image
          className="object-cover w-full h-full bg-no-repeat opacity-20"
          src="/Virus.svg"
          alt="Background Image"
          fill
        />
      </div>
      <h1 className="relative w-full text-4xl font-bold tracking-wider text-center">
        <span
          className="text-neutral-600 bg-clip-text bg-gradient-to-b"
          style={{ textShadow: "5px 1px 2px rgba(0,0,0,0.3)" }}
        >
          OUR <span className="text-indigo-800">BLOGS</span>
        </span>
      </h1>

      <div className="w-full h-auto mx-auto max-w-7xl">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          infinite={false}
          rewindWithAnimation={true}
          autoPlaySpeed={4000}
          arrows={false}
          showDots={true}
          customButtonGroup={<ImageButton />}
          renderButtonGroupOutside={true}
        >
          {[...Array(4)].map((_, index) => (
            <div
              className="w-[22rem] mx-auto my-10 relative border-indigo-950 border-opacity-60 bg-white px-3 pt-3 bg-opacity-10 border-[3px] rounded-xl h-auto pb-10 border-clip-slice inset-0"
              key={index}
            >
              <div className="w-full h-40 bg-red-200 rounded-xl"></div>
              <div className="flex items-center justify-between w-full px-2 mt-2">
                <div className="flex items-center space-x-1">
                  <BsCalendar3WeekFill className="text-[#a3228f] h-4 w-4" />
                  <p className="text-sm tracking-wide">16th June 2023</p>
                </div>
                <div className="flex items-center space-x-1">
                  <HiUserCircle className="h-5 w-5 text-[#a3228f]" />
                  <p className="text-sm tracking-wide">By Admin</p>
                </div>
              </div>
              <div className="flex flex-col px-2">
                <h1 className="w-full mt-4 text-2xl font-bold">
                  Blog Title Goes Here
                </h1>
                <p className="mt-2 mb-8 text-sm line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  earum totam porro atque nemo quidem, veritatis vel quo ratione
                  odio at molestias, consectetur aspernatur quasi sint hic. A,
                  aperiam labore!
                </p>

                <Link
                  href="/"
                  className="w-fit h-fit border-2 border-[#a3228f] py-2.5 px-4 rounded-md hover:bg-[#a3228f] hover:text-white"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex items-center justify-center w-full h-auto">
        <div className="relative px-6 py-3 mt-10 font-bold text-white group w-fit ">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#a3228f] bg-opacity-90 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
          <span className="relative">View More</span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
