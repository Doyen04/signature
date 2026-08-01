"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Only load video when section enters viewport (lazy load optimisation)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="video"
      aria-label="Demonstration video"
      style={{
        background: "var(--color-primary)",
        padding: "96px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative rings */}
      <div
        className="animate-spin-slow"
        style={{
          position: "absolute", top: -60, right: -60, width: 220, height: 220,
          borderRadius: "50%", border: "2px dashed rgba(255,255,255,0.06)",
          pointerEvents: "none", zIndex: 0,
        }}
      />
      <div
        className="animate-spin-slow"
        style={{
          position: "absolute", bottom: -40, left: -40, width: 160, height: 160,
          borderRadius: "50%", border: "2px dashed rgba(247,216,0,0.12)",
          pointerEvents: "none", zIndex: 0, animationDirection: "reverse",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--color-brand-gold)", marginBottom: 12,
          }}>
            See It in Action
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 56px)", color: "#fff",
            lineHeight: 1.05, letterSpacing: "-0.02em", textTransform: "uppercase",
          }}>
            The{" "}
            <span style={{ color: "var(--color-brand-gold)", fontStyle: "italic" }}>
              Experience
            </span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(14px, 1.5vw, 16px)",
            color: "rgba(255,255,255,0.55)", marginTop: 16,
            maxWidth: 480, margin: "16px auto 0", lineHeight: 1.7,
          }}>
            Watch how we craft every plate — from the steaming Ofada Rice to the
            rich Ayamase stew, loaded with insides of meat.
          </p>
        </div>

        {/* Video player */}
        <div style={{
          maxWidth: 860, margin: "0 auto", borderRadius: 24, overflow: "hidden",
          position: "relative",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
          background: "#000", aspectRatio: "16/9",
        }}>
          {/* Gold shimmer border overlay */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 24, padding: 2,
            background: "linear-gradient(135deg, rgba(247,216,0,0.45) 0%, transparent 50%, rgba(247,216,0,0.25) 100%)",
            zIndex: 2, pointerEvents: "none",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          } as React.CSSProperties} />

          {/* Video — src only set once section is visible */}
          {isVisible && (
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              onCanPlay={() => setIsLoaded(true)}
              onEnded={() => setIsPlaying(false)}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 22 }}
            >
              <source src="/demonstration.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}

          {/* Skeleton / spinner shown before video is ready */}
          {(!isVisible || !isLoaded) && (
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, #1c1c1c 0%, #111 50%, #1c1c1c 100%)",
              display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1,
            }}>
              <div style={{
                width: 56, height: 56,
                border: "3px solid rgba(247,216,0,0.25)",
                borderTopColor: "var(--color-brand-gold)",
                borderRadius: "50%",
                animation: "vspin 0.9s linear infinite",
              }} />
            </div>
          )}

          {/* Play / Pause overlay */}
          {isLoaded && (
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              id="video-play-btn"
              style={{
                position: "absolute", inset: 0, display: "flex",
                alignItems: "center", justifyContent: "center",
                background: "transparent", border: "none", cursor: "pointer",
                zIndex: 3, opacity: isPlaying ? 0 : 1, transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = isPlaying ? "0" : "1")
              }
            >
              <div
                className="play-btn-circle"
                style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: "var(--color-brand-gold)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(247,216,0,0.4)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {isPlaying ? (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--color-primary)">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--color-primary)" style={{ marginLeft: 4 }}>
                    <path d="M6 4l14 8-14 8V4z" />
                  </svg>
                )}
              </div>
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes vspin { to { transform: rotate(360deg); } }
        .play-btn-circle:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 12px 40px rgba(247,216,0,0.55) !important;
        }
        @media (max-width: 600px) {
          #video { padding: 64px 0 60px !important; }
        }
      `}</style>
    </section>
  );
}
