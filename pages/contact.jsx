import React from "react";
import Navbar from '../components/Navbar'
import Link from "next/link";
import { RiMailLine, RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri'


export default function Contact() {
  return (
    <div className="">
      <Navbar />
      <div className=" flex flex-row justify-center items-center">
        <form className=" rounded-lg -mb-4 mt-36 text-pwhite bg-bblue w-2/5 min-w-[260px] text-center h-[325px] flex flex-col justify-center items-center" id="contact" name="contact" method="POST" data-netlify="true">
          <label>Contact Me</label>

          <input type="text" name="name" placeholder="  Your Name" />

          {/* <label>Your Email:</label>   */}
          <input type="email" name="email" placeholder="  Your Email" />

          {/* <label>Message Me:</label>   */}
          <textarea name="message" placeholder=" Write me a message!"></textarea>
          
          <button className=" z-50 h-12 hover:scale-110 bg-gradient-to-r from-newgreen to-pwhite hover:bg-gradient-to-r hover:from-pwhite hover:to-pwhite mt-4 text-gray-700 w-3/4 shadow-xl" type="submit">
            Send
          </button>

        </form>
      </div>

      {/* stays on bottom Footer */}
      <div className="absolute w-full bottom-0">
        <svg className="-mb-10 md:-mb-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F0ECE2" fillOpacity="1" d="M0,192L120,186.7C240,181,480,171,720,181.3C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div className="bg-pwhite w-full h-32 px-8 py-1 flex flex-col items-start justify-center">
          <h4 className="p-2 text-xl">Mark Porostosky Jr.</h4>
          <div className="text-lg px-4 flex flex-row flex-nowrap justify-evenly w-32">
            <a href="https://www.linkedin.com/in/markporo/"><RiLinkedinBoxLine /></a>
            <a href="https://github.com/markporo"> <RiGithubLine /></a>
            <Link href="/contact">
              <a><RiMailLine /></a>
            </Link>
          </div>
          <p className="p-2 text-sm">Copyright © 2022 mporo</p>

        </div>
      </div>




    </div>
  )
}