"use client";

import { Button } from "@/components/ui/button";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const data = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    descrption: "+6388093219",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    descrption: "ishamgupta711@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    descrption: "Chutney apartment mandapara Anandapur kolkata 700107",
  },
];

const Contact = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col xl:flex-row xl:gap-20 gap-0 xl:w-[80%] w-full">
        <div className="flex flex-col gap-5 bg-pink-50/10 p-5 rounded-md">
          <div className="text-4xl text-accent">Lets work together</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            quaerat saepe animi rem
          </p>
          <div className="flex gap-8 flex-col xl:flex-row">
            <input
              className="bg-black/50 focus:text-accent p-2 w-full rounded-md"
              placeholder="Firstname"
            />
            <input
              className="bg-black/50 focus:text-accent p-2 w-full rounded-md"
              placeholder="Lastname"
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-8">
            <input
              className="bg-black/50 focus:text-accent p-2 w-full rounded-md "
              placeholder="Email address"
            />
            <input
              className="bg-black/50 focus:text-accent p-2 w-full rounded-md"
              placeholder="Phone number"
            />
          </div>
          <textarea className="bg-black/50 h-[10rem] p-2" placeholder="Type a message" />
          <Button className="rounded-full bg-accent text-white hover:bg-black/50 w-[8rem]">Send</Button>
        </div>
        <div className="flex justify-center  flex-col gap-5 p-5">
          {data.map((info, index) => {
            return (
              <div className="flex gap-6" key={index}>
                <div className="text-accent xl:text-2xl text-xl" >
                  {info.icon}
                </div>
                <div className=" xl:text-xl italic" >
                  {info.title}
                </div>
                <div className=" xl:text-xl italic">
                  {info.descrption}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
