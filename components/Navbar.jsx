import React, { useState } from "react";
import { useRouter } from 'next/router'
import Image from "next/image";
import Link from "next/link";
import logo from './../public/assets/favicon_io/apple-touch-icon.png';
import BurgerMenu from "./BurgerMenu";
import SideNavIcons from "./SideNavIcons"
import {AiOutlineHome, AiOutlineContacts} from 'react-icons/ai';
import {FaRegKeyboard} from 'react-icons/fa';
import {GrProjects} from 'react-icons/gr';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const router = useRouter()
  const { pid } = router.query
  console.log(pid)


  let sideNav;
  isOpen ? sideNav = 'z-[200] bg-pwhite transition-all duration-300 ease-in-out fixed left-0 top-20 shadow-md md:hidden uppercase  w-7/12 border-r border-b border-gray-300 h-screen' 
          :
           sideNav = 'bg-white fixed -left-full top-20 ease-in duration-500 transition-all shadow-md md:hidden uppercase  w-7/12 border-r border-b border-gray-300 h-screen';


  return (
    <div className="bg-pwhite fixed w-full h-20 shadow-lg z-[9999]">

      {/* Main Nav Container */}
      <nav className=" flex justify-between items-center w-full h-full px-2 2xl:px-16">

        {/* logo left */}
        <div className="flex flex-row flex-nowrap items-center ml-7">
          <Image 
            width='28' 
            height='28' 
            src={logo} 
            alt="mp" 
            layout="fixed"
          />
          <h2 className="ml-1.5">mporo</h2>
        </div>

        {/* Nav Titles and Links */}
        <ul className="hidden w-3/4 md:flex flex-row flex-nowrap justify-end mr-6 ">
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/#Tech'>
            <li>Tech</li>
          </Link>
          <Link href='/#Projects'>
            <li>Projects</li>
          </Link>
          <Link href='/contact'>
            <li>Contact</li>
          </Link>

          <a href='https://www.linkedin.com/in/markporo/' target="_blank" rel="noopener noreferrer">
            <li>Linkedin</li>
          </a>
          <a href='https://github.com/markporo' target="_blank" rel="noopener noreferrer">
            <li>GitHub</li>
          </a>
        </ul>

        {/* Burger Menu Icon on Right */}
        <div className="md:hidden sm:block">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>

        {/* SIDE NAV */}
      <div className={sideNav}>
      <Link href='/'>
            <h5 className=" flex flex-row flex-nowrap justify-start items-center cursor-pointer pb-5 mt-10 text-sm"><AiOutlineHome /><span className="m-1">Home</span></h5>
          </Link>
          <Link  href='/#Tech'>
            <h5 className=" flex flex-row flex-nowrap justify-start items-center  cursor-pointer py-5 text-sm" ><FaRegKeyboard /><span className="m-1">Tech</span></h5>
          </Link>
          <Link href='/#Projects'>
            <h5 className=" flex flex-row flex-nowrap justify-start items-center  cursor-pointer py-5 text-sm" ><GrProjects /><span className="m-1">Projects</span></h5>
          </Link>
          <Link href='/contact'>
            <h5 className=" flex flex-row flex-nowrap justify-start items-center  cursor-pointer py-5 text-sm" ><AiOutlineContacts /><span className="m-1">Contact</span></h5>
          </Link>
          <SideNavIcons />
      </div>
    </div>
  )
}

export default Navbar;