"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Nav } from "./Nav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-center py-8 xl:py-5 text-white border-b border-accent xl:mb-10 mb-1">
      <div className="w-[90%] xl:w-[70%] flex justify-between">
        <div className="">
          <Link href="/">
            <div className="logo text-4xl font-semibold">
              Isham<span className="text-accent">.</span>
            </div>
          </Link>
        </div>
        <div className="hidden xl:flex xl:gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent rounded-full">Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden flex flex-col items-end">
          <button
            className="text-white inline-flex p-2 rounded-md lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger icon: */}
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // 'X' icon
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
              )}
            </svg>
          </button>
          {isOpen && (
            <div className=" p-3 text-white rounded-md">
              <ul>
                <Link href="/">
                  <li className="hover:bg-accent w-[10rem] hover:text-white px-2">
                    Home
                  </li>
                </Link>
                <Link href="projects">
                  <li className="hover:bg-accent w-[10rem] hover:text-white px-2">
                    Projects
                  </li>
                </Link>
                <Link href="resume">
                  <li className="hover:bg-accent w-[10rem] hover:text-white px-2">
                    Resume
                  </li>
                </Link>
                <Link href="contact">
                  <li className="hover:bg-accent w-[10rem] hover:text-white px-2">
                    Contact
                  </li>
                </Link>
              </ul>
              <Link href="/contact">
                <Button className="bg-white text-accent rounded-full mt-3 w-full">Hire me</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
