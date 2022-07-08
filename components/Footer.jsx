import React from "react";
import Link from "next/link";
import { RiMailLine, RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <div className="">
       <svg className="-mb-10 md:-mb-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F0ECE2" fillOpacity="1" d="M0,192L120,186.7C240,181,480,171,720,181.3C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div className="  bg-pwhite w-full  px-8 flex flex-col items-center justify-center md:items-start md:justify-start">
          
          {/* <h4 className="p-2 text-xl">Mark Porostosky Jr.</h4> */}
          <div className="">
            <h4 className=" font-nothing-you-can-do p-2 text-lg">markporo@yahoo.com</h4>
          </div>

          <div className="text-lg px-4 flex flex-row flex-nowrap justify-evenly w-32">
            <a href="https://www.linkedin.com/in/markporo/"><RiLinkedinBoxLine /></a>
            <a href="https://github.com/markporo"> <RiGithubLine /></a>
            <Link href="/contact">
              <a><RiMailLine /></a> 
            </Link>
          </div>
         
          <p className=" font-nothing-you-can-do p-2 text-sm">Copyright © 2022 mporo</p>

        </div>
    </div>
  )
}
