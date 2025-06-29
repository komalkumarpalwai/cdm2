import React, { useEffect, useState } from "react";

export default function SocialFeed() {
  const [linkedInStatus, setLinkedInStatus] = useState("loading");

  useEffect(() => {
    if (window.IN) {
      setLinkedInStatus("loaded");
      window.IN.init();
      return;
    }

    const scriptId = "linkedin-script-tag";
    const existingScript = document.getElementById(scriptId);
    if (existingScript) document.body.removeChild(existingScript);

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://platform.linkedin.com/in.js";
    script.textContent = "lang: en_US";
    script.async = true;

    script.onload = () => {
      if (window.IN) {
        try {
          window.IN.init();
          setLinkedInStatus("loaded");
        } catch {
          setLinkedInStatus("error");
        }
      } else {
        setLinkedInStatus("error");
      }
    };

    script.onerror = () => setLinkedInStatus("error");

    const timeout = setTimeout(() => {
      if (linkedInStatus === "loading") setLinkedInStatus("error");
    }, 5000);

    document.body.appendChild(script);

    return () => {
      clearTimeout(timeout);
      const tag = document.getElementById(scriptId);
      if (tag) document.body.removeChild(tag);
    };
  }, []);

  const renderLinkedInContent = () => {
    switch (linkedInStatus) {
      case "loaded":
        return (
          <>
            <div className="w-full overflow-y-auto flex flex-col items-center">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="codeminds-web-services"
                data-version="v1"
              ></div>

              <div className="w-full mt-4 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7341800662365589504"
                  title="Embedded LinkedIn Post"
                  className="w-full h-[500px] border-none"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/company/codeminds-web-services/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition"
            >
              View All Posts on LinkedIn
            </a>
          </>
        );

      case "error":
        return (
          <div className="text-center px-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQGd2UasP8K90g/company-logo_200_200/B56ZWjAfV8HQAQ-/0/1742196569943?e=1756339200&v=beta&t=RIwU-V_1cXZIGUWsNCnbdR1sw9NR1bfWfIyJwoJybuA"
              alt="LinkedIn Logo"
              className="w-24 h-24 mx-auto mb-4 rounded-full shadow"
            />
            <p className="text-lg font-semibold mb-1">
              Follow us on LinkedIn for updates!
            </p>
            <p className="text-sm text-gray-600 mb-4 mt-40">
              (Couldn't load LinkedIn feed. This might be due to browser or network restrictions.)
            </p>
            <a
              href="https://www.linkedin.com/company/codeminds-web-services/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition"
            >
              View Our LinkedIn Posts
            </a>
          </div>
        );

      default:
        return (
          <div className="w-full h-[400px] flex items-center justify-center">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="mt-10 bg-white shadow-lg p-8 rounded-lg font-[Poppins]">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        📲 Follow Us on Social Media
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Instagram Embed */}
        <div className="flex flex-col items-center">
          <div className="w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.instagram.com/codemindswebservices/embed"
              className="w-full h-[500px] border-none"
              title="Instagram Profile Embed"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
          <a
            href="https://www.instagram.com/codemindswebservices"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-full hover:scale-105 transition"
          >
            Follow on Instagram
          </a>
        </div>

        {/* LinkedIn Embed */}
        <div className="flex flex-col items-center">{renderLinkedInContent()}</div>
      </div>
    </div>
  );
}
