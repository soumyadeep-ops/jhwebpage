import { useEffect, useMemo, useState } from "react";

function CopyIcon({ className = "" }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    );
}

function CheckIcon({ className = "" }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

const tabBase =
    "flex-1 select-none text-center px-4 py-3 rounded-xl border text-sm font-medium transition cursor-pointer";
const tabInactive = "border-white/15 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white";
const tabActive =
    "border-white bg-white text-black font-semibold shadow-[0_6px_22px_rgba(255,255,255,0.12)]";

export default function EmbedScriptGeneratorSection() {
    const scripts = useMemo(
        () => ({
            staging: {
                html: `<script src="https://cdn.mrsziplyneweb.hosts.jhmi.edu/scripts/snippet/JHstaging.js"></script>`,
                javascript: `var script = document.createElement('script');
script.src = 'https://cdn.mrsziplyneweb.hosts.jhmi.edu/scripts/snippet/JHstaging.js';
document.head.appendChild(script);`,
            },
            production: {
                html: `<script src="https://cdn.mrmpzipweb01.hosts.jhmi.edu/scripts/snippet/JHprod.js"></script>`,
                javascript: `var script = document.createElement('script');
script.src = 'https://cdn.mrmpzipweb01.hosts.jhmi.edu/scripts/snippet/JHprod.js';
document.head.appendChild(script);`,
            },
        }),
        []
    );

    const [env, setEnv] = useState("staging");
    const [type, setType] = useState("html");

    // animation states
    const [isGenerating, setIsGenerating] = useState(false);
    const [displayText, setDisplayText] = useState("");

    // copy/toast states
    const [copied, setCopied] = useState(false);
    const [toast, setToast] = useState({ show: false, text: "Script copied successfully!" });

    const currentScript = scripts[env][type];

    useEffect(() => {
        // “Generating” shimmer + fade
        setIsGenerating(true);
        setDisplayText("");

        const t = setTimeout(() => {
            setIsGenerating(false);
            setDisplayText(currentScript);
        }, 400);

        return () => clearTimeout(t);
    }, [currentScript]);

    async function onCopy() {
        if (copied) return;
        try {
            await navigator.clipboard.writeText(currentScript);

            setCopied(true);
            setToast({ show: true, text: "Script copied successfully!" });

            setTimeout(() => setCopied(false), 1500);
            setTimeout(() => setToast((p) => ({ ...p, show: false })), 2500);
        } catch {
            setToast({ show: true, text: "Copy failed. Try again." });
            setTimeout(() => setToast({ show: false, text: "Script copied successfully!" }), 1800);
        }
    }

    return (
        <section className="bg-[#0b0b0b] text-white py-20 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-center text-2xl md:text-[28px] font-semibold mb-10 md:mb-12">
                    Embed Script Generator
                </h2>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Left */}
                    <div className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                        <div className="mb-10">
                            <h3 className="text-sm font-medium text-white/80 mb-4">
                                Please select the Ziplyne Environment for Hopkins
                            </h3>
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setEnv("staging")}
                                    className={`${tabBase} ${env === "staging" ? tabActive : tabInactive}`}
                                >
                                    Staging
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEnv("production")}
                                    className={`${tabBase} ${env === "production" ? tabActive : tabInactive}`}
                                >
                                    Production
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-white/80 mb-4">
                                Select the type of Embed Script
                            </h3>
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setType("html")}
                                    className={`${tabBase} ${type === "html" ? tabActive : tabInactive}`}
                                >
                                    HTML
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setType("javascript")}
                                    className={`${tabBase} ${type === "javascript" ? tabActive : tabInactive}`}
                                >
                                    JavaScript
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                        <div className="flex items-center justify-between gap-3 mb-3">
                            <div className="text-sm font-medium text-white/60">Generated Script</div>

                            <button
                                type="button"
                                onClick={onCopy}
                                className={[
                                    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition",
                                    copied
                                        ? "bg-transparent border border-white/50 text-white/80 cursor-default"
                                        : "bg-white text-black hover:shadow-[0_10px_26px_rgba(255,255,255,0.12)] hover:-translate-y-[1px]",
                                ].join(" ")}
                            >
                                {copied ? <CheckIcon /> : <CopyIcon />}
                                {copied ? "Copied" : "Copy Script"}
                            </button>
                        </div>

                        <div
                            className={[
                                "relative rounded-xl border bg-white/10 shadow-[inset_0_0_10px_rgba(0,0,0,0.25)]",
                                isGenerating ? "border-[#a27eff]/40" : "border-white/15",
                            ].join(" ")}
                        >
                            {/* shimmer */}
                            {isGenerating && (
                                <div
                                    className="absolute inset-0 rounded-xl"
                                    style={{
                                        background:
                                            "linear-gradient(110deg, rgba(162,126,255,0.10) 25%, rgba(162,126,255,0.25) 50%, rgba(162,126,255,0.10) 75%)",
                                        backgroundSize: "200% 100%",
                                        animation: "ziplyne-shimmer 1.1s linear infinite",
                                    }}
                                />
                            )}

                            <pre className="relative m-0 p-4 md:p-5 text-[13px] md:text-[14px] leading-6 font-mono text-white/95 max-h-[280px] overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words">
                                <code className={isGenerating ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
                                    {displayText}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast */}
            <div
                className={[
                    "fixed right-6 bottom-6 z-[9999] rounded-xl border border-white/15 bg-[#111] px-4 py-3 text-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition",
                    toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
                ].join(" ")}
            >
                {toast.text}
            </div>
        </section>
    );
}
