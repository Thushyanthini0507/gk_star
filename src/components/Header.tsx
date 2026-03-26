"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container navbar">
        <Link href="/" className="logo">
          GK Star
          <span>Multi Services</span>
        </Link>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/join">Join With Us</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
