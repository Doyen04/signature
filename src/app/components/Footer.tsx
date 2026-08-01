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
      style={{
        background: "var(--color-bg-dark)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        paddingTop: 40,
      }}
      aria-label="Site footer"
    >
      <div className="container" style={{ padding: "56px 40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: 48,
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "var(--color-brand-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary)",
                  flexShrink: 0,
                }}
              >
                <CookingPot size={24} weight="fill" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  Venant
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-gold)",
                    lineHeight: 1,
                  }}
                >
                  Cutlery
                </div>
              </div>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                marginBottom: 20,
                maxWidth: 260,
              }}
            >
              Serving authentic Nigerian cuisine with passion. Our Signature
              Ofada Rice is a rich, spicy, unforgettable experience made just
              for you.
            </p>

            {/* Location */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <MapPin size={18} weight="fill" style={{ color: "var(--color-brand-gold)", marginTop: 2 }} />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 2,
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 600,
                  }}
                >
                  Ado Ekiti, Ekiti State
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <WhatsappLogo size={18} weight="fill" style={{ color: "#25D366", marginTop: 2 }} />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 2,
                  }}
                >
                  WhatsApp
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "#25D366",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
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
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 20,
                }}
              >
                {col.heading}
              </h3>
              <nav aria-label={col.heading}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          color: "rgba(255,255,255,0.65)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLElement).style.color = "var(--color-brand-gold)")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)")
                        }
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
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 20,
              }}
            >
              Order Now
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              Plates are limited. Pre-order yours today!
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-preorder-btn"
              className="btn-whatsapp"
              style={{ fontSize: 14, padding: "12px 20px", display: "inline-flex", gap: 6 }}
            >
              <WhatsappLogo size={18} weight="fill" /> Pre-Order Now
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: 48,
            paddingTop: 24,
            paddingBottom: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            © {year} Venant Cutlery. All rights reserved. · Ado Ekiti, Ekiti State, Nigeria.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span>Designed &amp; Built by</span>
            <a
              href="https://github.com/doyen04"
              target="_blank"
              rel="noopener noreferrer"
              id="built-by-credit"
              style={{
                color: "var(--color-brand-gold)",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.opacity = "0.75")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.opacity = "1")
              }
            >
              @doyen04
            </a>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <a
              href="tel:09138951158"
              id="built-by-phone"
              style={{
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-brand-gold)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.35)")
              }
            >
              0913 895 1158
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  );
}
