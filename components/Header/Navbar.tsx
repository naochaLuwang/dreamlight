"use client";

import * as React from "react";
import { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  //   const [data, setData] = useState<any | null>();

  const [isLoading, setLoading] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();

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

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch(`https://piahs.vercel.app/api/links`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const sortedNav = [...data].sort((a, b) => a.order - b.order);
  //         setData(sortedNav);
  //       });
  //   }, []);

  const data = [
    {
      id: 1,
      title: "About Us",
      slug: "/about",
      isMulti: "No",
      sublinks: [],
    },
    {
      id: 2,
      title: "Services",
      slug: "/services",
      isMulti: "No",
      sublinks: [
        {
          title: "24/7 ICU & Emergency Service",
          subtitle: "",
          slug: "urology",
          order: 0,
          status: "ACTIVE",
          content: "",
          pageType: "dynamic",
          createdAt: "2023-06-09T16:24:19.654Z",
          updatedAt: "2023-06-09T16:55:38.264Z",
        },
        {
          title: "24/7 Ambulance",
          subtitle: "",
          slug: "urology",
          order: 0,
          status: "ACTIVE",
          content: "",
          pageType: "dynamic",
          createdAt: "2023-06-09T16:24:19.654Z",
          updatedAt: "2023-06-09T16:55:38.264Z",
        },
        {
          title: "24/7 Laboratory Service",
          subtitle: "",
          slug: "urology",
          order: 0,
          status: "ACTIVE",
          content: "",
          pageType: "dynamic",
          createdAt: "2023-06-09T16:24:19.654Z",
          updatedAt: "2023-06-09T16:55:38.264Z",
        },
      ],
    },
    {
      id: 3,
      title: "Departments",
      slug: "/departments",
      isMulti: "YES",
      sublinks: [
        {
          title: "General Surgery",
          subtitle: "",
          slug: "urology",
          order: 0,
          status: "ACTIVE",
          content: "",
          pageType: "dynamic",
          createdAt: "2023-06-09T16:24:19.654Z",
          updatedAt: "2023-06-09T16:55:38.264Z",
        },
        {
          title: "Medicine",
          subtitle: "",
          slug: "urology",
          order: 0,
          status: "ACTIVE",
          content: "",
          pageType: "dynamic",
          createdAt: "2023-06-09T16:24:19.654Z",
          updatedAt: "2023-06-09T16:55:38.264Z",
        },
        {
          title: "Neurology",
          subtitle: "",
          slug: "urology",
          order: 0,
          status: "ACTIVE",
          content: "",
          pageType: "dynamic",
          createdAt: "2023-06-09T16:24:19.654Z",
          updatedAt: "2023-06-09T16:55:38.264Z",
        },
      ],
    },
    {
      id: 4,
      title: "Contact Us",
      slug: "/about",
      isMulti: "No",
      sublinks: [],
    },
  ];

  return (
    <div className={`z-50 w-full h-10  hidden lg:block `}>
      <div className="w-full px-12">
        <NavigationMenu>
          <NavigationMenuList>
            {data !== null &&
              data?.map((navlink: any) => (
                <div key={navlink.id}>
                  {navlink.sublinks.length > 0 ? (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-base text-neutral-800">
                        {navlink.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul
                          className={`grid w-[400px] gap-3 p-4  ${
                            navlink.isMulti === "YES"
                              ? "w-[500px] md:grid-cols-2"
                              : "grid-cols-1 md:w-[400px]"
                          }   `}
                        >
                          {navlink.sublinks
                            .sort((a: any, b: any) => a.order - b.order)
                            .map((component: any) => (
                              <ListItem
                                key={component.title}
                                title={component.title}
                                href={`${navlink.slug}/${component.slug}`}
                              >
                                {component.subtitle}
                              </ListItem>
                            ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem>
                      <Link href={navlink.slug}>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} ${
                            isSticky ? "text-neutral-800 " : "text-neutral-800 "
                          }`}
                        >
                          {navlink.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )}
                </div>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 text-lg leading-none no-underline outline-none transition-colors hover:bg-blue-800 hover:text-white  focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
