import Image from "next/image";
import Social from "./Social";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import self from "@/public/isham.png";
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
const HomePage = () => {
  return (
    <div className="min-h-[75vh] flex justify-center">
      <div className="xl:w-[70%] w-full mt-5 mb-5 p-4 xl:p-0">
        <div className="flex flex-col-reverse xl:flex-row items-center xl:gap-40 xl:pt-8 xl:pb-16">
          <div className="text-center xl:text-left flex flex-col gap-2 items-center xl:items-start">
            <div className="text-accent">Web Developer</div>
            <div className="text-5xl">Hello I Am</div>
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

          <div className="w-[298px] h-[298px] xl:w-[498] xl:h-[300px] border-[4px] border-accent rounded-full flex justify-center items-center mb-5 bg-pink-50/5">
            <Image src={self} alt="img" className=" h-[220px] w-[220px] mb-8 mr-8 mix-blend-lighten" />
          </div>
        </div>
        
        <div className=" text-center xl:text-left mt-5 xl:mt-0">
          <div className="text-4xl">
            <span className="text-accent">$ </span>Contact Me
          </div>
          <div className="flex flex-col xl:flex-row xl:justify-between gap-2 mt-5 items-center">
            {data.map((info, index) => {
              return (
                <div className="flex gap-3" key={index}>
                  <div className="text-accent xl:text-2xl text-xl">
                    {info.icon}
                  </div>
                  <div className=" xl:text-xl">{info.title}:</div>
                  <p className=" xl:text-xl italic text-accent">
                    {info.descrption}
                  </p>
                </div>
              );
            })}
            <div className="mt-3 xl:mt-0">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
