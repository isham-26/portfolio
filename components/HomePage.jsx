import Image from "next/image";
import Social from "./Social";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import self from "@/public/man.png";
const HomePage = () => {
  return (
    <div className="min-h-[75vh]">
      <div className="w-[70%] mx-auto h-full mt-5 mb-5">
        <div className="flex flex-col-reverse xl:flex-row items-center xl:gap-40 xl:pt-8 xl:pb-16">
          <div className="text-center xl:text-left flex flex-col gap-2 items-center xl:items-start">
            <div className="text-accent">Web Devloper</div>
            <div className="text-5xl">Hello I Am</div>
            <div className="text-5xl text-accent">Isham Gupta</div>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores distinctio id minima ullam. Odio nobis ab quia minus
              neque maiores.
            </p>
            <div className="flex flex-col xl:flex-row xl:gap-10 gap-5 w-[9rem] ">
              <Button className="bg-transparent text-accent border-2 border-accent uppercase rounded-full hover:bg-accent hover:text-white">
                <span className="mr-3">Downlod cv</span>
                <FiDownload />
              </Button>
              <div className="">
                <Social />
              </div>
            </div>
          </div>
          
          <div className="w-[298px] h-[298px] xl:w-[498] xl:h-[300px] border-[4px] border-accent rounded-full flex justify-center items-center mb-5 mix-blend-lighten">
            <Image src={self} alt="img" className=" h-[250px] w-[250px] mb-8" />
          </div>
        </div>
        <div className="text-center xl:text-left ">
            <div className=" text-4xl mt-1"><span className="text-accent text-center">DSA</span> Achivements</div>
            <div className="xl:flex-row xl:gap-32 flex-col flex items-center">
            <div className="mt-5 flex items-center gap-5">
                <div className="text-3xl text-accent">CodeChef</div>
                <div className="text-5xl">2<span className="text-accent">*</span></div>
            </div>
            <div className="mt-5 flex items-center gap-5">
                <div className="text-3xl text-accent">LeetCode</div>
                <div className="text-5xl">360<span className="text-accent">+</span></div>
            </div>
            
            <div className="mt-5 flex items-center gap-5">
                <div className="text-3xl text-accent">CodeForces</div>
                <div className="text-5xl">1000<span className="text-accent">+</span></div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
