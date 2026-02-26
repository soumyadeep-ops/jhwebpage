import React from "react";
const ziplyneLogo = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/684863ffe012f12d9abec88b_Ziplyne%20Logo%20Fulll.png";
const jhlogo = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/68c422b44618514b5faa3c88_Ziplyne%20%20Coupa%20-%20PRA%20%20DAP%20%20RPA%202.png";
const heroBg = "https://cdn.prod.website-files.com/62be01edf05ea84ad41b6b9b/6841a148d5116463b41beb52_hero%20bg.png";
import "./SignInPage.css";

export default function SignInPage({ onSignIn }) {
    const handleSignIn = () => {
        if (typeof onSignIn === "function") onSignIn();
    };

    return (
        <div className="signin-wrapper" style={{ backgroundImage: `url(${heroBg})` }}>
            {/* overlays */}
            <div className="signin-vignette" />
            <div className="signin-bloom" />
            <div className="signin-noise" />

            <div className="signin-shell">
                <div className="signin-card">
                    <div className="signin-top">
                        <div className="signin-logos">
                            <img src={ziplyneLogo} alt="Ziplyne" className="signin-logo zip" />
                            <span className="logo-divider" />
                            <img src={jhlogo} alt="Johns Hopkins" className="signin-logo jh" />
                        </div>

                        <h1 className="signin-title">Ziplyne for Johns Hopkins</h1>
                        <p className="signin-subtitle">
                            Sign in to access your digital guides, knowledge, and automation.
                        </p>
                    </div>

                    <button className="signin-btn" onClick={handleSignIn}>
                        Sign In
                    </button>

                    <p className="signin-footnote">
                        By continuing, you agree to Johns Hopkins and Ziplyne access policies.
                    </p>
                </div>
            </div>
        </div>
    );
}
