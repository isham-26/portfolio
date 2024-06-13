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
      title:"Mark Website",
      categiry:"Full Stack",
      img:"project.jpg",
      tools:[
        <FaReact key={9} />,
        <FaNodeJs key={8} />,
        <SiExpress key={7} />,
        <TbBrandNextjs key={6} />,
        <SiTailwindcss key={5} />,],
      discription:"This is my freelance project",
      livelink:"/",
      gitlink:"https://github.com/isham-26",

    },
    {
      num:1,
      title:"mark website",
      categiry:"full stack",
      img:"project-1.png",
      tools:[
        <FaReact key={9} />,
        <FaNodeJs key={8} />,
        <SiExpress key={7} />,
        <TbBrandNextjs key={6} />,
        <SiTailwindcss key={5} />,],
      discription:"lorem bnqwsd usd qwsuw sws swsqw sws sisqws i sqwghws wsus sw suiz shqwsuq sqwuishs qws qwhs lorem hbwsxd quiwbsd qwi sdhqiw dsqiwd bqwd quwd qwud bqwdbqw dquwdbqwdvq quwdbq duqwdbqwdbqwdbquwd dqwudb qwudquwd qwudqw dquwdq dquwd  qdqud quwd qwd qudqwd ",
      livelink:"https://marq-one.vercel.app/",
      gitlink:"https://github.com/isham-26/marq",

    },
    {
      num:1,
      title:"mark website",
      categiry:"full stack",
      img:"project-1.png",
      tools:[
        <FaReact key={9} />,
        <FaNodeJs key={8} />,
        <SiExpress key={7} />,
        <TbBrandNextjs key={6} />,
        <SiTailwindcss key={5} />,],
      discription:"lorem bnqwsd usd qwsuw sws swsqw sws sisqws i sqwghws wsus sw suiz shqwsuq sqwuishs qws qwhs lorem hbwsxd quiwbsd qwi sdhqiw dsqiwd bqwd quwd qwud bqwdbqw dquwdbqwdvq quwdbq duqwdbqwdbqwdbquwd dqwudb qwudquwd qwudqw dquwdq dquwd  qdqud quwd qwd qudqwd ",
      livelink:"https://marq-one.vercel.app/",
      gitlink:"https://github.com/isham-26/marq",

    },
    {
      num:1,
      title:"mark website",
      categiry:"full stack",
      img:"project-1.png",
      tools:[
        <FaReact key={9} />,
        <FaNodeJs key={8} />,
        <SiExpress key={7} />,
        <TbBrandNextjs key={6} />,
        <SiTailwindcss key={5} />,],
      discription:"lorem bnqwsd usd qwsuw sws swsqw sws sisqws i sqwghws wsus sw suiz shqwsuq sqwuishs qws qwhs lorem hbwsxd quiwbsd qwi sdhqiw dsqiwd bqwd quwd qwud bqwdbqw dquwdbqwdvq quwdbq duqwdbqwdbqwdbquwd dqwudb qwudquwd qwudqw dquwdq dquwd  qdqud quwd qwd qudqwd ",
      livelink:"https://marq-one.vercel.app/",
      gitlink:"https://github.com/isham-26/marq",

    },
  ]
  return (
    <div className="flex justify-center items-center">
      <div className="xl:w-[85%] flex flex-wrap justify-center gap-7 p-4 xl:p-0">
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