export default function AutomationAndPRASection() {
    return (
        <section className="bg-black text-white py-28">
            <div className="max-w-7xl mx-auto px-6 space-y-32">
                {/* ===================== */}
                {/* TEST AUTOMATION */}
                {/* ===================== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Left Image */}
                    <div className="relative flex justify-center">
                        <img
                            src="/src/assets/TA.png"
                            alt="Test Automation"
                            className="w-full max-w-xl rounded-2xl shadow-[0_20px_60px_rgba(123,92,255,0.25)]"
                            loading="lazy"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h3 className="text-4xl font-semibold leading-tight mb-4">
                            Need Test Automation?
                        </h3>

                        <p className="text-lg text-gray-400 mb-8">
                            AI-Powered Testing for Faster, Flawless Releases
                        </p>

                        <ul className="space-y-5 text-gray-300">
                            <li className="flex items-start gap-4">
                                <span className="text-xl leading-none mt-[2px]">✓</span>
                                No-Code, Scalable Automation: Agentic scripts run across ERP
                                platforms.
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-xl leading-none mt-[2px]">✓</span>
                                Cut Testing Time by 80%: AI agents detect bugs before users do.
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-xl leading-none mt-[2px]">✓</span>
                                Continuous Testing, Zero Downtime: Autonomous, real-time
                                execution.
                            </li>
                        </ul>

                        <a
                            href="https://calendly.com/sales-ziplyne/ziplyne-demo-discovery"
                            className="inline-flex mt-10 items-center justify-center px-8 py-3 rounded-lg font-medium text-white border border-white bg-gradient-to-r from-[#7B5CFF] to-[#9E5CFF] hover:opacity-90 transition shadow-[0_0_15px_rgba(123,92,255,0.45)]"
                        >
                            Get Demo
                        </a>
                    </div>
                </div>

                {/* ===================== */}
                {/* PRA SECTION */}
                {/* ===================== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-4xl font-semibold leading-tight mb-4">
                            Need Process Recorder Automation?
                        </h3>

                        <p className="text-lg text-gray-400 mb-8">
                            AI-Driven PRA for Smarter, Faster Workflows
                        </p>

                        <ul className="space-y-5 text-gray-300">
                            <li className="flex items-start gap-4">
                                <span className="text-xl leading-none mt-[2px]">✓</span>
                                <span>
                                    <span className="font-semibold text-white">
                                        Record Once, Reuse Everywhere (RORE):
                                    </span>{" "}
                                    Capture a process once and deploy it across apps.
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-xl leading-none mt-[2px]">✓</span>
                                <span>
                                    <span className="font-semibold text-white">
                                        Auto-Heal in Real Time:
                                    </span>{" "}
                                    Self-repairing recordings adapt instantly to UI changes.
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-xl leading-none mt-[2px]">✓</span>
                                <span>
                                    <span className="font-semibold text-white">
                                        Digital Twin of Processes:
                                    </span>{" "}
                                    Mirror, monitor, and optimize workflows continuously.
                                </span>
                            </li>
                        </ul>

                        <a
                            href="https://calendly.com/sales-ziplyne/ziplyne-demo-discovery"
                            className="inline-flex mt-10 items-center justify-center px-8 py-3 rounded-lg font-medium text-white border border-white bg-gradient-to-r from-[#7B5CFF] to-[#9E5CFF] hover:opacity-90 transition shadow-[0_0_15px_rgba(123,92,255,0.45)]"
                        >
                            Get Demo
                        </a>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center">
                        <img
                            src="/src/assets/PRA.png"
                            alt="Process Recorder Automation"
                            className="w-full max-w-xl rounded-2xl shadow-[0_20px_60px_rgba(123,92,255,0.25)]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
