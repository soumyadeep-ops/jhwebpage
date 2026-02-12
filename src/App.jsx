import { useEffect, useState } from "react";
import SignInPage from "./components/SignInPage";
import HeroSection from "./components/HeroSection";
import AlumniSection from "./components/AlumniSection";
import ImpactSection from "./components/ImpactSection";
import ExtensionsSection from "./components/ExtensionsSection";
import EmbedScriptGeneratorSection from "./components/EmbedScriptGeneratorSection";
import TeamsSection from "./components/TeamsSection";
import ApplicationsSection from "./components/ApplicationsSection";
import KnowledgeArticlesSection from "./components/KnowledgeArticlesSection";
import AutomationAndPRASection from "./components/AutomationAndPRASection";
import CertificationSection from "./components/CertificationSection";
import FaqSection from "./components/FaqSection";
import ZipsterCommunitySection from "./components/ZipsterCommunitySection";
import Footer from "./components/Footer";


// Logo assets
import ziplyneLogo from "./assets/Ziplyne logo.png";
import coupaLogo from "./assets/coupa.png";
import workdayLogo from "./assets/workday.png";
import oracleLogo from "./assets/oracle.png";
import servicenowLogo from "./assets/servicenow.png";
import sapLogo from "./assets/SAP.png";
import microsoftLogo from "./assets/microsoft.png";
import sageLogo from "./assets/sage.png";
import inforLogo from "./assets/infor.png";
import Config from "./config";

export default function App() {

  useEffect(() => {  
    if (document.getElementById("ziplyne-snippet")) {
      return;
    }
    
    const script = document.createElement('script');
    script.id = "ziplyne-snippet"
    script.src = Config.snippetURL;
    console.log({script});
    document.head.appendChild(script);
  }, []);


  // STEP: Once clicked, show your real website
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Page content pushed below fixed navbar */}
      <main className="pt-20">
        <section id="home">
          <HeroSection />
        </section>

        <UnderstandingDAPSection />
        <AlumniSection />
        <ImpactSection />

        <section id="extensions">
          <ExtensionsSection />
        </section>

        <section id="embed">
          <EmbedScriptGeneratorSection />
        </section>

        <TeamsSection />
        <ApplicationsSection />
        <KnowledgeArticlesSection />
        <AutomationAndPRASection />

        <section id="certified">
          <CertificationSection />
        </section>

        <section id="faqs">
          <FaqSection />
        </section>

        <ZipsterCommunitySection />
        <Footer />


      </main>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="https://www.ziplyne.com/" className="flex items-center">
          <img
            src={ziplyneLogo}
            alt="Ziplyne Logo"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#extensions" className="hover:text-white">Get Extensions</a>
          <a href="#embed" className="hover:text-white">Embed Script Generator</a>
          <a href="#certified" className="hover:text-white">Get Certified</a>
          <a href="#faqs" className="hover:text-white">FAQs</a>
        </nav>


        <a
          href="https://calendly.com/sales-ziplyne/ziplyne-demo-discovery"
          className="hidden md:inline-flex px-5 py-2.5 rounded-md font-medium border border-white bg-gradient-to-r from-[#7B5CFF] to-[#9E5CFF] shadow-lg hover:opacity-90"
        >
          Get Demo
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`w-6 h-[2px] bg-white transition ${open && "rotate-45 translate-y-[6px]"
              }`}
          />
          <span className={`w-6 h-[2px] bg-white transition ${open && "opacity-0"}`} />
          <span
            className={`w-6 h-[2px] bg-white transition ${open && "-rotate-45 -translate-y-[6px]"
              }`}
          />
        </button>
      </div>
    </header>
  );
}

function NavItem({ label }) {
  return (
    <button className="flex items-center gap-1 font-medium hover:text-white">
      {label}
      <ChevronDown />
    </button>
  );
}

function NavLink({ label, link }) {
  return (
    <a href={link} className="font-medium hover:text-white">
      {label}
    </a>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
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
              href="#dap"
              className="px-8 py-3 rounded-md font-semibold border border-white bg-gradient-to-r from-[#7B5CFF] to-[#9E5CFF] shadow-xl hover:opacity-90"
            >
              Explore Ziplyne Features
            </a>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-5xl">
            <div className="absolute -inset-10 blur-2xl bg-gradient-to-r from-violet-500/25 to-fuchsia-500/10 rounded-[32px] -z-10" />
            <img
              src={heroImg}
              alt="Ziplyne at Johns Hopkins"
              className="relative z-10 w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DAP SECTION ---------------- */

function UnderstandingDAPSection() {
  const chips = [
    "In-app Guidance",
    "Interactive Walkthroughs",
    "Contextual Help",
    "Personalized Training",
    "Increased Productivity",
    "Reduced Onboarding Time",
  ];

  const logos = [
    inforLogo,
    sageLogo,
    microsoftLogo,
    sapLogo,
    coupaLogo,
    oracleLogo,
    workdayLogo,
    servicenowLogo,
  ];

  return (
    <section
      id="dap"
      className="relative py-16 md:py-24 bg-gradient-to-b from-[#7B5CFF] via-[#6A54FF] to-[#5A4BFF]"
    >
      <div className="absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Understanding Digital Adoption Platforms (DAP)
        </h2>

        <p className="mt-4 text-lg text-white/90">
          Digital Adoption Platform (DAP) simplifies user experience and
          enhances technology adoption.
        </p>

        <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed max-w-3xl mx-auto">
          It provides in-app guidance, real-time support, and personalized
          training to help users navigate digital tools efficiently. DAPs boost
          productivity, reduce onboarding time, and increase user retention
          through step-by-step instructions and contextual help.
        </p>

        {/* Feature pills */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chips.map((label) => (
            <div
              key={label}
              className="flex items-center gap-5 rounded-2xl border border-white/20 bg-white/10 px-7 py-6 shadow-xl backdrop-blur-md"
            >
              <CheckIcon />
              <span className="text-base md:text-lg font-semibold text-left">
                {label}
              </span>
            </div>
          ))}
        </div>


        {/* Logos */}
        {/* Logos */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {logos.map((src, i) => (
            <div
              key={i}
              className="h-20 w-20 md:h-20 md:w-20 rounded-full bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center shadow-xl"
            >
              <img
                src={src}
                alt="logo"
                className="h-14 w-14 md:h-20 md:w-16 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


/* ---------------- ICONS ---------------- */

function ChevronDown() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 border border-white/20">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 6L9 17l-5-5"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
