"use client";
import React, { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Wikis",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Projects",
    href: "/",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Docs",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Notion Ai",
    href: "/",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Template gallery",
    href: "/",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Connections",
    href: "/",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const download = [
  { desc: "ios & Android" },
  { desc: "Mac & Windows" },
  { desc: "Web Clipper" },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={` fixed top-0 w-full bg-white flex items-center justify-between bg--400 mx-auto p-3 ${
        isScrolled ? "border-b border-zinc-400" : ""
      }`}
    >
      <div className="hidden sm:flex items-center justify-between w-full bg--400">
        <div className="bg--200 flex items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/notion.png"
              alt="logo"
              width={1000}
              height={1000}
              className="h-12 w-12 object-cover "
            />
            <span className="font-semibold text-lg cursor-pointer">Notion</span>
          </div>

          <div>
            <NavigationMenu>
              <NavigationMenuList className="flex items-center justify-center gap-4 ">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg font-none">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="bg--400 flex flex-col justify-center">
                  <NavigationMenuTrigger className="text-lg font-none">
                    Download
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className=" w-[80px] px-2  md:w-[150px] ">
                      {download.map((component) => (
                        <ListItem className=" text-2xl">
                          {component.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg font-none">
                    Solution
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg font-none">
                    Components
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="bg--200 flex sm:flex-nowrap items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-4 font-medium text-lg">
            <span className="cursor-pointer px-3 py-1 hover:bg-gray-200 rounded-lg">
              Request a demo
            </span>
            <Separator
              orientation="vertical"
              className=" stroke-zinc-700 text-xl h-5"
            />
            <span className="cursor-pointer px-3 py-1 hover:bg-gray-200 rounded-lg">
              Log in
            </span>
          </div>
          <div className="bg-black text-white rounded-lg cursor-pointer p-2 text-lg font-semibold">
            Get Notion Free
          </div>
        </div>
      </div>

      {/* for small screen */}
      <div className="bg--400 w-full flex overflow-y-hidden sm:hidden  items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={"/notion.png"}
            alt="nb"
            width={1000}
            height={1000}
            className="w-10 h-10 object-contain"
          />
          <div className="font-semibold">Notion</div>
        </div>
        <div className="text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <RxCross1 /> : <IoMenuOutline />}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 h-full bg-white  overflow-y-hidden  mt-16 ">
          <div className="flex justify-end p-4"></div>
          <div className="flex flex-col items-center space-y-12 px-5">
            <div className="w-full flex items-center justify-between pb-3 border-b  border-black">
              <a className="text-gray-800 font-bold text-lg" href="#">
                Product
              </a>
              <FaAngleRight />
            </div>
            <div className="w-full flex items-center justify-between pb-3 border-b  border-black">
              <a className="text-gray-800 font-bold text-lg" href="#">
                Solutions
              </a>
              <FaAngleRight />
            </div>
            <div className="w-full flex items-center justify-between pb-3 border-b  border-black">
              <a className="text-gray-800 font-bold text-lg" href="#">
                Resources
              </a>
              <FaAngleRight />
            </div>
            <div className="w-full flex items-center justify-between pb-3 border-b  border-black">
              <a className="text-gray-800 font-bold text-lg" href="#">
                Download
              </a>
              <FaAngleRight />
            </div>
            <div className="w-full flex items-center justify-between pb-3 border-b  border-black">
              <a className="text-gray-800 font-bold text-lg" href="#">
                Pricing
              </a>
              <FaAngleRight />
            </div>
            <div className="w-full flex items-center justify-between border-b  border-black">
              <a className="text-gray-800 font-bold text-lg" href="#">
                Request a demo
              </a>
              <FaAngleRight />
            </div>
            <div className="w-full bg-black text-white rounded-lg py-2 text-center font-semibold mx-3">
              Get Notion Free
            </div>
            <div className="w-full bg-white border border-black text-black rounded-lg font-semibold py-2 text-center mx-3">
              Log in
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
