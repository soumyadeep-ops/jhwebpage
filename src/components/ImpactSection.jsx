import { useEffect, useMemo, useRef, useState } from "react";

function useCountUpOnView({ target, isInView, durationMs = 1100 }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let rafId;
        const start = performance.now();
        const from = 0;
        const to = Number(target);

        const tick = (now) => {
            const t = Math.min(1, (now - start) / durationMs);
            // ease-out
            const eased = 1 - Math.pow(1 - t, 3);
            const next = Math.round(from + (to - from) * eased);
            setValue(next);

            if (t < 1) rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, [isInView, target, durationMs]);

    return value;
}

export default function ImpactSection() {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true); // trigger once
            },
            { threshold: 0.4 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const cards = useMemo(
        () => [
            { target: 70, suffix: "%", label: "Faster onboarding & adoption" },
            { target: 50, suffix: "%", label: "Reduction in support tickets" },
            { target: 3, suffix: "×", label: "Faster testing & release cycles" },
            {
                target: 100,
                suffix: "%",
                label: "Continuous improvement via analytics",
            },
        ],
        []
    );

    return (
        <section
            id="impact"
            ref={sectionRef}
            className="py-24 bg-[#0b0b0b] text-white"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Measurable Impact Across Enterprises
                </h2>
                <p className="text-gray-400 mb-16">
                    Empowering organizations to adopt faster, automate smarter, and
                    transform continuously.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card) => (
                        <ImpactCard
                            key={card.label}
                            target={card.target}
                            suffix={card.suffix}
                            label={card.label}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ImpactCard({ target, suffix, label, isInView }) {
    const value = useCountUpOnView({ target, isInView });

    return (
        <div className="bg-[#1a1a1a] rounded-2xl p-10 transition-all hover:-translate-y-1 hover:bg-[#202020]">
            <h3 className="text-5xl font-bold text-white mb-2 tabular-nums">
                {value}
                {suffix}
            </h3>
            <p className="text-gray-400">{label}</p>
        </div>
    );
}
