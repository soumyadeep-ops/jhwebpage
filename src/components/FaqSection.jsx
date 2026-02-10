import { useState } from "react";

const FAQS = [
    {
        q: "What is a Zip?",
        a: "A Zip is a real-time in-app guide for user onboarding, training, and support within enterprise applications.",
    },
    {
        q: "How do I get access to Ziplyne?",
        a: (
            <>
                Access can be requested via the links above. For support contact{" "}
                <a
                    href="mailto:Ziplyne_support@lists.johnshopkins.edu"
                    className="underline underline-offset-4 hover:text-white"
                >
                    Ziplyne Support
                </a>{" "}
                for existing users or{" "}
                <a
                    href="mailto:Ziplyne@lists.johnshopkins.edu"
                    className="underline underline-offset-4 hover:text-white"
                >
                    Ziplyne@lists.johnshopkins.edu
                </a>{" "}
                for onboarding.
            </>
        ),
    },
    {
        q: "How do I know if I have the Creator or Player installed correctly?",
        a: "You’ll see a blue Z or “?” icon appear on your screen. A purple Z indicates that the Creator is active and functioning.",
    },
    {
        q: "Who do I contact to get trained at Johns Hopkins?",
        a: "You can book a training session through the Johns Hopkins User Community. Sessions are offered monthly to help departments get started with Ziplyne.",
    },
    {
        q: "What is the cost of Ziplyne for me or my department?",
        a: (
            <>
                There’s no cost for replaying existing Zips. Custom creation is quoted
                based on application type and user volume. For custom deployments or
                large-group training, email{" "}
                <a
                    href="mailto:Ziplyne@lists.johnshopkins.edu"
                    className="underline underline-offset-4 hover:text-white"
                >
                    Ziplyne@lists.johnshopkins.edu
                </a>
                .
            </>
        ),
    },
    {
        q: "How fast can I see results from Ziplyne?",
        a: "Results can be seen immediately — including fewer support tickets, faster onboarding, and higher user engagement across enterprise apps.",
    },
    {
        q: "How do I know if Ziplyne will work with my application?",
        a: (
            <>
                Ziplyne supports virtually any web-based platform including SAP, Mendix,
                ServiceNow, Kronos, and custom applications. For integration with Epic
                or others, contact{" "}
                <a
                    href="mailto:Ziplyne@lists.johnshopkins.edu"
                    className="underline underline-offset-4 hover:text-white"
                >
                    Ziplyne@lists.johnshopkins.edu
                </a>
                .
            </>
        ),
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="relative overflow-hidden bg-[#0b0b0b] text-white px-6 py-20">
            {/* Header */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <span className="mb-6 bg-gradient-to-r from-[#7B5CFF] to-[#9E5CFF] bg-clip-text text-transparent text-sm font-medium tracking-wide">
                    Frequently Asked Questions
                </span>
                <h2 className="mb-10 text-4xl md:text-5xl font-semibold">FAQs</h2>

                {/* Glow */}
                <span className="absolute -top-[350px] left-1/2 -translate-x-1/2 z-0 h-[500px] w-[600px] rounded-full bg-gradient-to-r from-[#7B5CFF]/10 to-[#9E5CFF]/5 blur-3xl" />
            </div>

            {/* FAQ List */}
            <div className="max-w-3xl mx-auto mt-10 space-y-4">
                {FAQS.map((item, idx) => {
                    const isOpen = openIndex === idx;

                    return (
                        <div
                            key={idx}
                            className="rounded-xl border border-white/10 bg-[#141414] transition-all duration-300 hover:border-white/20"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className="flex w-full justify-between items-center text-left p-5"
                            >
                                <span className="text-lg font-medium text-white/80">
                                    {item.q}
                                </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-5 h-5 text-white/70 transition-transform duration-500 ease-in-out ${isOpen ? "rotate-45" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out px-5 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="pb-5 text-sm text-white/60 leading-relaxed">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
