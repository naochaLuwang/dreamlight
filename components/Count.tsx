"use client";
import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";

interface CountUpComponentProps {
  end: number;
}

const CountUpComponent: React.FC<CountUpComponentProps> = ({ end }) => {
  const countUpRef = useRef<any>(null);

  useEffect(() => {
    if (countUpRef.current) {
      countUpRef.current.start();
    }
  }, []);

  return (
    <div className="text-2xl font-bold lg:text-5xl">
      <CountUp
        start={0}
        end={end}
        duration={5}
        ref={countUpRef}
        suffix=" +"
        enableScrollSpy
        scrollSpyDelay={100}
      />
    </div>
  );
};

export default CountUpComponent;
