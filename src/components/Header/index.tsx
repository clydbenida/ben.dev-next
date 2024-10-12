"use client";

import { useDeviceType } from "@/hooks/useDeviceType";
import { HeaderPropTypes } from "@/types";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import HeaderLink from "./components/HeaderLink";
import MobileMenu from "./components/MobileMenu";
import AnimatedHeader from "./components/AnimatedHeader";

export default function Header(props: HeaderPropTypes) {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const renderNavComponent = useMemo(
    () =>
      props.navItems
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((navItem, idx) => (
          <HeaderLink navItem={navItem} key={idx} />
        )),
    [props.navItems] 
  );

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const handleMobileMenuClick = () => {
    setShowMobileMenu(prev => !prev)
  }

  return (
    <>
      <AnimatedHeader>
        <div className="flex sm:w-[80vw] sm:mt-10 sm:mb-0 sm:items-start justify-between items-center flex-row md:w-[760px] px-4 my-5 mx-auto">
          <h1 className="text-3xl font-bold sm:mb-3 w-fit">ben.dev</h1>
          <nav className="hidden pb-3 sm:flex">{renderNavComponent}</nav>
          <button className="sm:hidden border py-2 px-4 rounded-md w-fit" onClick={handleMobileMenuClick}>
            <TfiMenu color="#0f0f0f" size={25} />
          </button>
        </div>
        <MobileMenu show={showMobileMenu} renderNavComponent={renderNavComponent} />
      </AnimatedHeader>
    </>
  );
}
