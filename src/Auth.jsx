import { useEffect, useState } from "react";
import SignInPage from "./components/SignInPage";

export const Auth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isSAMLLogin = localStorage.getItem("isSAMLLogin");
    if (isSAMLLogin) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      const response = event.data;
      if (response.zipaction.action === "authentication") {
        localStorage.setItem("isSAMLLogin", true);
        setIsAuthenticated(true);
      }
    });
  }, []);

  const apiBaseURL = {
    staging: "https://stagingapi.mrsziplyneweb.hosts.jhmi.edu",
    prod: "https://api.mrmpzipweb01.hosts.jhmi.edu"
  }

  console.log(isAuthenticated);

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
    setIsAuthenticated(true)
    // const signInURL = `${apiBaseURL.staging}/api/v2/saml/login`;
    // popupCenter({ url:signInURL, title: "Single SignOn", w: 400, h: 400 });
  }

  return (
    isAuthenticated ? children : <SignInPage onSignIn={checkAuthentication} />
  )
}