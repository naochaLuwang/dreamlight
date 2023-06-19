import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Blogs from "@/components/Home/Blogs";
import BookNow from "@/components/Home/BookNow";
import Departments from "@/components/Home/Departments";
import Doctors from "@/components/Home/Doctors";
import Embed from "@/components/Home/Embed";
import HomeCarousal from "@/components/Home/HeroPage";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";

import Image from "next/image";

type CarouselItem = {
  imageUrl: string;
  title: string;
  description: string;
};

const items: CarouselItem[] = [
  {
    imageUrl: "slide3.png",
    title: "",
    description:
      "Comprehensive care for stroke, head injury, and other neurological conditions.",
  },
  {
    imageUrl: "slide1.jpeg",
    title: "",
    description:
      "Dedicated facility for managing traumatic injuries and providing specialized care",
  },
];

export default function Home() {
  return (
    <main>
      <div className="px-2">
        <HomeCarousal items={items} />
      </div>

      <Counter />
      <Services />
      <Departments />
      {/* <About /> */}
      <Doctors />
      <Testimonial />
      {/* <BookNow /> */}
      <Blogs />
      <Embed />
    </main>
  );
}
