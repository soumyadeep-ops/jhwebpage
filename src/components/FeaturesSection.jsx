import { useEffect, useRef, useState } from "react";

export default function ImpactSection() {
    const sectionRef = useRef(null);
    const [started, setStarted] = useState(false);

    const items = [
        { value: 70, suffix: "%", label: "Faster onboarding & adoption" },
        { value: 50, suffix: "%", label: "Reduction in support tickets" },
        { value: 3, suffix: "×", label: "Faster testing & release cycles" },
        { value: 100, suffix: "%", label: "Continuous improvement via analytics" },
    ];

    const [counts, setCounts] = useState(items.map(() => 0));

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) setStarted(true);
            },
            { threshold: 0.4 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        const duration = 900; // ms
        const fps = 60;
        const totalFrames = Math.round((duration / 1000) * fps);

        let frame = 0;
        const timer = setInterval(() => {
            frame += 1;
            const progress = Math.min(frame / totalFrames, 1);

            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(items.map((it) => Math.round(it.value * eased)));

            if (progress >= 1) clearInterval(timer);
        }, 1000 / fps);

        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [started]);

    return (
        <section
            id="impact"
            ref={sectionRef}
            className="bg-[#0b0b0b] text-white py-20 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Measurable Impact Across Enterprises
                </h2>
                <p className="text-gray-400 mb-12 sm:mb-16">
                    Empowering organizations to adopt faster, automate smarter, and transform
                    continuously.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((it, idx) => (
                        <div
                            key={it.label}
                            className="bg-[#1a1a1a] rounded-2xl p-10 transition-all hover:-translate-y-1 hover:bg-[#202020]"
                        >
                            <div className="text-5xl font-bold text-white mb-2">
                                {counts[idx]}
                                {it.suffix}
                            </div>
                            <p className="text-gray-400">{it.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
