"use client";

import { FooterPropTypes } from "@/types";
import Link from "next/link";
import { useMemo } from "react";

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
    <footer className="p-10 bg-gray-50 flex flex-col md:flex-row mt-10">
      <aside>
        <h1 className="text-4xl font-bold">ben.dev</h1>
        <p>{/* Insert catchphrase here */}</p>
        <nav className="footer-links mb-10">
          <h6 className="footer-title">Pages</h6>
          {renderNavItems}
        </nav>
      </aside>
      <nav className="flex-1 flex flex-row h-auto items-center md:justify-end">
        <div className="form-control">
          <form>
            <h3>Subscribe to newsletter</h3>
            <div className="input input-bordered flex items-center gap-2 pr-1 bg-white">
              <input type="email" name="email" placeholder="Email" />
              <button className="text-sm font-semibold text-white bg-slate-800 p-2 my-2 rounded-lg">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </nav>
    </footer>
  );
}
