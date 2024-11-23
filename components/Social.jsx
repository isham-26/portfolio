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
    <div className='flex flex-wrap justify-center gap-6 mb-5 xl:mb-0 w-[170px]'>
        {
            data.map((item,index)=>{
                return (
                    <Link href={item.path} className="h-[60px] w-[60px] flex justify-center items-center rounded-md hover:bg-accent ease-in-out duration-300 text-accent hover:text-white text-4xl" key={index} target="_blank">{item.icon}</Link>
                )
            })
        }
    </div>
  )
}

export default Social