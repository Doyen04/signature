"use client";

import { useEffect, useRef } from "react";
import { MapPin, User } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Adaeze O.",
    location: "Ado Ekiti",
    rating: 5,
    text: "This is the best Ofada Rice I've had in Ekiti! The stew is rich, spicy and packed with assorted meat. Pre-ordering was super easy via WhatsApp.",
  },
  {
    name: "Tunde B.",
    location: "Ado Ekiti",
    rating: 5,
    text: "Venant Cutlery doesn't play with flavour. The Ponmo was soft and the Ayamase stew was on another level. Worth every naira. Worth the wait indeed!",
  },
  {
    name: "Funmi A.",
    location: "Ekiti State",
    rating: 5,
    text: "I added Egg and Fish as add-ons and wow — the combination was heavenly. Clean presentation, hot food, and amazing taste. Will definitely be pre-ordering weekly!",
  },
  {
    name: "Chidi M.",
    location: "Ado Ekiti",
    rating: 5,
    text: "The plantain was perfectly fried and the rice had that authentic ofada aroma. This is home cooking at its finest. Highly recommend!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="text-(--color-brand-gold) text-base"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el) => el.classList.add("revealed"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="bg-(--color-primary) relative overflow-hidden"
      aria-label="Customer testimonials"
    >
      <div className="container section relative z-1">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2
            className="font-display font-black text-[clamp(48px,9vw,104px)] text-white leading-[0.95] uppercase tracking-[-0.02em]"
          >
            <span className="block">PEOPLE</span>
            <span className="block text-(--color-brand-gold) italic">
              Love
            </span>
            <span className="block">OUR FOOD</span>
          </h2>
        </div>

        {/* Grid — flat, no shadow */}
        <div
          className="testimonials-grid grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${(i + 1) * 100} bg-white/5 backdrop-blur-md border border-white/8 rounded-lg p-8 transition-[transform,background] duration-250 cursor-default hover:-translate-y-1.5! hover:bg-white/8`}
            >
              <div
                className="flex items-center gap-3.5 mb-4"
              >
                <div
                  className="w-12 h-12 rounded-full bg-[rgba(244,167,0,0.15)] flex items-center justify-center text-(--color-brand-gold) shrink-0 border-2 border-[rgba(244,167,0,0.3)]"
                >
                  <User size={24} weight="fill" />
                </div>
                <div>
                  <p
                    className="font-body font-bold text-base text-white"
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-body text-xs text-white/50 flex items-center gap-1"
                  >
                    <MapPin size={14} weight="fill" /> {t.location}
                  </p>
                </div>
                <div className="ml-auto">
                  <StarRating count={t.rating} />
                </div>
              </div>

              <p
                className="font-body text-[15px] text-white/80 leading-[1.7] italic"
              >
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute -bottom-px left-0 right-0 leading-0 z-2">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-20">
          <path d="M0,0 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg-lime)" />
        </svg>
      </div>
    </section>
  );
}
