import { useMemo, useState } from "react";

const baseBtn =
    "px-7 py-2.5 rounded-xl text-sm font-medium transition border";
const activeBtn = "bg-white text-black border-white";
const inactiveBtn =
    "bg-transparent text-white border-white/15 hover:border-white/30 hover:bg-white/5";

const cardBase =
    "bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 md:p-10 transition will-change-transform hover:-translate-y-1 hover:bg-[#101010]";
const linkBase =
    "inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-5 py-3 rounded-lg no-underline transition hover:opacity-90";

function ExtensionCard({ title, desc, href, cta }) {
    return (
        <div className={cardBase}>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-white/70 text-sm leading-6 mb-6">{desc}</p>
            <a href={href} target="_blank" rel="noreferrer" className={linkBase}>
                {cta} <span aria-hidden>→</span>
            </a>
        </div>
    );
}

export default function ExtensionsSection() {
    const [tab, setTab] = useState("staging");

    const data = useMemo(
        () => ({
            staging: [
                {
                    title: "Johns Hopkins Staging Creator",
                    desc: "Create and test your in-app Zips safely in the staging environment before deployment.",
                    href: "https://chromewebstore.google.com/detail/ziplyne-jh-staging-creato/dpcjihdeiilacnagdoplphghajdhegjc",
                    cta: "Install Creator",
                },
                {
                    title: "Johns Hopkins Staging Player",
                    desc: "Preview and play in-app Zips to validate user flows and guide behavior before release.",
                    href: "https://chromewebstore.google.com/detail/ziplyne-jh-staging-player/khhpjplbjeafbecbbahhkkgkepjckkgi",
                    cta: "Install Player",
                },
            ],
            production: [
                {
                    title: "Johns Hopkins Production Creator",
                    desc: "Publish finalized Zips in the production environment to make them live for enterprise users.",
                    href: "https://chromewebstore.google.com/detail/ziplyne-jh-production-cre/iolklpfjcbghlmaojgdcdjagkebcmkag",
                    cta: "Install Creator",
                },
                {
                    title: "Johns Hopkins Production Player",
                    desc: "Experience live Ziplyne guides in your production applications and track real-time adoption.",
                    href: "https://chromewebstore.google.com/detail/ziplyne-jh-production-pla/phaofcagillefigmcbocnnllnflhkjce",
                    cta: "Install Player",
                },
            ],
        }),
        []
    );

    return (
        <section className="bg-black text-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-[42px] md:leading-tight font-bold mb-3">
                        Ziplyne Extensions for Johns Hopkins
                    </h2>
                    <p className="text-white/70 text-base md:text-[17px] leading-7 max-w-2xl mx-auto">
                        Access official Johns Hopkins Ziplyne Creator and Player extensions
                        for both environments.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 flex-wrap mt-10 mb-10">
                    <button
                        type="button"
                        onClick={() => setTab("staging")}
                        className={`${baseBtn} ${tab === "staging" ? activeBtn : inactiveBtn
                            }`}
                    >
                        Staging
                    </button>
                    <button
                        type="button"
                        onClick={() => setTab("production")}
                        className={`${baseBtn} ${tab === "production" ? activeBtn : inactiveBtn
                            }`}
                    >
                        Production
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {data[tab].map((item) => (
                        <ExtensionCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
