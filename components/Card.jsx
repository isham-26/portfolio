import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
const Card = ({ item }) => {
  return (
    <div className="xl:w-[36rem] xl:gap-7 gap-4 bg-pink-50/20 rounded-md mb-3 xl:hover:scale-105 ease-in-out duration-500">
      <div className="overflow-hidden bg-white rounded-tl-md rounded-tr-md ">
        <Image
          src={`/${item.img}`}
          className="h-[15rem] xl:h-[18rem] hover:scale-105 w-full ease-in-out duration-500 hover:opacity-80 object-cover"
          alt="img"
          width={300}
          height={400}
        />
      </div>
      <div className="flex flex-col gap-2 justify-center p-5">
        <div className="xl:text-2xl text-xl text-white font-semibold">
          0{item.num}
        </div>
        <div className="xl:text-4xl text-3xl text-accent">{item.title}</div>
        <div className="xl:text-2xl text-xl text-white text-bold">
          {item.categiry}
        </div>
        <p className="text-bold text-gray-300 line-clamp-5 leading-6">
          {item.discription}
        </p>
        <div className="">
          <div className="text-xl"><span className="text-accent">* </span>Using Tools</div>
          <div className="flex xl:gap-5 gap-4 flex-wrap text-2xl mt-3 text-accent">
          {item.tools.map((icon, index) => {
            return (
              <span className="" key={index}>
                {icon}
              </span>
            );
          })}
          </div>
        </div>
        <div className="flex gap-5">
          <Link href={item.livelink} target="_balank">
            <div className="w-[2rem] h-[2rem] xl:w-[3rem] xl:h-[3rem] rounded-full bg-pink-50/20 flex justify-center items-center xl:text-2xl hover:bg-accent text-accent hover:text-white ease-in-out duration-300">
              <BsArrowUpRight />
            </div>
          </Link>
          <Link href={item.gitlink} target="_balank">
            <div className="w-[2rem] h-[2rem] xl:w-[3rem] xl:h-[3rem] rounded-full bg-pink-50/20 flex justify-center items-center xl:text-2xl hover:bg-accent text-accent hover:text-white ease-in-out duration-300">
              <BsGithub />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
