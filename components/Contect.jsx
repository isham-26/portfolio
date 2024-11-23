import React from "react";
import Social from "./Social";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const data = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    descrption: "+91 6388093219",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    descrption: "ishamgupta711@gmail.com",
  },
];
const Contect = () => {
  return (
        <div className=" text-center xl:text-left mt-5 xl:mt-0">
          <div className="text-2xl mr-5">
            <span className="text-accent">$ </span>Contact Me
          </div>
          <div className="flex flex-col xl:flex-col xl:justify-between gap-2 mt-5 items-center">
            <div className="mt-3 xl:mt-0">
              <Social />
            </div>
          </div>
        </div>
  );
};

export default Contect;
