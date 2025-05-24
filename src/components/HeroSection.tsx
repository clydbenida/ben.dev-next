"use client";

import Image from "next/image";
import Hero from "./Hero/Hero";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import useRandomCallout from "@/hooks/useRandomCallout";

function SocialLinks() {
  const iconSize = 16;
  const classCss = "bg-black p-1 md:p-2 rounded-lg";
  return (
    <>
      <Link href='https://www.linkedin.com/in/clydbenida' target="_blank" className={classCss}>
        <Linkedin size={iconSize} color="white" />
      </Link>
      <Link href='https://www.github.com/clydbenida' target="_blank" className={classCss}>
        <Github size={iconSize} color="white" />
      </Link>
      <Link href='mailto:clyd.benidz@gmail.com' target="_blank" className={classCss}>
        <Mail size={iconSize} color="white" />
      </Link>
    </>
  )
}

export default function HeroSection() {
  const randomCallout = useRandomCallout();

  return (
      <div className="hero bg-base-200 pt-24 mb-2">
        <div className="hero-content flex-col p-0 w-full">
          {/* 3d render */}
          <Hero />
          <div className="text-justify w-full">
            <h1 className="font-medium py-4 px-2 text-center backdrop-blur-md bg-gray-200 rounded-lg">
              {randomCallout}
            </h1>
            <div className="flex justify-between items-center my-5">
              <div className="sm:ml-2 sm:text-left">
                <div className="my-2">
                  <h1 className="text-xl text-left sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2">Benedict Clyd Benida</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <SocialLinks />
                  <div className="flex grow-1 ml-auto text-gray-500 text-sm">
                    <span className="mr-2">Manila</span>
                    <MapPin size={18} />
                  </div>
                </div>
              </div>
              <Image 
                src='/headshot-new-1.webp' 
                alt="Test"
                width={150} 
                height={150} 
                className="object-none object-center h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full border-2 border-gray-400"  
              />
            </div>
          </div>
        </div>
      </div>
  )
}
