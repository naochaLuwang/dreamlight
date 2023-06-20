"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const Header: React.FC = () => {
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

  const headerVariants: Variants = {
    initial: { height: "6rem" },
    sticky: { height: "5rem" },
  };

  const textVariants: Variants = {
    initial: { fontSize: "1.0rem" },
    sticky: { fontSize: "0.8rem" },
  };

  const nameVariants: Variants = {
    initial: { fontSize: "1.875rem", lineHeight: "2.25rem" },
    sticky: { fontSize: "1.5rem", lineHeight: "2rem" },
  };

  return (
    <motion.div
      className={`z-50 items-center hidden lg:flex w-full  shadow-md h-24 py-8 ${
        !isSticky ? "transition-all duration-300 ease-in-out" : "fixed top-0"
      } ${pathName === "/" && !isSticky ? "bg-white" : "bg-white"}`}
      variants={headerVariants}
      initial="initial"
      animate={isSticky ? "sticky" : "initial"}
    >
      <div className="flex items-center justify-between w-full px-10 ">
        <div className="flex items-center w-full">
          <Link href="/">
            <div
              className={`relative w-40 ${
                isSticky
                  ? "h-16 transition-all duration-100 ease-in-out"
                  : "h-20 transition-all duration-100 ease-in-out"
              }`}
            >
              <Image
                src={"/logo.png"}
                alt="IUKD logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>

          <motion.h1
            className="font-bold tracking-wider text-transparent  bg-gradient-to-b from-pink-700 to-pink-900 bg-clip-text"
            variants={nameVariants}
            initial="initial"
            animate={isSticky ? "sticky" : "initial"}
          >
            DREAMLIGHT
            <br />
            HOSPITAL
          </motion.h1>
        </div>

        <div className="w-full h-auto ">
          <Navbar />
        </div>

        <div className="flex items-center flex-shrink-0 space-x-5">
          <Link href="/book_an_appointment">
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
