import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

export default function Icons() {
  return (
    <div className=" flex flex-row flex-nowrap items-center justify-evenly my-8 w-full">
    <icon>
      <a href='https://www.linkedin.com/in/markporo/' target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </icon>
    <icon>
      <a href='https://github.com/markporo' target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </icon>

    
    <icon>
    <Link href='/contact'>
    <a> <AiOutlineMail /></a>
    </Link>
    </icon>
  </div>
  )
}