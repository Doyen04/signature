"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const WA_LINK_BASE =
  "https://wa.me/2349131166934?text=Hi%20Venant%20Cutlery!%20I'd%20like%20to%20pre-order%20the%20Signature%20Ofada%20Rice";

const addOns = [
  { id: "plantain", label: "Plantain", emoji: "🍌", price: 200 },
  { id: "egg",      label: "Egg",      emoji: "🥚", price: 150 },
  { id: "fish",     label: "Fish",     emoji: "🐟", price: 350 },
  { id: "ponmo",    label: "Ponmo",    emoji: "🥩", price: 250 },
];

export default function MenuSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("revealed");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggleAddon = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const total =
    3500 +
    addOns
      .filter((a) => selected.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);

  const buildWaLink = () => {
    const selectedLabels = addOns
      .filter((a) => selected.includes(a.id))
      .map((a) => a.label);
    let msg = WA_LINK_BASE;
    if (selectedLabels.length > 0) {
      msg += `%20with%20add-ons%3A%20${encodeURIComponent(selectedLabels.join(", "))}`;
    }
    msg += `.%20Total%3A%20%E2%82%A6${total.toLocaleString()}.%20%F0%9F%8D%9A`;
    return msg;
  };

  return (
    <section
      id="menu"
      ref={ref}
      className="section"
      style={{ background: "var(--color-background-light)" }}
      aria-label="Menu section"
    >
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="badge badge-pink" style={{ marginBottom: 12 }}>
            🍚 Signature Menu
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "var(--color-primary)",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            The One &amp; Only{" "}
            <span style={{ fontStyle: "italic", color: "var(--color-brand-amber)" }}>
              Ofada Rice
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "var(--color-text-muted)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Customize your plate. Select your add-ons and pre-order directly on
            WhatsApp.
          </p>
        </div>

        {/* Menu Card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
            background: "#fff",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          }}
          className="menu-grid"
        >
          {/* Image side */}
          <div className="reveal-left" style={{ position: "relative" }}>
            <Image
              src="/ofada-hero.png"
              alt="Venant Cutlery Signature Ofada Rice dish"
              width={600}
              height={600}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                minHeight: 400,
              }}
            />
            {/* Overlay label */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                background: "rgba(0,36,68,0.88)",
                backdropFilter: "blur(6px)",
                borderRadius: "var(--radius-sm)",
                padding: "8px 16px",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              🏅 House Special
            </div>
          </div>

          {/* Detail side */}
          <div
            className="reveal-right"
            style={{ padding: "40px 36px 40px 0" }}
          >
            <div style={{ marginBottom: 8 }}>
              <span
                className="badge badge-amber"
                style={{ marginBottom: 8, fontSize: 11 }}
              >
                Pre-Order Only
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 32,
                color: "var(--color-primary)",
                lineHeight: 1.2,
                marginBottom: 8,
              }}
            >
              Signature Ofada Rice
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "var(--color-text-muted)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              With Insides of Meat
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--color-text-muted)",
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              Our signature Ofada Rice is served with a thick, slow-cooked
              Ayamase (green pepper) stew loaded with assorted meat insides.
              Every bite bursts with authentic Nigerian flavour — bold, rich, and
              unforgettable.
            </p>

            {/* Price */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 8,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: 40,
                  color: "var(--color-primary)",
                }}
              >
                ₦{total.toLocaleString()}
              </span>
              {selected.length > 0 && (
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--color-text-muted)",
                    textDecoration: "line-through",
                  }}
                >
                  ₦3,500 base
                </span>
              )}
            </div>

            {/* Add-ons */}
            <div style={{ marginBottom: 28 }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                  marginBottom: 12,
                  paddingBottom: 8,
                  borderBottom: "2px solid var(--color-background-light)",
                }}
              >
                Add-On Options
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {addOns.map((addon) => {
                  const active = selected.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      id={`addon-${addon.id}`}
                      onClick={() => toggleAddon(addon.id)}
                      aria-pressed={active}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "8px 16px",
                        borderRadius: "var(--radius-full)",
                        border: `2px solid ${active ? "var(--color-primary)" : "var(--color-border-light)"}`,
                        background: active ? "var(--color-primary)" : "#fff",
                        color: active ? "#fff" : "var(--color-text-muted)",
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        transform: active ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      <span>{addon.emoji}</span>
                      <span>{addon.label}</span>
                      <span
                        style={{
                          fontSize: 11,
                          opacity: 0.7,
                        }}
                      >
                        +₦{addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              id="menu-preorder-btn"
              className="btn-whatsapp"
              style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "16px" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pre-Order Now — ₦{total.toLocaleString()}
            </a>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "var(--color-text-muted)",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Secure your plate in advance · Ado Ekiti, Ekiti State
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .menu-grid { grid-template-columns: 1fr !important; }
          .menu-grid > div:last-child { padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}
