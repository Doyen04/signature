"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
      className="bg-[var(--color-primary)] py-24 pb-20 relative overflow-hidden"
    >
      {/* Decorative ring 1 */}
      <div className="animate-spin-slow absolute -top-[60px] -right-[60px] w-[220px] h-[220px] rounded-full border-2 border-dashed border-white/[0.06] pointer-events-none z-0" />

      {/* Decorative ring 2 */}
      <div className="animate-spin-slow [animation-direction:reverse] absolute -bottom-[40px] -left-[40px] w-[160px] h-[160px] rounded-full border-2 border-dashed border-[rgba(247,216,0,0.12)] pointer-events-none z-0" />

      <div className="container relative z-[1]">

        {/* Heading block */}
        <div className="text-center mb-12">
          <p className="font-[var(--font-body)] text-xs font-bold tracking-[0.18em] uppercase text-[var(--color-brand-gold)] mb-3">
            See It in Action
          </p>
          <h2 className="font-[var(--font-display)] font-black text-[clamp(32px,5vw,56px)] text-white leading-[1.05] tracking-[-0.02em] uppercase">
            The{" "}
            <span className="text-[var(--color-brand-gold)] italic">
              Experience
            </span>
          </h2>
          <p className="font-[var(--font-body)] text-[clamp(14px,1.5vw,16px)] text-white/55 max-w-[480px] mx-auto mt-4 leading-[1.7]">
            Watch how we craft every plate - from the steaming Ofada Rice to
            the rich Ayamase stew, loaded with insides of meat.
          </p>
        </div>

        {/* Video player */}
        <div className="max-w-[860px] mx-auto rounded-3xl overflow-hidden relative shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)] bg-black aspect-video">

          {/* Gold inset border overlay */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none z-[2] shadow-[inset_0_0_0_1px_rgba(247,216,0,0.25)]" />

          {/* Video — injected only once section is visible */}
          {isVisible && (
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              onCanPlay={() => setIsLoaded(true)}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover block rounded-[22px]"
            >
              <source src="/demonstration.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}

          {/* Loading skeleton */}
          {(!isVisible || !isLoaded) && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] via-[#111] to-[#1c1c1c] flex items-center justify-center z-[1]">
              <div className="animate-vspin w-14 h-14 rounded-full border-[3px] border-[rgba(247,216,0,0.25)] border-t-[var(--color-brand-gold)]" />
            </div>
          )}

          {/* Play / Pause overlay button */}
          {isLoaded && (
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              id="video-play-btn"
              className={[
                "absolute inset-0 flex items-center justify-center",
                "bg-transparent border-none cursor-pointer z-[3]",
                "transition-opacity duration-300",
                isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100",
              ].join(" ")}
            >
              <div className="play-btn-circle w-[72px] h-[72px] rounded-full bg-[var(--color-brand-gold)] flex items-center justify-center shadow-[0_8px_32px_rgba(247,216,0,0.4)] transition-[transform,box-shadow] duration-200">
                {isPlaying ? (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--color-primary)">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--color-primary)" className="ml-1">
                    <path d="M6 4l14 8-14 8V4z" />
                  </svg>
                )}
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}