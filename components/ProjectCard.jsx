import React from "react"
import Image from "next/image"

export default function ProjectCard({cardClass, eachProject }) {

  let imageStyle = "max-w-[300px] min-w-[50px] rounded-lg hover:rounded-lg hover:scale-110 ease-in-out duration-300";

  return (
    <div className={cardClass} key={eachProject.id}>

      {/* image and buttons */}
      <div className="flex flex-row justify-around ">
        <a href={eachProject.liveUrl} target="_blank" rel="noopener noreferrer" >
        <div className="max-w-[200px] min-w-[100px] m-auto">
          <source srcSet={eachProject.src} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image placeholder="blur" quality={75} blurDataURL="https://i.ibb.co/ZmLWqmJ/blurred-Poro-site.jpg" className={imageStyle} src={eachProject.src} width="200" height="200" alt={eachProject.alt} />
        </div>
        </a>
        <div className="flex flex-col items-center justify-center marker:w-1/3 xs:w-1/2 pl-1 xs:pl-0 xs:px-1">
          {eachProject.githubUrl != "" ? <a href={eachProject.githubUrl} target="_blank" rel="noopener noreferrer"> <button className="code mt-0 rounded-md w-9/12 xs:w-full h-10">Code</button></a> : <span></span>}

          {eachProject.liveUrl != "" ? <a href={eachProject.liveUrl} target="_blank" rel="noopener noreferrer"><button className="live mt-0 rounded-md px-3 w-9/12 xs:w-full h-10 bg-gradient-to-r from-pdark to-pblue">Live</button></a> : <span></span>}
        </div>
      </div>
      {/* Title */}
      <h2 className="text-2xl mt-4">{eachProject.title}</h2>

      {/* Breakline */}
      <div className="mt-2 border bg-oldwhite border-oldwhite h-[1px] w-full"></div>

      {/* description */}
      <h4 className="mt-4 h-full rounded-lg p-4 bg-offwhite text-gray-700 tracking-wide text-xs">{eachProject.description}</h4>

    </div>
  )
}
