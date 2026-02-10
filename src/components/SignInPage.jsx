import React from "react";
import ziplyneLogo from "../assets/Ziplyne logo.png";
import jhlogo from "../assets/Johns Hopkins logo.png";
import heroBg from "../assets/hero bg.png";
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
