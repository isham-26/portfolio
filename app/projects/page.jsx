"use client";
import Card from "@/components/Card";
import Image from "next/image";
const Projects = () => {
  const data =[
    {
      num:1,
      title:"mark website",
      categiry:"full stack",
      img:"project.jpg",
      discription:"lorem bnqwsd usd qwsuw sws swsqw sws sisqws i sqwghws wsus sw suiz shqwsuq sqwuishs qws qwhs",
      livelink:"/",
      gitlink:"/",

    },
    {
      num:1,
      title:"mark website",
      categiry:"full stack",
      img:"project.jpg",
      discription:"lorem bnqwsd usd qwsuw sws swsqw sws sisqws i sqwghws wsus sw suiz shqwsuq sqwuishs qws qwhs",
      livelink:"/",
      gitlink:"/",

    },
  ]
  return (
    <div className="flex justify-center items-center">
      <div className="xl:w-[70%] w-full p-2 xl:p-0">
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