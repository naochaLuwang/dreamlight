"use client";

import React, { MouseEventHandler } from "react";

const CustomDot = ({ onClick, active }: any) => {
  const dotStyles = active
    ? "bg-[#a3228f] border-2 border-white rounded-full h-4 w-4 mx-1"
    : "bg-gray-300 rounded-full border-2 border-white h-4 w-4 mx-1";

  return <button className={dotStyles} onClick={onClick} />;
};

export default CustomDot;
