export default function AlumniSection() {
    return (
        <section className="py-24 bg-[#0b0b0b] text-white text-center">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    From Incubation to Innovation
                </h2>

                <p className="text-gray-400 mb-10 max-w-3xl mx-auto">
                    Ziplyne was incubated at Johns Hopkins University’s entrepreneurial
                    ecosystem — built, mentored, and scaled to simplify enterprise software
                    adoption.
                </p>

                <p className="text-gray-300 mb-12">
                    What began as a student startup evolved into a global platform enabling
                    organizations to accelerate onboarding, automate testing, and measure
                    adoption across applications — all born from Hopkins innovation.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <div className="bg-[#1a1a1a] rounded-xl px-6 py-4 hover:-translate-y-1 hover:bg-[#1e1e1e] transition">
                        🎓 Incubated at Johns Hopkins
                    </div>

                    <div className="bg-[#1a1a1a] rounded-xl px-6 py-4 hover:-translate-y-1 hover:bg-[#1e1e1e] transition">
                        🌍 Trusted by Enterprises Worldwide
                    </div>

                    <div className="bg-[#1a1a1a] rounded-xl px-6 py-4 hover:-translate-y-1 hover:bg-[#1e1e1e] transition">
                        💡 Empowering Digital Transformation
                    </div>
                </div>
            </div>
        </section>
    );
}
