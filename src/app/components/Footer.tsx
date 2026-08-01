"use client";

import Link from "next/link";
import { CookingPot, MapPin, WhatsappLogo } from "@phosphor-icons/react";

const WA_LINK =
  "https://wa.me/2349131166934?text=Hi%20Venant%20Cutlery!%20I'd%20like%20to%20pre-order%20the%20Signature%20Ofada%20Rice.%20%F0%9F%8D%9A";

const footerLinks = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Menu", href: "#menu" },
      { label: "About Us", href: "#about" },
      { label: "How it Works", href: "#how-it-works" },
    ],
  },
  {
    heading: "Our Dish",
    links: [
      { label: "Signature Ofada Rice", href: "#menu" },
      { label: "Add-on: Plantain", href: "#menu" },
      { label: "Add-on: Egg", href: "#menu" },
      { label: "Add-on: Fish & Ponmo", href: "#menu" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-(--color-bg-dark) text-white relative overflow-hidden pt-10"
      aria-label="Site footer"
    >
      <div className="container pt-14">
        <div
          className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <div>
            <div
              className="flex items-center gap-2.5 mb-4"
            >
              <div
                className="w-11 h-11 rounded-full bg-(--color-brand-gold) flex items-center justify-center text-(--color-primary) flex-shrink-0"
              >
                <CookingPot size={24} weight="fill" />
              </div>
              <div>
                <div
                  className="font-display font-bold text-[20px] text-white leading-none"
                >
                  Venant
                </div>
                <div
                  className="font-body text-[11px] tracking-[0.2em] uppercase text-(--color-brand-gold) leading-none"
                >
                  Cutlery
                </div>
              </div>
            </div>

            <p
              className="font-body text-[14px] text-white/60 leading-[1.8] mb-5 max-w-[260px]"
            >
              Serving authentic Nigerian cuisine with passion. Our Signature
              Ofada Rice is a rich, spicy, unforgettable experience made just
              for you.
            </p>

            {/* Location */}
            <div
              className="flex items-start gap-2 mb-3"
            >
              <MapPin size={18} weight="fill" className="text-(--color-brand-gold) mt-[2px]" />
              <div>
                <p
                  className="font-body text-[12px] text-white/40 uppercase tracking-[0.08em] mb-[2px]"
                >
                  Location
                </p>
                <p
                  className="font-body text-[14px] text-white/80 font-semibold"
                >
                  Ado Ekiti, Ekiti State
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-2">
              <WhatsappLogo size={18} weight="fill" className="text-[#25D366] mt-[2px]" />
              <div>
                <p
                  className="font-body text-[12px] text-white/40 uppercase tracking-[0.08em] mb-[2px]"
                >
                  WhatsApp
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[14px] text-[#25D366] font-bold no-underline"
                >
                  +234 913 116 6934
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3
                className="font-body text-[12px] font-bold uppercase tracking-[0.12em] text-white/40 mb-5"
              >
                {col.heading}
              </h3>
              <nav aria-label={col.heading}>
                <ul className="list-none flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-body text-[14px] text-white/65 no-underline transition-colors duration-200 hover:text-(--color-brand-gold)"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}

          {/* Pre-order Column */}
          <div>
            <h3
              className="font-body text-[12px] font-bold uppercase tracking-[0.12em] text-white/40 mb-5"
            >
              Order Now
            </h3>
            <p
              className="font-body text-[13px] text-white/55 leading-[1.7] mb-4"
            >
              Plates are limited. Pre-order yours today!
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-preorder-btn"
              className="btn-whatsapp text-[14px] p-[12px_20px] inline-flex gap-[6px]"
            >
              <WhatsappLogo size={18} weight="fill" /> Pre-Order Now
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          className="border-t border-white/8 mt-12 pt-6 pb-6 flex justify-between items-center flex-wrap gap-3"
        >
          <p
            className="font-body text-[13px] text-white/35"
          >
            © {year} Venant Cutlery. All rights reserved. · Ado Ekiti, Ekiti State, Nigeria.
          </p>
          <p
            className="font-body text-[12px] text-white/25 flex items-center gap-[6px]"
          >
            <span>Designed &amp; Built by</span>
            <a
              href="https://github.com/doyen04"
              target="_blank"
              rel="noopener noreferrer"
              id="built-by-credit"
              className="text-(--color-brand-gold) font-bold no-underline tracking-[0.04em] transition-opacity duration-200 hover:opacity-75"
            >
              @doyen04
            </a>
            <span className="text-white/15">·</span>
            <a
              href="tel:09138951158"
              id="built-by-phone"
              className="text-white/35 no-underline transition-colors duration-200 hover:text-(--color-brand-gold)"
            >
              0913 895 1158
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
