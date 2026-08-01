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

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isVisible && isLoaded) {
            video
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
            return;
        }

        video.pause();
    }, [isVisible, isLoaded]);

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
            className="bg-(--color-primary) h-screen w-full relative overflow-hidden -mt-px flex items-center"
        >
            {/* Decorative ring 1 */}
            <div className="animate-spin-slow absolute -top-15 -right-15 w-55 h-55 rounded-full border-2 border-dashed border-white/6 pointer-events-none z-0" />

            {/* Decorative ring 2 */}
            <div className="animate-spin-slow [animation-direction:reverse] absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-2 border-dashed border-[rgba(247,216,0,0.12)] pointer-events-none z-0" />

            <div className="absolute -top-12 inset-x-0 h-12 bg-(--color-primary) pointer-events-none z-1" />

            <div className="container relative z-1">
                <div className="grid gap-10 md:gap-16 lg:gap-20 md:grid-cols-1 lg:grid-cols-[minmax(350px,1fr)_minmax(500px,1.2fr)] lg:items-start">
                    <div className="reveal lg:max-w-105 lg:pr-10 w-full flex flex-col justify-center h-full gap-8">
                        <h2
                            className="font-display font-black text-[clamp(40px,5.6vw,74px)] text-white leading-[0.95] uppercase tracking-[-0.03em] max-w-90 m-0"
                        >
                            <span className="block">THE</span>
                            <span className="block text-(--color-brand-gold) italic">
                                Experience
                            </span>
                        </h2>

                        <p
                            className="font-body text-[16px] text-white/68 max-w-90 leading-[1.8] m-0"
                        >
                            Watch how we craft every plate, from the steaming Ofada Rice to
                            the rich Ayamase stew loaded with insides of meat.
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-3 max-w-90 border-white/10 pt-6">
                            <p className="px-4.5 py-2 badge-amber rounded-full bg-white/10 font-body text-[11px] text-white/80 m-0">
                                From the stove to the plate
                            </p>
                        </div>
                    </div>

                    <div className="reveal-right h-full lg:justify-self-end lg:w-full lg:max-w-160">
                        <div className="relative h-full min-h-105 rounded-4xl bg-[rgba(255,255,255,0.04)] p-3 border border-white/8 shadow-[0_24px_72px_rgba(0,0,0,0.45)]">

                            <div className="relative h-full min-h-105 overflow-hidden rounded-3xl bg-black">
                                <div className="absolute inset-0 rounded-3xl pointer-events-none z-2 shadow-[inset_0_0_0_1px_rgba(247,216,0,0.25)]" />

                                {isVisible && (
                                    <video
                                        ref={videoRef}
                                        playsInline
                                        muted
                                        autoPlay
                                        loop
                                        preload="metadata"
                                        onCanPlay={() => setIsLoaded(true)}
                                        onPause={() => setIsPlaying(false)}
                                        onEnded={() => setIsPlaying(false)}
                                        className="absolute inset-0 w-full h-full object-cover block rounded-3xl"
                                    >
                                        <source src="/demonstration.mp4" type="video/mp4" />
                                        Your browser does not support HTML5 video.
                                    </video>
                                )}

                                {(!isVisible || !isLoaded) && (
                                    <div className="absolute inset-0 bg-linear-to-br from-[#1c1c1c] via-[#111] to-[#1c1c1c] flex items-center justify-center z-1">
                                        <div className="animate-vspin w-14 h-14 rounded-full border-[3px] border-[rgba(247,216,0,0.25)] border-t-(--color-brand-gold)" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}