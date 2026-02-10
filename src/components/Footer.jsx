// src/components/Footer.jsx
import ziplyneLogo from "../assets/Ziplyne logo.png";
import soc2Badge from "../assets/SOC2.png";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-black text-white">
            {/* soft purple bloom */}
            <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7B5CFF]/18 to-[#9E5CFF]/8 blur-3xl" />
            </div>

            <div className="relative border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        {/* Left: logo + social */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-4">
                                <img
                                    src={ziplyneLogo}
                                    alt="Ziplyne"
                                    className="h-9 w-auto"
                                />
                            </div>

                            <div className="flex items-center gap-4 text-white/80">
                                <SocialIcon
                                    href="https://twitter.com/ziplyne"
                                    label="Twitter"
                                    icon={<TwitterIcon />}
                                />
                                <SocialIcon
                                    href="https://www.linkedin.com/company/ziplyne/"
                                    label="LinkedIn"
                                    icon={<LinkedInIcon />}
                                />
                                <SocialIcon
                                    href="https://www.facebook.com/ziplyne"
                                    label="Facebook"
                                    icon={<FacebookIcon />}
                                />
                                <SocialIcon
                                    href="https://www.instagram.com/ziplyneinc/"
                                    label="Instagram"
                                    icon={<InstagramIcon />}
                                />
                            </div>
                        </div>



                        {/* Right: SOC2 + copyright */}
                        <div className="flex flex-col md:items-end gap-4">
                            <img
                                src={soc2Badge}
                                alt="SOC 2"
                                className="h-14 w-auto opacity-95"
                            />
                            <div className="text-sm text-white/60">
                                © Copyright {new Date().getFullYear()}, All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom fade */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
            </div>
        </footer>
    );
}

function FooterLink({ href, children }) {
    return (
        <a
            href={href}
            className="hover:text-white transition-colors underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}

function SocialIcon({ href, label, icon }) {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition"
        >
            <span className="h-5 w-5">{icon}</span>
        </a>
    );
}

/* --------- Icons (clean, consistent) --------- */
function TwitterIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.7L5.6 22H2.5l7.3-8.3L1.3 2h6.7l4.6 6.1L18.9 2Zm-1.1 18h1.8L7.1 3.9H5.2L17.8 20Z" />
        </svg>
    );
}
function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M4.98 3.5A2.48 2.48 0 1 1 5 8.46a2.48 2.48 0 0 1-.02-4.96ZM3 21h4V9H3v12Zm7 0h4v-6.3c0-1.65.03-3.77 2.3-3.77 2.3 0 2.65 1.79 2.65 3.65V21h4V14c0-3.4-.73-6-4.7-6-1.9 0-3.17 1.04-3.69 2.03h-.05V9H10v12Z" />
        </svg>
    );
}
function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V11H7v3h2.8v8h3.7Z" />
        </svg>
    );
}
function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
        </svg>
    );
}
