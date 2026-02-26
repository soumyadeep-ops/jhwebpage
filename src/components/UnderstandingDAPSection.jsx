import React from "react";

export default function UnderstandingDAPSection() {
    const chips = [
        "In-app Guidance",
        "Interactive Walkthroughs",
        "Contextual Help",
        "Personalized Training",
        "Increased Productivity",
        "Reduced Onboarding Time",
    ];

    return (
        <section
            id="dap"
            className="relative py-16 md:py-24 bg-gradient-to-b from-[#7B5CFF] via-[#6A54FF] to-[#5A4BFF]"
        >
            <div className="absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    Understanding Digital Adoption Platforms (DAP)
                </h2>

                <p className="mt-4 text-lg text-white/90">
                    Digital Adoption Platform (DAP) simplifies user experience and enhances
                    technology adoption.
                </p>

                <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed max-w-3xl mx-auto">
                    It provides in-app guidance, real-time support, and personalized
                    training to help users navigate digital tools efficiently. DAPs boost
                    productivity, reduce onboarding time, and increase user retention
                    through step-by-step instructions and contextual help.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chips.map((label) => (
                        <div
                            key={label}
                            className="flex items-center gap-5 rounded-2xl border border-white/20 bg-white/10 px-7 py-6 shadow-xl backdrop-blur-md"
                        >
                            <CheckIcon />
                            <span className="text-base md:text-lg font-semibold text-left">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CheckIcon() {
    return (
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 border border-white/20">
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