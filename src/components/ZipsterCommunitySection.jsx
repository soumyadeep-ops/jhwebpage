export default function ZipsterCommunitySection() {
    return (
        <section className="relative overflow-hidden bg-black text-white py-20 md:py-28">
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full 
                        bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),rgba(124,58,237,0.12),transparent_70%)] 
                        blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_55%,rgba(0,0,0,0.9)_100%)]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                    Join the Zipster Community
                </h2>

                <p className="mt-6 text-base md:text-lg leading-relaxed text-white/65 max-w-3xl mx-auto">
                    Become part of the Ziplyne community to connect with peers, share insights,
                    and gain exclusive access to knowledge, resources, and events — all focused
                    on accelerating digital adoption and automation.
                </p>

                <div className="mt-10">
                    <button
                        disabled
                        className="inline-flex items-center justify-center rounded-lg px-10 py-3.5 
                       text-base font-semibold tracking-wide
                       bg-[#8b5cf6] text-white border border-white/15
                       shadow-[0_12px_40px_rgba(139,92,246,0.35)]
                       opacity-90 cursor-not-allowed"
                    >
                        Coming Soon
                    </button>
                </div>
            </div>
        </section>
    );
}
