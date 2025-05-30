"use client";

import { FooterPropTypes } from "@/types";
import Link from "next/link";
import { useMemo } from "react";
import BaseContainer from "./BaseContainer";

export default function Footer({ navItems }: FooterPropTypes) {
  const renderNavItems = useMemo(
    () =>
      navItems?.map((item, idx) => (
        <Link className="link link-hover" href={item.href} key={idx}>
          {item.label}
        </Link>
      )),
    [navItems],
  );

  return (
    <footer className="bg-gray-50">
      <BaseContainer className="flex flex-col md:flex-row pt-10 mx-auto">
        <aside>
          <h1 className="text-4xl font-bold">ben.dev</h1>
          <p>{/* Insert catchphrase here */}</p>
          <nav className="footer-links mb-10">
            <h6 className="footer-title">Pages</h6>
            <div className="flex flex-row flex-wrap">
            {renderNavItems}
            </div>
          </nav>
        </aside>
        <nav className="flex-1 flex flex-row h-auto items-center  md:justify-end">
          <div className="form-control">
            <form>
              <h3 className="font-semibold">Subscribe to newsletter</h3>
              <div className="input input-bordered flex items-center justify-between bg-white px-1">
                <input className="pl-1 w-3/4" type="email" name="email" placeholder="Email" />
                <button className="text-sm font-semibold text-white bg-slate-800 p-2 my-2 rounded-lg">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </nav>
      </BaseContainer>
    </footer>
  );
}
