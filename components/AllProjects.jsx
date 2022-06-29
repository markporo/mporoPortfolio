import React from "react";
import Link from "next/link.js";
import { projects } from "../projectArray.js";
import ProjectCard from "./ProjectCard.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function ProjectsArchive() {

  let cardClass = " min-w-[250px] max-w-[425px] m-4 p-4 w-10/12  sm:w-1/3 lg:w-1/4 rounded-lg bg-bblue flex flex-col justify-center text-center"


  return (
    <div className="">
      <Navbar />
      <div className="pb-2 mb-4 block mt-0 ">

        {/* Title Projects */}
        <h3 className="pt-28 text-center text-xl">Past and Recent Projects</h3>

        {/* Container around all Cards */}
        <div className=" flex flex-row flex-wrap justify-center text-pwhite mb-8">

          {projects.map(eachProject => {

            {/* each project card */ }
            return (
              <ProjectCard cardClass={cardClass} key={eachProject.id} eachProject={eachProject} />
            )
          })}
        </div>
        <Link href='/'>
        <div className="-mt-4 flex justify-center items-center sm:justify-end flex-row max-w-[1450px]" >
        <div className=" p-4 bg-gradient-to-r from-secblue to-pdark text-pwhite hover:bg-gradient-to-r hover:from-pdark hover:to-secblue  hover:scale-105 ease-in-out duration-100 flex justify-center items-center h-10 rounded-xl mr-0 sm:mr-36 text-center">
            <h4> Back to Home </h4>
          </div>
        </div>
      </Link>
      </div>
      <Footer />
    </div>
  )
}