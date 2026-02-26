import React, { useEffect, useMemo, useState } from "react";

export default function UnderstandingDAPSection() {
    const items = useMemo(
        () => [
            {
                label: "Zip Guides",
                description: "Interactive, step-by-step walkthroughs inside your applications.",
                imageUrl:
                    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/69a0339408c2be5ce887c227_Player%20Workday.png",
            },
            {
                label: "Content Links",
                description: "Instant access to SOPs and knowledge articles without switching tabs.",
                imageUrl:
                    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/69a034ea760b881fceb3e3e6_Content%20Link.png",
            },
            {
                label: "Tooltips & Pulses",
                description: "Context-aware highlights that draw attention to important actions.",
                imageUrl:
                    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/69a0356e8f961e0147694eb4_Tooltip%20%26%20Pulse.png",
            },
            {
                label: "Guide Auto Play",
                description: "Automatically trigger guidance based on user role or workflow.",
                imageUrl:
                    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/69a0356ef59cd401b6721183_Guide%20Autoplay.png",
            },
        ],
        []
    );

    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // ✅ Auto-rotate (pauses on hover)
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setIsTransitioning(true);

            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % items.length);
                setIsTransitioning(false);
            }, 220);
        }, 4500);

        return () => clearInterval(interval);
    }, [items.length, isPaused]);

    const onSelect = (idx) => {
        if (idx === activeIndex) return;

        setIsTransitioning(true);
        setTimeout(() => {
            setActiveIndex(idx);
            setIsTransitioning(false);
        }, 220);
    };

    const activeItem = items[activeIndex];

    return (
        <section
            id="dap"
            className="relative py-16 md:py-24 bg-gradient-to-b from-[#7B5CFF] via-[#6A54FF] to-[#5A4BFF]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* ✅ IMPORTANT: no inner scroll anywhere here */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 lg:items-start">
                    {/* ✅ LEFT: normal content (page scroll only) */}
                    <div className="min-w-0">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                            Understanding Digital Adoption Platforms (DAP)
                        </h2>

                        <p className="mt-4 text-base md:text-[17px] text-white/85 leading-7 max-w-xl">
                            Ziplyne provides real-time, in-app support that helps Johns Hopkins users
                            complete tasks correctly — without leaving the application.
                        </p>

                        {/* Cards */}
                        <div className="mt-10 grid grid-cols-1 gap-6">
                            {items.map((item, idx) => {
                                const isActive = idx === activeIndex;

                                return (
                                    <button
                                        key={item.label}
                                        type="button"
                                        onClick={() => onSelect(idx)}
                                        className={[
                                            "text-left w-full flex items-start gap-5 rounded-2xl border px-7 py-6 shadow-xl backdrop-blur-md transition",
                                            "bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30",
                                            isActive ? "ring-2 ring-white/25 border-white/50 bg-white/15" : "",
                                        ].join(" ")}
                                        aria-pressed={isActive}
                                    >
                                        <CheckIcon active={isActive} />

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-3">
                                                <span className="text-base md:text-lg font-semibold text-white">
                                                    {item.label}
                                                </span>

                                                {/* dot indicator */}
                                                <span
                                                    className={[
                                                        "h-2.5 w-2.5 rounded-full transition",
                                                        isActive ? "bg-white" : "bg-white/30",
                                                    ].join(" ")}
                                                />
                                            </div>

                                            {/* description on next line */}
                                            <p className="mt-2 text-sm text-white/75 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* ✅ RIGHT: sticky image (no scrolling inside) */}
                    <div className="min-w-0 lg:sticky lg:top-24">
                        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-2xl p-6 md:p-7">
                            {/* mini header */}
                            <div className="flex items-center justify-between gap-3">
                                <div className="text-[17px] md:text-lg font-semibold text-white/90">
                                    {activeItem.label}
                                </div>

                                {/* progress dots */}
                                <div className="flex items-center gap-2">
                                    {items.map((_, i) => (
                                        <span
                                            key={i}
                                            className={[
                                                "h-2 w-2 rounded-full transition",
                                                i === activeIndex ? "bg-white" : "bg-white/25",
                                            ].join(" ")}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* image */}
                            <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 bg-black/20">
                                <img
                                    src={activeItem.imageUrl}
                                    alt={activeItem.label}
                                    className={[
                                        "w-full aspect-video object-cover",
                                        "transition-all duration-500 ease-in-out",
                                        isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100",
                                    ].join(" ")}
                                    loading="lazy"
                                />
                            </div>

                            {/* caption */}
                            <p className="mt-4 text-sm md:text-[15px] text-white/75 leading-relaxed">
                                {activeItem.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CheckIcon({ active }) {
    return (
        <span
            className={[
                "inline-flex h-9 w-9 items-center justify-center rounded-xl border transition",
                active ? "bg-white/15 border-white/30" : "bg-white/10 border-white/20",
            ].join(" ")}
        >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                    d="M20 6L9 17l-5-5"
                    stroke="white"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    );
}