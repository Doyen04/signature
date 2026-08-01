"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CookingPot, ShoppingCart } from "@phosphor-icons/react";

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
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-header)",
        backgroundColor: "var(--color-primary)",
        color: "var(--color-text-inverse)",
        transition: "border-color 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
      }}
      aria-label="Main navigation"
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 40px",
        }}
      >
        {/* Logo */}
        <Link
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "inherit",
          }}
          aria-label="Venant Cutlery home"
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "var(--color-brand-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-primary)",
              flexShrink: 0,
            }}
          >
            <CookingPot size={22} weight="fill" />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 18,
                lineHeight: 1,
                color: "#fff",
                letterSpacing: "-0.01em",
              }}
            >
              Venant
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-brand-gold)",
                lineHeight: 1,
              }}
            >
              Cutlery
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Site links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
                padding: "8px 14px",
                borderRadius: "var(--radius-sm)",
                transition: "background-color 0.2s ease, color 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor =
                  "var(--color-primary-hover)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
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
          className="btn-primary desktop-cta"
          style={{
            backgroundColor: "var(--color-brand-gold)",
            borderColor: "var(--color-brand-gold)",
            color: "var(--color-primary)",
            fontWeight: 700,
            fontSize: 14,
            padding: "10px 20px",
          }}
        >
          <ShoppingCart size={18} weight="bold" /> Pre-Order Now
        </a>

        {/* Hamburger */}
        <button
          id="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="hamburger-btn"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "#fff",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "#fff",
              borderRadius: 2,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen
                ? "translateY(7px) rotate(45deg)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "#fff",
              borderRadius: 2,
              transition: "opacity 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "#fff",
              borderRadius: 2,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen
                ? "translateY(-7px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          padding: "16px 24px 24px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          gap: 4,
          backgroundColor: "var(--color-primary)",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 500,
              padding: "12px 16px",
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor =
                "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{
            marginTop: 8,
            backgroundColor: "var(--color-brand-gold)",
            borderColor: "var(--color-brand-gold)",
            color: "var(--color-primary)",
            fontWeight: 700,
            justifyContent: "center",
          }}
        >
          <ShoppingCart size={18} weight="bold" /> Pre-Order Now
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .desktop-cta  { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
