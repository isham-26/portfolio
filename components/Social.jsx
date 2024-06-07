import Link from 'next/link'
import React from 'react'
import {FaInstagram,FaGithub,FaTwitter,FaLinkedin} from "react-icons/fa"
const Social = () => {
    const data=[
        {
            icon:<FaGithub/>,
            path:""
        },
        {
            icon:<FaInstagram/>,
            path:""
        },
        {
            icon:<FaLinkedin/>,
            path:""
        },
        {
            icon:<FaTwitter/>,
            path:""
        },
    ]
  return (
    <div className='flex gap-5 mt-3'>
        {
            data.map((item,index)=>{
                return (
                    <Link href={item.path} key={index} className='hover:text-accent text-xl'>{item.icon}</Link>
                )
            })
        }
    </div>
  )
}

export default Social