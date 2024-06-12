import Link from 'next/link'
import React from 'react'
import {FaInstagram,FaGithub,FaTwitter,FaLinkedin} from "react-icons/fa"
const Social = () => {
    const data=[
        {
            icon:<FaGithub/>,
            path:"https://github.com/isham-26"
        },
        {
            icon:<FaInstagram/>,
            path:"https://www.instagram.com/guptaisham/"
        },
        {
            icon:<FaLinkedin/>,
            path:"https://www.linkedin.com/in/isham-gupta-617548305/"
        },
        {
            icon:<FaTwitter/>,
            path:"https://x.com/gupta_isha58995"
        },
    ]
  return (
    <div className='flex gap-5 mb-5 xl:mb-0 '>
        {
            data.map((item,index)=>{
                return (
                    <Link href={item.path} className="xl:h-[40px] xl:w-[40px]  xl:bg-pink-50/20 flex justify-center items-center rounded-full hover:bg-accent ease-in-out duration-300 text-xl" key={index}>{item.icon}</Link>
                )
            })
        }
    </div>
  )
}

export default Social