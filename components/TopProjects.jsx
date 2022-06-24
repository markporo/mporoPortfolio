import React from "react";
import Link from "next/link.js";
import { projects } from "../projectArray.js";
import ProjectCard from "./ProjectCard.jsx";

export default function TopProjects() {

  let topSixProjects = projects.slice(0, 4);
  let cardClass = " min-w-[300px] max-w-[500px] m-4 p-4 w-10/12  md:w-1/3 lg:w-1/3 rounded-lg bg-bblue flex flex-col justify-center text-center"

  return (
    <div id="Projects" className="pb-2 mb-4 block mt-0">

      {/* Title Projects */}
      <h3 className="mt-0 pt-20 sm:pt-16 md:pt-5 md:mt-16 text-center text-xl">Projects</h3>

      {/* Container around all Cards */}
      <div className=" flex flex-row flex-wrap justify-center text-pwhite m-8">

        {topSixProjects.map(eachProject => {

          {/* each project card */ }
          return (
            <ProjectCard cardClass={cardClass} key={eachProject.id} eachProject={eachProject} />
          )
        })}
        
      </div>
    
      <Link href='/projects-archives'>
        <div className="-mt-4 flex justify-center items-center sm:justify-end flex-row max-w-[1450px]" >
          <div className=" flex justify-center items-center h-10 rounded-xl mr-0 sm:mr-36 hover:scale-110 ease-in-out duration-300 bg-offwhite border-2 border-bblue w-44  text-center">
            <h4> See More Projects </h4>
          </div>
        </div>
      </Link>
     
    </div>
  )
}

