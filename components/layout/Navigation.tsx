"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <a className="nav-mark" href="#hero" aria-label="Gurnoor Singh home"><span>GS</span><i>01—09</i></a>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      </nav>
      <button className="menu-button" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
        <span></span><span></span>
      </button>
    </header>
  );
}
