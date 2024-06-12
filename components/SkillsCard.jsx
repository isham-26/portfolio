import React from 'react'

const SkillsCard = (props) => {
  return (
    <div className="xl:w-[30rem] bg-pink-50/20 p-5 rounded-md hover:scale-105 ease-in duration-300 shadow-md shadow-gray-400 hover:shadow-2xl hover:shadow-gray-100">
      <div className="flex flex-col gap-5">
        <div className="text-3xl text-accent">{props.sectionName}</div>
        <div className="flex justify-center xl:gap-6 gap-4 xl:text-4xl text-3xl">
          {props.icons.map((_icon, index) => {
            return (
              <span key={index} className="">
                {_icon}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default SkillsCard