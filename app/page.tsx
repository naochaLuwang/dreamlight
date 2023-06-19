import Counter from "@/components/Counter";
import Blogs from "@/components/Home/Blogs";
import Departments from "@/components/Home/Departments";
import Doctors from "@/components/Home/Doctors";
import Embed from "@/components/Home/Embed";
import HomeCarousal from "@/components/Home/HeroPage";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";

export const metadata = {
  icons: {
    icon: "favicon.png",
  },
  title: "DREAMLIGHT HOSPITAL",
};

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
