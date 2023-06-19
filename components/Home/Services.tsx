"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollReveal from "../ScrollReveal";

const data = [
  {
    icon: "checkup.png",
    title: "24/7 ICU and Emergency Services",
    description:
      "Immediate Lifesaving Care: Experience peace of mind knowing that our hospital provides 24/7 ICU and Emergency Services. Our dedicated team of experts is equipped with advanced technology, ready to provide prompt and critical care during medical emergencies. Your health is our priority, always",
  },
  {
    icon: "ambulance.png",
    title: "24/7 Ambulance",
    description:
      "Rapid Emergency Response: Our hospital offers round-the-clock ambulance services, ensuring immediate medical assistance whenever and wherever you need it. Our skilled paramedics and well-equipped ambulances are available 24/7 to swiftly transport patients, providing timely and lifesaving care during critical moments. Trust us to be there in times of emergency, because every second counts.",
  },

  {
    icon: "laboratory.png",
    title: "24/7 Laboratory Services",
    description:
      "Timely Diagnostic Solutions: Experience the convenience of our 24/7 Laboratory Services. Our state-of-the-art facility operates round-the-clock, offering a comprehensive range of diagnostic tests and fast results. With a dedicated team of skilled professionals, we ensure accurate and timely analysis, empowering effective treatment decisions for your health and well-being, day or night.",
  },
  {
    icon: "medicine.png",
    title: "24/7 Trauma & Critical Care Management",
    description:
      "Urgent Care Without Delay: Our hospital provides round-the-clock Trauma & Critical Care Management services. With a specialized team of medical experts, state-of-the-art facilities, and advanced treatment protocols, we deliver immediate and comprehensive care for critical cases. Rest assured, your well-being is our top priority, ensuring prompt interventions and optimal outcomes, 24/7.",
  },
  {
    icon: "radiology.png",
    title: "Radiology & Imaging",
    description:
      "Precise Diagnosis, Clear Insight: Our hospital offers advanced Radiology & Imaging services round-the-clock. With cutting-edge technology and experienced radiologists, we provide accurate and detailed diagnostic imaging for accurate medical assessments. From X-rays to MRIs, our comprehensive range of imaging services ensures thorough and timely evaluations to support effective treatment plans, day and night.",
  },
  {
    icon: "hospitalbed.png",
    title: "Bed Facility",
    description:
      "Comfort and Care at Your Reach: Our hospital provides 24/7 Bed Facility, ensuring a peaceful and supportive environment for your recovery. With well-appointed rooms, attentive staff, and comprehensive medical services, we strive to make your stay as comfortable as possible. Rest assured, our dedicated team is here to provide personalized care and support throughout your journey towards wellness.",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust the threshold as needed
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const facilityItems =
        containerRef.current?.querySelectorAll(".facility-item");
      if (facilityItems) {
        gsap.from(facilityItems, {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }
  }, [inView]);
  return (
    <div className="w-full h-auto py-10 bg-white" ref={ref}>
      <div className="w-full h-auto mx-auto max-w-7xl">
        <ScrollReveal>
          <h1 className="relative w-full text-4xl font-bold tracking-wider text-center">
            <span
              className="text-black bg-clip-text bg-gradient-to-b"
              style={{ textShadow: "5px 1px 2px rgba(0,0,0,0.3)" }}
            >
              OUR <span className="text-indigo-800">SERVICES</span>
            </span>
          </h1>
        </ScrollReveal>

        <div
          className="grid w-full grid-cols-1 gap-6 px-4 py-10 lg:py-20 lg:px-0 lg:grid-cols-3"
          ref={containerRef}
        >
          {data.map((item, index) => (
            <div
              className="w-full px-10 pt-10 pb-20 h-auto border-2 border-[#a3228f] rounded-lg relative"
              key={index}
              style={{ boxShadow: "5px 2px 3px rgba(0,0,0,0.2)" }}
            >
              <Image
                src={`/${item.icon}`}
                alt="service"
                width={100}
                height={100}
              />
              <h1 className="h-16 mt-3 text-xl font-semibold tracking-wider lg:text-2xl">
                {item.title}
              </h1>
              <p className="mt-3 mb-5 text-base text-neutral-600 line-clamp-3 ">
                {item.description}
              </p>

              <div className="absolute bottom-5 w-fit h-fit">
                <div className="relative px-6 py-3 mt-10 font-bold text-white group w-fit ">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#a3228f] bg-opacity-90 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative">Learn More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
