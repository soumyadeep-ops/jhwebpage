import { useEffect, useState } from "react";
import SignInPage from "./components/SignInPage";
import HeroSection from "./components/HeroSection";
import UnderstandingDAPSection from "./components/UnderstandingDAPSection";
import UnderstandingDAPSectionnew from "./components/UnderstandingDAPSectionnew";
import InfiniteLogoScrollSection from "./components/InfiniteLogoScrollSection";
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
const ziplyneLogo = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/684863ffe012f12d9abec88b_Ziplyne%20Logo%20Fulll.png";
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
    console.log({ script });
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

        {/* <UnderstandingDAPSection /> */}
        <UnderstandingDAPSectionnew />
        <InfiniteLogoScrollSection />

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
          target="_blank"
          rel="noopener noreferrer"
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
