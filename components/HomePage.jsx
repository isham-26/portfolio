import Image from "next/image";

import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import self from "@/public/isham.png";
import Contect from "./Contect";

const HomePage = () => {
  return (
    <div className=" flex justify-center">
      <div className="xl:w-[70%] w-full mt-5 p-4 xl:p-0">
        <div className="flex flex-col xl:flex-row justify-between xl:gap-40 xl:pt-8 xl:pb-8">
          <div className="text-center xl:text-left flex flex-col gap-2 items-center xl:items-start">
            <div className="text-accent">Web Developer</div>
            <div className="text-5xl">Hello I am</div>
            <div className="text-5xl text-accent">Isham Gupta</div>
            <p className="max-w-[500px] text-white/80">
              Stepped into programming back in 2022, and now I am a{" "}
              <span className="text-accent">FullStack Developer</span> with
              personal experience and I have knowledge about{" "}
              <span className="text-accent">DSA</span>.
            </p>
            <div className="mb-2">
              <span className="text-accent">Languages-:</span>
              <span className="italic">Hindi,English</span>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-10 gap-5 w-[10rem] ">
              <Button className="bg-transparent text-accent border-2 border-accent uppercase rounded-full hover:bg-accent hover:text-white">
                <span className="mr-3">Download cv</span>
                <FiDownload />
              </Button>
            </div>
          </div>
          <Contect/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
