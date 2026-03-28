"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Join With Us", href: "/join-with-us" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 md:w-16 md:h-14 overflow-hidden rounded-xl border border-white/10 group-hover:border-primary-color/50 transition-all duration-500 bg-black/20 p-2">
            <Image
              src="/logo.png"
              alt="GK Star Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-primary-color transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
              GK STAR
            </span>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 group-hover:text-neutral-300 transition-colors">
              Private Limited
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="relative text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-all group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-color transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="ml-4 px-8 py-3 bg-primary-color text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-12 h-12 flex items-center justify-center text-primary-color border border-white/10 rounded-xl hover:bg-white/5 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-700 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navLinks.map((link, i) => (
             <Link 
               key={link.name} 
               href={link.href}
               onClick={() => setIsOpen(false)}
               className="text-4xl font-black tracking-tighter text-white hover:text-primary-color transition-all transform hover:scale-110"
               style={{ transitionDelay: `${i * 100}ms` }}
             >
               {link.name}
             </Link>
          ))}
          <div className="pt-12">
             <Link 
               href="/contact" 
               className="px-12 py-5 bg-primary-color text-black text-xs font-black uppercase tracking-[0.3em] rounded-full"
               onClick={() => setIsOpen(false)}
             >
               Start Project
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
