export default function CertificationSection() {
    return (
        <section className="bg-black text-white py-28">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <h3 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                        Get Certified on Ziplyne's Digital Adoption Platform
                    </h3>

                    <p className="text-lg text-gray-400 max-w-xl mb-10">
                        The certification will deepen your understanding of the product,
                        enhancing your ability to use the Ziplyne Player, Creator, and
                        Dashboard effectively.
                    </p>

                    <div className="flex items-center gap-10 flex-wrap">
                        <div>
                            <div className="text-4xl font-semibold">4.5 Hrs</div>
                            <div className="text-gray-400 text-lg">
                                Course Completion Time
                            </div>
                        </div>

                        <a
                            href="https://ziplyne-product-onboarding.mykajabi.com/offers/Ky8AsfkB/checkout"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium text-white border border-white bg-gradient-to-r from-[#7B5CFF] to-[#9E5CFF] hover:opacity-90 transition shadow-[0_0_15px_rgba(123,92,255,0.45)]"
                        >
                            Get Certified Now
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#7B5CFF]/30 to-transparent blur-2xl rounded-3xl" />

                    <img
                        src="/src/assets/cert.png"
                        alt="Ziplyne Certification"
                        className="relative w-full max-w-xl rounded-2xl shadow-[0_25px_80px_rgba(123,92,255,0.35)]"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
