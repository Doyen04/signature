"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CookingPot, ShoppingBagOpen } from "@phosphor-icons/react";

const WA_LINK =
  "https://wa.me/2349131166934?text=Hi%20Venant%20Cutlery!%20I'd%20like%20to%20pre-order%20the%20Signature%20Ofada%20Rice.%20%F0%9F%8D%9A";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "How it Works", href: "#how-it-works" },
  ];

  return (
    <header
      className={`sticky top-0 z-[var(--z-header)] bg-(--color-primary) text-(--color-text-inverse) transition-[border-color] duration-300 ${scrolled ? "border-b border-white/10" : "border-b border-transparent"}`}
      aria-label="Main navigation"
    >
      <div
        className="container flex items-center justify-between py-[18px]"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-[10px] no-underline text-inherit"
          aria-label="Venant Cutlery home"
        >
          <div
            className="w-10 h-10 rounded-full bg-(--color-brand-gold) flex items-center justify-center text-(--color-primary) flex-shrink-0"
          >
            <CookingPot size={22} weight="fill" />
          </div>
          <div>
            <div
              className="font-display font-bold text-[18px] leading-none text-white tracking-[-0.01em]"
            >
              Venant
            </div>
            <div
              className="font-body text-[11px] tracking-[0.18em] uppercase text-(--color-brand-gold) leading-none"
            >
              Cutlery
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Site links"
          className="desktop-nav hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white font-body text-[14px] font-medium p-[8px_14px] rounded-[var(--radius-sm)] transition-colors duration-200 no-underline hover:bg-(--color-primary-hover)"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary desktop-cta hidden md:inline-flex bg-(--color-brand-gold) border-(--color-brand-gold) text-(--color-primary) font-bold text-[14px] p-[10px_20px]"
        >
          <ShoppingBagOpen size={18} weight="bold" /> Pre-Order Now
        </a>

        {/* Hamburger */}
        <button
          id="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="hamburger-btn flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 text-white"
        >
          <span
            className={`block w-6 h-[2px] bg-white rounded-[2px] transition-[transform,opacity] duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-white rounded-[2px] transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block w-6 h-[2px] bg-white rounded-[2px] transition-[transform,opacity] duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`${menuOpen ? "flex" : "hidden"} flex-col p-[16px_24px_24px] border-t border-white/10 gap-1 bg-(--color-primary)`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white font-body text-[15px] font-medium p-[12px_16px] rounded-[var(--radius-sm)] no-underline transition-colors duration-200 hover:bg-white/10"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-2 bg-(--color-brand-gold) border-(--color-brand-gold) text-(--color-primary) font-bold justify-center"
        >
          <ShoppingBagOpen size={18} weight="bold" /> Pre-Order Now
        </a>
      </div>
    </header>
  );
}
