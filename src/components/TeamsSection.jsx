export default function TeamsSection() {
    const cards = [
        {
            title: "IT & Systems",
            desc: "Streamline deployments, manage updates, and test releases automatically with zero disruption.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                    <path d="m12 15 5 6H7Z" />
                </svg>
            ),
        },
        {
            title: "HR & Onboarding",
            desc: "Deliver personalized onboarding inside Workday, SuccessFactors, or Oracle HCM.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
                    <rect x="14" y="2" width="8" height="8" rx="1" />
                </svg>
            ),
        },
        {
            title: "Procurement & Finance",
            desc: "Ensure policy compliance, speed approvals, and validate changes in Coupa, Ariba, or NetSuite.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M17 14h.01" />
                    <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
                </svg>
            ),
        },
        {
            title: "Operations & Support",
            desc: "Guide users in real time, resolve issues faster, and track engagement metrics across your ecosystem.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0" />
                    <path d="M21 11v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-black text-white py-20 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-center text-3xl md:text-[42px] font-semibold tracking-tight">
                    Built for Every Team Across Your Organization
                </h2>

                <p className="text-center text-base md:text-lg text-white/70 max-w-2xl mx-auto mt-4 mb-12 md:mb-16">
                    From IT to HR to Procurement — Ziplyne empowers each department to
                    simplify, automate, and accelerate work.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1080px] mx-auto">
                    {cards.map((c) => (
                        <div
                            key={c.title}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-8 md:p-10 transition
                         hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_18px_rgba(255,255,255,0.08)]"
                        >
                            {/* grid overlay */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.10]"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                    backgroundSize: "22px 22px",
                                }}
                            />
                            {/* soft radial */}
                            <div
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background:
                                        "radial-gradient(circle at 40% 30%, rgba(255,255,255,0.06), rgba(0,0,0,0) 70%)",
                                }}
                            />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center
                                bg-gradient-to-br from-white/10 to-white/5
                                shadow-[inset_0_0_6px_rgba(255,255,255,0.05)]">
                                    <span className="opacity-90">{c.icon}</span>
                                </div>

                                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                                <p className="text-[15px] leading-7 text-[#bcbcbc] m-0">
                                    {c.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
