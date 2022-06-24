import React from "react";

export default function Tech() {
  return (
    <div id="Tech" className="block max-w-[1240px] m-auto mt-[7.5rem] md:mt-20">
      <h3 className="mt-20 md:mt-32 text-center text-xl text-gray-700">Technologies</h3>

      {/* Div around four boxes of Tech */}
      <div className=" min-w-[250px] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-1 mx-4">
        <div className=" md:col-span-2 bg-pwhite flex flex-col flex-start w-auto p-4 m-4 border shadow-[10px_10px_2px_2px_rgba(4,3,63,0.3)]">
          <h6>Front End</h6>
          <div className="h-[1px] w-full bg-gray-700 mb-3"></div>
          <div>
            <p>HTML/CSS/Js</p>
            <p>SASS</p>
            <p>TailwindCSS</p>
            <p>React</p>
            <p>Redux</p>
            <p>Next</p>
            <p>Material-UI</p>
            <p>Google Fonts</p>
            <p>API&apos;s</p>
          </div>
        </div>
        <div className=" md:col-span-1 bg-pwhite flex flex-col flex-start w-auto p-4 m-4 border shadow-[10px_10px_2px_2px_rgba(4,3,63,0.3)]">
          <h6>Tools</h6>
          <div className="h-[1px] w-full bg-gray-700 mb-3"></div>
          <div>
            <p>Git/ GitHub</p>
            <p>Npm</p>
            <p>VS Code</p>
            <p>Chrome Dev Tools</p>
            <p>Kanban</p>
            <p>Slack</p>
          </div>
        </div>
        <div className=" md:col-span-1 bg-pwhite flex flex-col flex-start w-auto p-4 m-4 border shadow-[10px_10px_2px_2px_rgba(4,3,63,0.3)]">
          <h6>Currently Learning</h6>
          <div className="h-[1px] w-full bg-gray-700 mb-3"></div>
          <div>
            <p>Custom Wordpress Themes</p>
            <p>TypeScrypt</p>
            <p>Firebase</p>
          </div>
        </div>
        <div className=" md:col-span-2 bg-pwhite flex flex-col flex-start w-auto p-4 m-4 border shadow-[10px_10px_2px_2px_rgba(4,3,63,0.3)]">
          <h6>Back End</h6>
          <div className="h-[1px] w-full bg-gray-700 mb-3"></div>
          <div>
            <p>Node.Js</p>
            <p>Express</p>
            <p>Mongo DB</p>
            <p>Postgres</p>
            <p>SQL</p>
            <p>KNEX</p>
            <p>Jest</p>
            <p>Swagger</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}