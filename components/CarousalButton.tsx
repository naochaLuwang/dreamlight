"use client";
import React from "react";
import { TbSquareChevronsRight, TbSquareChevronsLeft } from "react-icons/tb";

const CarousalButton = ({ next, previous, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="absolute flex items-center justify-start w-full mt-2 lg:left-20 left-10 lg:bottom-20 bottom-10 carousel-button-group">
      <div
        className={currentSlide === 0 ? "disable" : "cursor-pointer"}
        onClick={() => previous()}
      >
        <TbSquareChevronsLeft className="text-white w-14 h-14" />
      </div>
      <div onClick={() => next()} className="cursor-pointer">
        <TbSquareChevronsRight className="text-white w-14 h-14" />
      </div>
    </div>
  );
};

export default CarousalButton;
