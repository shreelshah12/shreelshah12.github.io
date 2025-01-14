// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import {FaMedium} from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hi, <br />
            I'm {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {`!  `} <br /> I'm a 
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            at <span className=" text-pink-500">Databricks</span>.
          </h1>
          
          <div className="my-12 flex items-center gap-5">
          <Link
              href={"mailto:shreelshah12@gmail.com"}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <MdOutlineMailOutline size={30} />
            </Link>
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.medium}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsMedium size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.instagram}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaInstagram size={30} />
            </Link>
            
          
          </div>

          <div className="flex items-center gap-3">
            

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Download Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">About_Me</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Shreel Shah</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">currentLocation:</span>
                <span className="text-orange-400">NYC</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">interests:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Software Engineering</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Data Engineering</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AI/ML</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Analytics</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Cloud</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">DevOps</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Java</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">C</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Node.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Next.js</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">SQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">PostgreSQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Spark</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Scala</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              
              
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">currentRole:</span>
                <span className="text-orange-400">Cloud and Data Engineer</span>
              </div>
              
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;