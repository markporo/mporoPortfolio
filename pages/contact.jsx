import React from "react";
import Navbar from '../components/Navbar'
import Link from "next/link";
import { RiMailLine, RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri'
import Footer from "../components/Footer";


export default function Contact() {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <form className=" rounded-lg mb-36 mt-36 text-pwhite bg-bblue w-2/5 min-w-[260px] text-center h-[325px] flex flex-col justify-center items-center" id="contact" name="contact" method="POST" data-netlify="true">
          <label>Contact Me</label>

          <input type="text" name="name" placeholder="  Your Name" />

          {/* <label>Your Email:</label>   */}
          <input type="email" name="email" placeholder="  Your Email" />

          {/* <label>Message Me:</label>   */}
          <textarea name="message" placeholder=" Write me a message!"></textarea>
          
          <button className=" z-40 h-10 hover:scale-105 bg-gradient-to-r from-newgreen to-pwhite hover:bg-gradient-to-r hover:from-pwhite hover:to-newgreen mt-4 text-gray-700 w-3/4 shadow-xl" type="submit">
            Send
          </button> 

        </form>
      </div>      

      {/* stays on bottom Footer */}
      <div className="z-50 fixed w-full bottom-0">
       <Footer />
      </div>




    </div>
  )
}