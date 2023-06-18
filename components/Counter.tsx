import React from "react";
import Image from "next/image";

const Counter = () => {
  return (
    <div className="w-full h-auto py-20">
      <div className="grid w-full grid-cols-4 gap-6 mx-auto max-w-7xl">
        <div
          className="flex flex-col items-center justify-center w-full border-2 rounded-md  border-[#a3228f] h-auto py-10 px-4 space-y-4"
          style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
        >
          <Image src="/doctor.png" alt="" width={60} height={60} />
          <h1 className="text-5xl font-bold ">40 + </h1>
          <p className="text-lg font-medium text-neutral-600">
            Doctors At Work
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center w-full border-2 rounded-md  border-[#a3228f] h-auto py-10 px-4 space-y-4"
          style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
        >
          <Image src="/patients.png" alt="" width={60} height={60} />
          <h1 className="text-5xl font-bold ">1040 + </h1>
          <p className="text-lg font-medium text-neutral-600">
            Happy Patients{" "}
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center w-full border-2 rounded-md  border-[#a3228f] h-auto py-10 px-4 space-y-4"
          style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
        >
          <Image src="/hospital.png" alt="" width={60} height={60} />
          <h1 className="text-5xl font-bold ">100 + </h1>
          <p className="text-lg font-medium text-neutral-600">Bed Facility</p>
        </div>
        <div
          className="flex flex-col items-center justify-center w-full border-2 rounded-md  border-[#a3228f] h-auto py-10 px-4 space-y-4"
          style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
        >
          <Image src="/surgery.png" alt="" width={60} height={60} />
          <h1 className="text-5xl font-bold ">10 + </h1>
          <p className="text-lg font-medium text-neutral-600">Services</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
