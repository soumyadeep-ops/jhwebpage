import { useEffect, useState } from "react";
import SignInPage from "./components/SignInPage";
import Config from "./config";

export const Auth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isAuthExpired = (authDataString) => {
    if (!authDataString) {
      return true; // No auth data means expired/not authenticated
    }

    try {
      const { timestamp } = JSON.parse(authDataString);
      const now = Date.now();
      const twoHoursInMs = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
      
      // Check if authentication is still valid (within 2 hours)
      return now - timestamp >= twoHoursInMs;
    } catch (error) {
      // If parsing fails, treat as expired/invalid
      return true;
    }
  };

  useEffect(() => {
    const authData = localStorage.getItem("isSAMLLogin");
    if (authData) {
      if (isAuthExpired(authData)) {
        // Expired - clear localStorage and require re-authentication
        localStorage.removeItem("isSAMLLogin");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      const response = event.data;
      if (response.zipaction.action === "authentication") {
        console.log({response});
        // Store authentication status with current timestamp
        const authData = {
          timestamp: Date.now()
        };
        localStorage.setItem("isSAMLLogin", JSON.stringify(authData));
        setIsAuthenticated(true);
      }
    });
  }, []);

  const popupCenter = ({ url, title, w, h }) => {
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : window.screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : window.screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft - 300;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(
      url,
      title,
      `
            scrollbars=yes,
            width=${w / systemZoom}, 
            height=${h / systemZoom}, 
            top=${top}, 
            left=${left}
            `
    );
    try {
      if (window.focus) newWindow.focus();
    } catch (err) {
      console.log("Popup blocked");
      alert("Please enable Popup");
    }
  };

  const checkAuthentication = () => {
    // setIsAuthenticated(true)
    const signInURL = `${Config.apiBaseURL}/saml/login`;
    popupCenter({ url: signInURL, title: "Single SignOn", w: 400, h: 400 });
  }

  return (
    isAuthenticated ? children : <SignInPage onSignIn={checkAuthentication} />
  )
}