"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const pathName = usePathname();
  console.log(pathName);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerVariants = {
    initial: { height: "8rem" },
    sticky: { height: "6rem" },
  };

  const imageVariants = {
    initial: { height: "10rem" },
    sticky: { height: "4rem" },
  };

  const textVariants = {
    initial: { fontSize: "1.2rem" },
    sticky: { fontSize: "0.9rem" },
  };

  return (
    <motion.div
      className={`z-50 items-center hidden lg:flex w-full  shadow-sm h-32 py-8 ${
        !isSticky ? "transition-all duration-300 ease-in-out" : "fixed top-0"
      } ${pathName === "/" && !isSticky ? "bg-white" : "bg-white"}`}
      variants={headerVariants}
      initial="initial"
      animate={isSticky ? "sticky" : "initial"}
    >
      <div className="flex items-center justify-between w-full px-10 ">
        <div className="flex items-center">
          <Link href="/">
            <div
              className={`relative w-40 ${
                isSticky
                  ? "h-24 transition-all duration-100 ease-in-out"
                  : "h-28 transition-all duration-100 ease-in-out"
              }`}
            >
              <Image
                src={"/logo.png"}
                alt="IUKD logo"
                fill
                style={{ objectFit: "contain" }}
                priority
                variants={imageVariants}
                initial="initial"
                animate={isSticky ? "sticky" : "initial"}
              />
            </div>
          </Link>

          <h1 className="text-3xl font-bold tracking-wider text-transparent bg-gradient-to-b from-pink-700 to-pink-900 bg-clip-text">
            DREAMLIGHT
            <br />
            HOSPITAL
          </h1>
        </div>

        <div className="w-full h-full ">
          <Navbar />
        </div>

        <div className="flex items-center flex-shrink-0 space-x-5">
          {/* <Link href="/contact">
            <div className="flex items-center justify-center h-auto px-4 py-2 text-sm text-white bg-teal-800 rounded-md shadow-md w-fit">
              <motion.span
                variants={textVariants}
                initial="initial"
                animate={isSticky ? "sticky" : "initial"}
              >
                Call Me
              </motion.span>
            </div>
          </Link> */}

          <Link href="/book_an_appoinment">
            <div className="flex items-center justify-center h-auto px-6 py-4 text-sm text-white rounded-full shadow-md from-teal-600 to-teal-800 bg-gradient-to-tr to w-fit">
              <motion.span
                variants={textVariants}
                initial="initial"
                animate={isSticky ? "sticky" : "initial"}
              >
                Book An Appointment
              </motion.span>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
