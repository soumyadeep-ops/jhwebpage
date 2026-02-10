import guideAutoplayImg from "../assets/Guide autoplay.png";
import rteImg from "../assets/RTE.png";
import rolesImg from "../assets/Roles.png";

const articles = [
    {
        title: "Using Guide Autoplay",
        img: guideAutoplayImg,
    },
    {
        title: "How to use RTE on Modal Manager",
        img: rteImg,
    },
    {
        title: "Roles and Permissions",
        img: rolesImg,
    },
];

export default function KnowledgeArticlesSection() {
    return (
        <section className="bg-black text-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
                    <h2 className="text-[40px] leading-[1.05] tracking-tight font-semibold text-white sm:text-[48px] lg:text-[56px]">
                        Accelerate User Onboarding <br />
                        &amp; Support with Knowledge <br />
                        Articles
                    </h2>

                    <p className="max-w-md text-[15px] leading-relaxed text-white/70 sm:text-[16px] lg:pt-2">
                        Empower Users to quickly find solutions and resolve issues with our
                        comprehensive Knowledge Articles.
                    </p>
                </div>


                {/* Cards */}
                <div className="mt-10 sm:mt-12 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 sm:p-7">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {articles.map((a) => (
                            <article
                                key={a.title}
                                className="group rounded-2xl bg-gradient-to-b from-[#B389FF] to-[#5C3BFF] p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1"
                            >
                                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                                    {a.title}
                                </h3>

                                <div className="mt-5 rounded-2xl bg-white p-4 sm:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                                    <img
                                        src={a.img}
                                        alt={a.title}
                                        className="w-full h-auto rounded-xl"
                                        loading="lazy"
                                    />
                                </div>

                                {/* subtle glow */}
                                <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
