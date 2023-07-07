"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarousalButton from "../CarousalButton";
import Link from "next/link";

interface HomeCarousalProps {
  items: CarousalProps[];
  counters?: CounterProps[];
}

interface CarousalProps {
  imageUrl: string;
  title: string;
  description: string;
}
interface CounterProps {
  id: string;
  title: string;
  value: number;
  order: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HomeCarousal: React.FC<HomeCarousalProps> = ({ items, counters }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="relative w-full h-auto">
      {!loading ? (
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          rewindWithAnimation={true}
          autoPlaySpeed={10000}
          partialVisible={false}
          arrows={false}
          showDots={false}
          customButtonGroup={<CarousalButton />}
          renderButtonGroupOutside={false}
          // customLeftArrow={<CustomLeftArrow />}
          // customRightArrow={<CustomRightArrow />}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[82vh] bg-cover bg-no-repeat bg-top flex flex-col  justify-center"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            >
              <div className="absolute inset-0 opacity-75 bg-gradient-to-b from-pink-500 to-black"></div>
              <div className="flex flex-col items-start mx-auto px-10 lg:px-0 justify-center space-y-5 max-w-7xl  h-[400px] text-white relative z-10">
                <p className="text-2xl tracking-wide text-white lg:text-4xl leading-20">
                  {item.description}
                </p>
                <Link
                  href="/departments"
                  className="text-xl w-fit px-4 py-2.5 bg-white text-[#a3228f] rounded-md tracking-wide font-medium shadow-md"
                >
                  ALL SPECIALITIES
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="w-full h-[79vh] bg-gradient-to-b from-pink-500 to-black" />
      )}

      {/* <Counter counter={counters} /> */}
    </div>
  );
};

export default HomeCarousal;
