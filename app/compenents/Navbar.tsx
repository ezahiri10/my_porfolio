"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navItems = [
  { id: 1, title: "About", href: "/about" },
  { id: 2, title: "Projects", href: "/projects" },
  { id: 3, title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-md">
      {/* -------- TOP BAR -------- */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-white">
          Logo
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-white text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="hover:text-amber-400 transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? (
            <XMarkIcon className="h-9 w-9" />
          ) : (
            <Bars3Icon className="h-9 w-9" />
          )}
        </button>
      </div>

      {/* -------- MOBILE MENU -------- */}
      <div
        className={`
          md:hidden bg-black/90 backdrop-blur-sm text-white overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col py-4 px-6 space-y-4 text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 hover:text-amber-400 transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
