const guideAutoplayImg = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/670e403dc600780bf69c1d06_Frame-1000006092-1.png";
const rteImg = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/670e403dc600780bf69c1d11_Frame-1000006047-1.png";
const rolesImg = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/670e403dc600780bf69c1d32_role-1.png"

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
                <div className="text-center max-w-4xl lg:max-w-5xl mx-auto space-y-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-semibold text-white">
                        Accelerate User Onboarding <br />
                        &amp; Support with Knowledge Articles
                    </h2>

                    <p className="text-base sm:text-md text-white/70 leading-relaxed">
                        Empower users to quickly find solutions and resolve issues with our
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
