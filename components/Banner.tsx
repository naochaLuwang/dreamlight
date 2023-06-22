import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BannerProps {
  title: string;
  sublink?: string;
}

const Banner: React.FC<BannerProps> = ({ title, sublink }) => {
  return (
    <div className="flex items-center justify-center w-full h-40 bg-[#a3228f] relative bg-opacity-90">
      <div className="absolute inset-0 z-20 w-full h-full ">
        <Image
          className="object-cover w-full h-full bg-no-repeat opacity-20"
          src="/Virus.svg"
          alt="Background Image"
          fill
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold tracking-wider text-center text-white">
          {title}
        </h1>
        {sublink && (
          <div className="flex items-center justify-center w-full mt-5 space-x-2">
            <Link href="/" className="text-sm text-white">
              Home /
            </Link>
            <p className="text-sm text-white">{sublink}</p>
          </div>
        )}

        {/* <div className="flex">
          <Image src={"/pulse.avif"} alt="" width={200} height={20} />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
