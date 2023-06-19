"use client";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import TestimonialButton from "../TestimonialButton";
import CustomDot from "../CustomDot";

const testimonials = [
  {
    name: "Naocha Luwang",
    address: "Guwahati",
    testimony:
      "The care I received at Dreamlight Hospital exceeded all expectations. The doctors expertise and the compassionate staff made me feel supported throughout my recovery journey. I am forever grateful for their exceptional dedication and commitment to my well-being.",
  },
  {
    name: "Naocha Luwang",
    address: "Guwahati",
    testimony:
      "The care I received at Dreamlight Hospital exceeded all expectations. The doctors expertise and the compassionate staff made me feel supported throughout my recovery journey. I am forever grateful for their exceptional dedication and commitment to my well-being.",
  },
  {
    name: "Naocha Luwang",
    address: "Guwahati",
    testimony:
      "The care I received at Dreamlight Hospital exceeded all expectations. The doctors expertise and the compassionate staff made me feel supported throughout my recovery journey. I am forever grateful for their exceptional dedication and commitment to my well-being.",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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

const Testimonial = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Carousel) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [loading]);
  return (
    <div className="w-full h-auto py-20 bg-[#a3228f] bg-opacity-80 relative -z-50">
      <div className="w-full h-auto mx-auto text-white max-w-7xl">
        <h1 className="text-3xl font-bold tracking-wider text-center lg:text-4xl lg:text-start">
          OUR TESTIMONIAL
        </h1>
        <p className="mt-1 text-center lg:text-start">
          What Patient Say About Us?
        </p>
        <div className="w-24 h-[2px] mt-[2px] hidden lg:block bg-white"></div>
        <div className="w-full px-8 mx-auto mt-10 max-w-7xl">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            rewindWithAnimation={true}
            autoPlaySpeed={4000}
            arrows={false}
            showDots={true}
            // customButtonGroup={<ImageButton />}
            // renderButtonGroupOutside={true}
          >
            {testimonials.map((testimonial, index) => (
              <div
                className="lg:w-[35rem] w-full mx-auto pb-10 lg:pb-0  mt-10 mb-20 relative border-white border-[3px] rounded-3xl lg:h-96 h-auto border-clip-slice inset-0 "
                key={index}
                style={{ textShadow: "5px 1px 2px rgba(0,0,0,0.3)" }}
              >
                <div className="absolute h-auto px-4 py-3 rounded-tl-3xl rounded-br-3xl bg-[#a3228f] lg:-top-7 -top-3 -left-2 lg:-left-7 w-fit">
                  <FaQuoteLeft className="w-5 h-5 text-white lg:w-10 lg:h-10 " />
                </div>

                <div className="absolute h-auto px-4 py-3 bg-[#a3228f] rounded-tl-3xl rounded-br-3xl bottom-0 -right-3  lg:-bottom-7 lg:-right-7 w-fit">
                  <FaQuoteLeft className="w-5 h-5 text-white rotate-180 lg:w-10 lg:h-10" />
                </div>

                <div className="flex flex-col items-center w-full h-full max-w-lg px-4 mx-auto">
                  <p className="mt-20 text-start">{testimonial.testimony}</p>

                  <div className="flex items-center justify-end w-full h-auto mt-5 space-x-5 lg:mt-14">
                    <div className="relative flex-shrink-0 w-16 h-16 bg-white rounded-full lg:w-20 lg:h-20"></div>
                    <div className="flex flex-col">
                      <h1 className="text-lg font-bold tracking-wide lg:text-2xl">
                        {testimonial.name}
                      </h1>
                      <p>{testimonial.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
