"use client";

import { useDeviceType } from "@/hooks/useDeviceType";
import { HeaderPropTypes } from "@/types";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { TfiMenu } from "react-icons/tfi";

export default function Header(props: HeaderPropTypes) {
  const targetRef = useRef(null);
  const pathname = usePathname();
  const deviceType = useDeviceType();
  const isDevicePC = deviceType === "pc";

  const [showHeader, setShowHeader] = useState(!isDevicePC);

  console.log(deviceType);

  const renderNavComponent = useMemo(
    () =>
      props.navItems
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((navItem, idx) => (
          <Link
            className={`text-gray-400 ${
              pathname === navItem.href && "text-gray-900"
            } hover:text-gray-900 hover:bg-gray-50 rounded-lg p-2 pr-6`}
            key={idx}
            href={navItem.href}
          >
            {navItem.label}
          </Link>
        )),
    [props.navItems, pathname]
  );

  const { scrollY } = useScroll({});

  useEffect(() => {
    if (!isDevicePC) {
      setShowHeader(true);
    }
  }, [isDevicePC]);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (isDevicePC) {
      if (latest > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    }
  });

  const headerVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, x: -100 }}
        variants={headerVariants}
        animate={showHeader ? "visible" : "hidden"}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.6,
          staggerChildren: 0.05,
        }}
        whileHover={headerVariants.visible}
        className="fixed z-10 w-[100%] bg-white border-b mb-3"
      >
        <div className="flex sm:w-[80vw] sm:mt-10 sm:mb-0 sm:flex-col sm:items-start justify-between items-center flex-row w-[90vw] my-7 mx-auto">
          <h1 className="text-3xl font-bold mb-3 w-fit">ben.dev</h1>
          <nav className="hidden pb-3 sm:flex">{renderNavComponent}</nav>
          <button className="sm:hidden border py-2 px-4 rounded-md w-fit ">
            <TfiMenu color="#0f0f0f" size={25} />
          </button>
        </div>
      </motion.header>
      <div ref={targetRef} className="absolute top-[100%]" />
    </>
  );
}
