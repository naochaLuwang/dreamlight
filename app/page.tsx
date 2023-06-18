import Counter from "@/components/Counter";
import About from "@/components/Home/About";
import HomeCarousal from "@/components/Home/HeroPage";
import Services from "@/components/Home/Services";

import Image from "next/image";

type CarouselItem = {
  imageUrl: string;
  title: string;
  description: string;
};

const items: CarouselItem[] = [
  {
    imageUrl: "slide3.png",
    title: "Center for Advance Urology & Kidney Diseases",
    description:
      "Center for Advanced Urology & Kidney Diseases is the only centre in entire North Eastern Region of India.",
  },
  {
    imageUrl: "slide1.jpeg",
    title: "Center for Advance Urology & Kidney Diseases",
    description:
      "Center for Advanced Urology & Kidney Diseases is the only centre in entire North Eastern Region of India.",
  },
];

export default function Home() {
  return (
    <main className="px-2">
      <HomeCarousal items={items} />
      <Counter />
      <Services />
      <About />
    </main>
  );
}
