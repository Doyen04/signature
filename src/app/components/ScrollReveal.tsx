"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal controller.
 * Watches all .reveal, .reveal-left, .reveal-right elements
 * and adds .revealed when they enter the viewport.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe all current elements
    const observe = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Re-observe if DOM changes (e.g., dynamic content)
    const mutationObserver = new MutationObserver(observe);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
