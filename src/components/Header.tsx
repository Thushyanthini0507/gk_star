"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container navbar">
        <Link href="/" className="logo" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image
            src="/logo.png"
            alt="GK Star Private Limited Logo"
            width={65}
            height={55}
            style={{ objectFit: "contain" }}
            priority
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span style={{ color: "var(--primary-color)", fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700 }}>
              GK Star
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "#ccc", letterSpacing: "2px", textTransform: "uppercase" }}>
              Private Limited
            </span>
          </div>
        </Link>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/join-with-us">Join With Us</Link></li>
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
