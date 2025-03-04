"use client";

import Image from "next/image";
import Hero from "./Hero/Hero";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [randomCallout, setRandomCallout] = useState("");

  useEffect(() => {
    const randomStrings = [
      "Talk is cheap. Show me the code. – Linus Torvalds",
      "The only way to do great work is to love what you do. – Steve Jobs",
      "This 3D model is modeled after my desk.",
      "This callout will be used as a notification in the future. 😉",
      "It’s not a bug; it’s an undocumented feature. – Anonymous Developer Wisdom"
    ]
    const rNum = Math.floor(Math.random() * 5);

    setRandomCallout(randomStrings[rNum])
  }, [])
  return (
    <div className="hero bg-base-200 mb-2">
    <div className="hero-content flex-col p-0 w-full">
      <Hero />
      <div className="text-justify w-full">
        <h1 className="font-medium py-4 text-center backdrop-blur-md bg-gray-200 rounded-lg mb-5">
          {randomCallout}
        </h1>
        <div className="flex items-center flex-col md:flex-row mb-5">
          <Image 
            src='/headshot-1.jpeg' 
            alt="Test"
            width={125} 
            height={125} 
            className="object-none object-center h-[100px] w-[100px] rounded-full border-2 mb-4 md:mb-0 border-gray-400"  
          />
          <div className="text-left sm:ml-4 sm:text-left grow flex flex-row w-full md:w-auto items-center">
            <div className="grow">
              <h1 className="text-xl sm:text-2xl font-bold">Benedict Clyd Benida</h1>
              <p className="text-sm sm:text-md mb-0">Fullstack Developer (Node.js, React.js)</p>
            </div>
            <div className="">
              <Link href='/contact' className="block bg-gray-200 py-2 px-4 rounded-lg">
                <IoIosSend size={25} />
              </Link>
            </div>
          </div>
          <div className="hidden">
            <Link href='/contact' className="block bg-gray-200 py-2 px-4 rounded-lg">
              <IoIosSend size={25} />
            </Link>
          </div>
        </div>
        {/* <p className="py-6">
          I am a motivated web developer based in the Philippines 🇵🇭.
          Currently I am working as a Jr. Fullstack developer using MERN
          Stack <strong>(MySql, Express.js, React.js, and Node.js)</strong>.
        </p> */}
      </div>
    </div>
  </div>
)
}