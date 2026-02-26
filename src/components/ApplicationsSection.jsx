const arms = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/691466e0acb517e100c8c9e4_image%20(3).png";
const sf = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/691466e0a9d273700d51cceb_image.jpeg";
const timesheetx = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/691466e0db36796ec093a495_image%20(2).png";
const omt = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/691466e07ff066ec9c4f8768_image%20(1).png";
const sap = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/691466e0724ea811fa18cd54_image.png";

export default function ApplicationsSection() {
    const apps = [
        { name: "SAP", img: sap },
        { name: "OMT", img: omt },
        { name: "TimesheetX", img: timesheetx },
        { name: "SuccessFactors", img: sf },
        { name: "ARMS", img: arms },
    ];

    return (
        <section className="bg-black text-white text-center py-20 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Applications Supported by Ziplyne
                </h2>

                <p className="text-gray-400 md:text-md max-w-2xl mx-auto mb-14 leading-relaxed">
                    Empowering Johns Hopkins users across enterprise systems with real-time
                    guidance and automation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 justify-items-center">
                    {apps.map((app, index) => {
                        const isLastCard =
                            apps.length % 2 !== 0 && index === apps.length - 1;

                        return (
                            <div
                                key={app.name}
                                className={`w-full max-w-[520px] bg-[#0b0b0b] border border-white/10 
  rounded-2xl p-5 transition-all duration-300
  hover:-translate-y-1 hover:border-white/20
  hover:shadow-[0_0_22px_rgba(255,255,255,0.06)]
  ${isLastCard ? "sm:col-span-2 mx-auto" : ""}`}
                            >
                                <img
                                    src={app.img}
                                    alt={app.name}
                                    className="w-full h-auto rounded-xl mb-4 transition-transform duration-300
                           hover:scale-[1.04]"
                                />

                                <h3 className="text-lg font-semibold tracking-wide">
                                    {app.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
