import heroBg from "../assets/hero bg.png";
import heroImg from "../assets/JH Hero.png";

export default function HeroSection() {
    return (
        <section
            className="relative overflow-hidden pb-0"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay (slightly lighter so BG shows) */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Optional: subtle purple tint like your other sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#7B5CFF]/10 via-transparent to-black/20" />

            <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-0">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                        Ziplyne at Johns Hopkins
                        <span className="block">Your Digital Guide and Automation Partner</span>
                    </h1>

                    <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
                        Ziplyne is here to make your daily work easier at Johns Hopkins.
                        Whether you're navigating a complex system for the first time,
                        automating routine tasks, or streamlining key processes, Ziplyne
                        helps you do it with confidence and speed.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://calendly.com/sales-ziplyne/ziplyne-demo-discovery"
                            className="px-8 py-3 rounded-md font-semibold border border-white bg-gradient-to-r from-[#7B5CFF] to-[#9E5CFF] shadow-xl hover:opacity-90 transition"
                        >
                            Explore Ziplyne Features
                        </a>
                    </div>
                </div>

                <div className="mt-10 md:mt-12 flex justify-center">
                    <div className="relative w-full max-w-5xl">
                        <div className="absolute -inset-10 blur-2xl bg-gradient-to-r from-violet-500/25 to-fuchsia-500/10 rounded-[32px] -z-10" />
                        <img
                            src={heroImg}
                            alt="Ziplyne at Johns Hopkins"
                            className="relative z-10 w-full h-auto rounded-2xl block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
