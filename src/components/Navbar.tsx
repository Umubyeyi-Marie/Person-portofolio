"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-yellow-300 tracking-tight"
          >
            My Portfolio
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-300 transition-colors text-lg">Home</Link>
            <Link href="/about" className="text-white hover:text-yellow-300 transition-colors text-lg">About</Link>
            <Link href="/skills" className="text-white hover:text-yellow-300 transition-colors text-lg">Skills</Link>
            <Link href="/projects" className="text-white hover:text-yellow-300 transition-colors text-lg">Projects</Link>
            <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors text-lg">Contact</Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {/* Hamburger / Close (inline SVGs, no extra deps) */}
            {open ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              // Menu icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown (animated) */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pb-6 pt-2 flex flex-col items-center space-y-4">
          <Link href="/" className="block text-white hover:text-yellow-300 transition-colors text-lg">Home</Link>
          <Link href="/about" className="block text-white hover:text-yellow-300 transition-colors text-lg">About</Link>
          <Link href="/skills" className="block text-white hover:text-yellow-300 transition-colors text-lg">Skills</Link>
          <Link href="/projects" className="block text-white hover:text-yellow-300 transition-colors text-lg">Projects</Link>
          <Link href="/contact" className="block text-white hover:text-yellow-300 transition-colors text-lg">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
