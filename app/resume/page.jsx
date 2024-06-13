"use client";

import { Button } from "@/components/ui/button";
import { FaNodeJs, FaReact, FaInstagram } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode, SiCodeforces } from "react-icons/si";
import {
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import SkillsCard from "@/components/SkillsCard";
import Link from "next/link";
const Resume = () => {
  const data = [
    {
      key:1,
      sectionName: "Languages",
      icons: [<IoLogoJavascript key={11}/>, <SiTypescript key={12}/>, <TbBrandCpp key={13}/>],
    },
    {
      key:2,
      sectionName: "Frameworks",
      icons: [
        <SiFastapi key={10}/>,
        <FaReact key={9}/>,
        <FaNodeJs key={8}/>,
        <SiExpress key={7}/>,
        <TbBrandNextjs key={6}/>,
        <SiTailwindcss key={5}/>,
      ],
    },
    {
      key:3,
      sectionName: "Databases",
      icons: [<SiMongodb key={3}/>, <SiMysql key={4}/>],
    },
    {
      key:4,
      sectionName: "Databases",
      icons: [<FaGithub key={1}/>, <IoLogoFirebase key={2}/>],
    },
  ];
  return (
    <div className="flex justify-center items-center p-2">
      <div className="xl:w-[70%] w-full">
        <div className="flex justify-between items-center mb-6 xl:border-b xl:border-white xl:p-7 p-3">
          <div className="xl:text-3xl text-2xl">
            <span className="text-accent">$ </span>Resume.
          </div>
          <Button className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-white rounded-full">
            Resume in file
          </Button>
        </div>
        <div className="p-4 w-full bg-transparent flex flex-col gap-5">
          <div className="xl:text-2xl text-xl">
            <span className="text-accent">$ </span>Skills
          </div>
          <div className="flex flex-col xl:flex-row xl:flex-wrap xl:gap-8 gap-5 justify-center mb-10">
            {data.map((items, indx) => {
              return (
                <SkillsCard
                  sectionName={items.sectionName}
                  icons={items.icons}
                  key={indx}
                />
              );
            })}
          </div>
        </div>
        <div className="">
          <div className="xl:text-2xl text-xl">
            <span className="text-accent">$ </span>About Me
          </div>
          <div className="flex xl:flex-row flex-col px-6 py-3 gap-8">
            <div className="flex-[3] xl:text-xl p-1">
              <p className="mb-5">
                Hello I am <span className="text-accent">Isham Gupta</span>&#44; a
                passionate computer science student currently pursuing my
                Bachelor&#39;s in Technology &#40;with Data Science&#41; at{" "}
                <span className="text-accent">
                  Heritage Institute of Technology&#44; Kolkata&#44; India.
                </span>
              </p>
              <p className="">
                Alongside my studies&#44; I have immersed myself in the world of
                technology&#44; honing my skills in various programming languages
                like
                <span className="text-accent"> TypeScript</span>&#44;{" "}
                <span className="text-accent">JavaScript</span>&#44; and{" "}
                <span className="text-accent">C++</span>. My proficiency extends
                to frameworks such as{" "}
                <span className="text-accent">Fast API</span>&#44;{" "}
                <span className="text-accent">React.js</span>&#44;{" "}
                <span className="text-accent">Express.js</span>&#44; and
                <span className="text-accent"> Node.js</span>&#44; complemented by a
                strong foundation in databases like
                <span className="text-accent"> MongoDB</span>&#44;{" "}
                <span className="text-accent">MySQL</span>.
              </p>
            </div>
            <div className="flex-[1] flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-textWhite mb-2 text-xl border-0 border-solid border-b-2 border-textPrimary">
                  <span className="text-accent">/</span>social-profiles
                </div>
                <div className="flex gap-5 justify-between text-3xl">
                  <Link
                    href="https://www.linkedin.com/in/isham-gupta-617548305/"
                    className="h-[55px] w-[55px] bg-pink-50/20 flex justify-center items-center rounded-md hover:bg-accent ease-in-out duration-300"
                  >
                    <FaLinkedinIn alphabetic={"LinkedIn"} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/guptaisham/"
                    className="h-[55px] w-[55px] bg-pink-50/20 flex justify-center items-center rounded-md hover:bg-accent ease-in-out duration-300"
                  >
                    <FaInstagram alphabetic={"Insta"} />
                  </Link>
                  <Link
                    href="https://github.com/isham-26"
                    className="h-[55px] w-[55px] bg-pink-50/20 flex justify-center items-center rounded-md hover:bg-accent ease-in-out duration-300"
                  >
                    <FaGithub alphabetic={"GitHub"} />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-textWhite mb-2 text-xl border-0 border-solid border-b-2 border-textPrimary">
                  <span className="text-accent">/</span>DSA-profiles
                </div>
                <div className="flex justify-between text-3xl">
                  <Link
                    href="https://www.geeksforgeeks.org/user/gashu7841/"
                    className="h-[55px] w-[55px] bg-pink-50/20 flex justify-center items-center rounded-md hover:bg-accent ease-in-out duration-300"
                  >
                    <SiGeeksforgeeks alphabetic={"GFG"} />
                  </Link>
                  <Link
                    href="https://leetcode.com/u/ishamGupta_26/"
                    className="h-[55px] w-[55px] bg-pink-50/20 flex justify-center items-center rounded-md hover:bg-accent ease-in-out duration-300"
                  >
                    <SiLeetcode alphabetic={"LeetCode"} />
                  </Link>
                  <Link
                    href="https://codeforces.com/profile/isham_26"
                    className="h-[55px] w-[55px] bg-pink-50/20 flex justify-center items-center rounded-md hover:bg-accent ease-in-out duration-300"
                  >
                    <SiCodeforces alphabetic={"CodeForces"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
