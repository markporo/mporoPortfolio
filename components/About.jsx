import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Tilt from 'react-parallax-tilt';
import Link from "next/link";
import '../styles/Home.module.css'

{/* <a href="https://ibb.co/j8wXD5J"><img src="https://i.ibb.co/Cw9GQtP/myphoto.jpg" alt="myphoto" border="0"></a>
<a href="https://ibb.co/34rrT5s"><img src="https://i.ibb.co/9c88pmv/myphoto-circle-cutout.png" alt="myphoto-circle-cutout" border="0"></a> */}


export default function About() {
  return (
       // ABOUT SECTION CONTAINER
       <div className="relative top-20 pt-8 md:pt-0 md:h-screen">

       {/* PHOTO SIDE AND TEXT SIDE CONTAINER */}
       <div className=" w-full mx-auto flex flex-col md:flex-row flex-nowrap md:items-center md:justify-around">
         
         {/* MARKPORO PHOTO SIDE */}
         <div className=" mainImage md:w-1/2 flex flex-nowrap items-center justify-center md:bg-bblue md:h-screen">
           
               {/* Circle Image */}
           <Tilt 
             className="md:hidden"
             perspective={500}
             scale={1.03}
           >
             <Image placeholder="blur" blurDataURL="https://i.ibb.co/zZTV5gy/blurred-myphoto-circle-cutout.png" src="https://i.ibb.co/9c88pmv/myphoto-circle-cutout.png" width="200" height="200" alt="mporo" />
           </Tilt>
 
               {/* Rectangle Image */}
           <Tilt 
             className=" mainImage hidden md:block"
             perspective={500}
             scale={1.03}
           >
             <Image placeholder="blur" blurDataURL="https://i.ibb.co/5sqYvKK/blurred-myphoto.jpg" className="sm:hidden md:block md:rounded-lg" src="https://i.ibb.co/Cw9GQtP/myphoto.jpg" width="280" height="400" alt="mporo" />
           </Tilt>
         </div>
 
         {/* TEXT SIDE */}
         <div className="text-gray-700 md:w-1/2 text-center md:text-left px-4">
           <h1 className="py-1">Hi! I&apos;m  <span className="text-bblue">Mark</span></h1>
           <h1 className="py-1 pb-1 text-2xl">Full Stack Web Developer</h1>
           <h3 className="py-1"> Let&apos;s Build Something Together!</h3>
           <h4 className="px-5 py-5 md:px-0">Since 2018, I have been engaging in full-stack development projects and have continued to seek professional credentials with my enrollment and participation in BloomTech’s Full Stack Web Engineering Program. As a longtime songwriter and music instructor, I bring a high level of creativity, organization, adaptability, and a detailed mindset to my work.  Since graduation I have been working part time for a start up company called Story Squad.  I am currently seeking full time employment for either backend or frontend positions. </h4>
           
         {/* ICONS on text side - justify start */}
           <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-evenly md:justify-start my-8 w-full">
             <icon className="mx-4">
               <a href='https://www.linkedin.com/in/markporo/' target="_blank" rel="noopener noreferrer">
                 <FaLinkedinIn />
               </a>
             </icon>
             <icon className="mx-4">
               <a href='https://github.com/markporo' target="_blank" rel="noopener noreferrer">
                 <FaGithub />
               </a>
             </icon>
             <icon className="mx-4">
              <Link href="/contact">
                <AiOutlineMail />
               </Link>
             </icon>
             <Link href='/#Projects'>
             <button className="">Projects</button>
             </Link>
           </div>
         </div>
       </div>
     </div>
  )
}


{/* <a href="https://ibb.co/q5ykT5n"><img src="https://i.ibb.co/ZmLWqmJ/blurred-Poro-site.jpg" alt="blurred-Poro-site" border="0"></a>
<a href="https://ibb.co/r5nbMdd"><img src="https://i.ibb.co/5sqYvKK/blurred-myphoto.jpg" alt="blurred-myphoto" border="0"></a>
<a href="https://ibb.co/KWpxGgM"><img src="https://i.ibb.co/zZTV5gy/blurred-myphoto-circle-cutout.png" alt="blurred-myphoto-circle-cutout" border="0"></a> */}