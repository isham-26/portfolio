import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
const Card = ({ item }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-7 gap-4 bg-pink-50/20 rounded-md mb-3">
      <div className="xl:w-1/2 overflow-hidden bg-white rounded-tl-md rounded-tr-md xl:rounded-tl-none xl:rounded-tr-none">
        <Image
          src={`/${item.img}`}
          className="hover:scale-105 w-full ease-in-out duration-500 hover:opacity-80 object-contain"
          alt="img"
          width={300}
          height={200}
        />
      </div>
      <div className="xl:w-1/2 flex flex-col gap-2 justify-center p-3">
        <div className="xl:text-2xl text-xl text-white font-semibold">0{item.num}</div>
        <div className="xl:text-4xl text-3xl text-accent">{item.title}</div>
        <div className="xl:text-2xl text-xl text-white text-bold">{item.categiry}</div>
        <p className="text-bold text-gray-300">{item.discription}</p>
        <div className="flex gap-5">
          <Link href={item.livelink}>
            <div className="w-[2rem] h-[2rem] xl:w-[3rem] xl:h-[3rem] rounded-full bg-accent flex justify-center items-center xl:text-2xl">
              <BsArrowUpRight />
            </div>
          </Link>
          <Link href={item.gitlink}>
            <div className="w-[2rem] h-[2rem] xl:w-[3rem] xl:h-[3rem] rounded-full bg-accent flex justify-center items-center xl:text-2xl">
              <BsGithub />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
