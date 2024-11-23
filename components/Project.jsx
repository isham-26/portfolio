"use client";
import Card from "@/components/Card";
import { FaNodeJs, FaReact, FaInstagram } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaLinkedinIn, FaGithub} from "react-icons/fa";
import {  SiLeetcode, SiCodeforces,SiPostman,SiCodechef } from "react-icons/si";
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
const Projects = () => {
  const data =[
    {
      num:1,
      title:"Social Media Website",
      categiry:"Full Stack",
      img:"social.webp",
      tools:[
        <FaReact key={9} />,
        <FaNodeJs key={8} />,
        <SiExpress key={7} />,
        <SiTailwindcss key={5} />,],
      discription:"Our social media app is designed to connect people in meaningful ways, fostering communication, creativity, and community building. With a user-friendly interface and powerful features, it allows users to share their thoughts, photos, and videos, interact with friends, and discover new content.",
      livelink:"/",
      gitlink:"https://github.com/isham-26",

    },
    {
      num:2,
      title:"E-commerce website",
      categiry:"full stack",
      img:"e-commer.webp",
      tools:[
        <FaReact key={9} />,
        <FaNodeJs key={8} />,
        <SiExpress key={7} />,
        <TbBrandNextjs key={6} />,
        <SiTailwindcss key={5} />,],
      discription:"Our e-commerce platform is your one-stop destination for a seamless and secure online shopping experience. With a wide range of products, intuitive navigation, and powerful features, we make shopping more convenient and enjoyable than ever.",
      livelink:"https://e-commerce-cp5h.vercel.app/",
      gitlink:"https://github.com/isham-26/E-commerce",

    },
  ]
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-7 p-4 xl:p-0">
        {
           data.map((item,indx)=>{
              return (
                 <Card item={item} key={indx}/>
              )
           })
        }
      </div>
    </div>
  )
}

export default Projects