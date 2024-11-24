"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Replaces useRouter for active link detection

  // Helper function to check if the link is active
  const isActive = (path) => pathname === path;

  return (
    <header className="flex justify-center py-8 xl:py-5 text-white border-b border-accent xl:mb-10 mb-1">
      <div className="w-[90%] xl:w-[70%] flex justify-between relative">
        <div>
          <Link href="/">
            <div className="logo text-4xl font-semibold cursor-pointer">
              Isham<span className="text-accent">.</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex xl:gap-8">
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-accent font-semibold" : "text-white"
            } hover:text-accent`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`${
              isActive("/projects") ? "text-accent font-semibold" : "text-white"
            } hover:text-accent`}
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className={`${
              isActive("/resume") ? "text-accent font-semibold" : "text-white"
            } hover:text-accent`}
          >
            Resume
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden flex flex-col items-end">
          <button
            className="text-white inline-flex p-2 rounded-md lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger Icon */}
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
                <path d="M6 18L18 6M6 6l12 12" /> // Close Icon
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger Icon
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="p-3 text-white rounded-md bg-black bg-opacity-90 absolute">
              <ul className="space-y-2">
                <Link
                  href="/"
                  className={`block ${
                    isActive("/") ? "bg-accent text-white" : ""
                  } hover:bg-accent px-2 py-1 rounded-md`}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className={`block ${
                    isActive("/projects") ? "bg-accent text-white" : ""
                  } hover:bg-accent px-2 py-1 rounded-md`}
                >
                  Projects
                </Link>
                <Link
                  href="/resume"
                  className={`block ${
                    isActive("/resume") ? "bg-accent text-white" : ""
                  } hover:bg-accent px-2 py-1 rounded-md`}
                >
                  Resume
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
