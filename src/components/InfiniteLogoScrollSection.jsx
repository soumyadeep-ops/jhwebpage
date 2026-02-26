import React from "react";

const LOGOS = [
    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/6846e0cc8df76e40acf6ec33_Salesforce.png",
    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/6846be4839044d7e8bb59eda_image%20371.png",
    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/6846be48b2ed007d5bece9f6_image-1.png",
    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/6846be48a78f3e9225c1346e_image.png",
    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/6846be484799a4056d8e9eef_image%20367.png",
    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/6846be48197286bb7fe4bb51_image%20269.png",
    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/6846be483a2addd48a2d416c_Group%201000002132.png",
    "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/6846be4878c350428178923b_image%20337.png",
];

export default function InfiniteLogoScrollSection() {
    // duplicate list to make seamless loop
    const items = [...LOGOS, ...LOGOS];

    return (
        <section className="py-14"
            style={{
                background: "linear-gradient(to bottom, #0b0b0f 0%, #12121a 100%)",
            }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-center text-sm md:text-base text-white/70">
                    Works across the enterprise apps you already use
                </p>

                <div className="mt-8 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    {/* soft fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

                    <div className="zl-marquee">
                        <div className="zl-track">
                            {items.map((src, idx) => (
                                <div className="zl-logoWrap" key={`${src}-${idx}`}>
                                    <img className="zl-logo" src={src} alt="logo" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS inside component (no extra file required) */}
            <style>{`
        .zl-marquee{
          width: 100%;
          overflow: hidden;
          padding: 18px 0;
        }
        .zl-track{
          display: flex;
          width: max-content;
          gap: 46px;
          align-items: center;
          animation: zl-scroll 26s linear infinite;
          will-change: transform;
        }
        .zl-logoWrap{
          height: 42px;           /* SAME HEIGHT for all */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 6px;
          opacity: 0.95;
        }
        .zl-logo{
          height: 42px;          /* SAME HEIGHT for all */
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 8px 20px rgba(0,0,0,0.35));
        }
        @keyframes zl-scroll{
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 640px){
          .zl-track{ gap: 32px; animation-duration: 22s; }
          .zl-logoWrap{ height: 36px; }
          .zl-logo{ height: 36px; }
        }
        /* Pause on hover (nice UX) */
        .zl-marquee:hover .zl-track{
          animation-play-state: paused;
        }
      `}</style>

        </section>
    );
}