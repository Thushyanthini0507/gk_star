"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled 
        ? "py-4 bg-white/80 backdrop-blur-md border-b border-border-subtle shadow-premium" 
        : "py-6 bg-transparent"
    )}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <div className="absolute inset-0 bg-primary-gold opacity-10 rounded-xl group-hover:scale-110 transition-transform duration-500"></div>
            <Image
              src="/logo.png"
              alt="GK Star Logo"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-primary-gold transition-colors">
              GK STAR
            </span>
            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Private Limited
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="relative text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="ml-4 px-7 py-3 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-primary-gold hover:text-foreground transition-all duration-300 shadow-premium active:scale-95"
          >
            Get Expert Help
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground rounded-full hover:bg-soft-gray transition-colors border border-border-subtle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-sm`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden flex flex-col items-center justify-center",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button 
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-foreground rounded-full border border-border-subtle"
          onClick={() => setIsOpen(false)}
        >
          <i className="fas fa-times text-lg"></i>
        </button>

        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
             <Link 
               key={link.name} 
               href={link.href}
               onClick={() => setIsOpen(false)}
               className="text-3xl font-bold tracking-tight text-foreground hover:text-primary-gold transition-all"
               style={{ transitionDelay: `${i * 50}ms` }}
             >
               {link.name}
             </Link>
          ))}
          <Link 
            href="/contact" 
            className="mt-4 px-10 py-4 bg-foreground text-background text-xs font-bold uppercase tracking-widest rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
