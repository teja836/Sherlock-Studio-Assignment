import React, { useEffect, useRef } from "react";

const BannerAd = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl27451887.profitableratecpm.com/1c406903c40965fc0a4400f6ee08a040/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
    return () => {
      if (containerRef.current) {
        // Remove the script if present
        const scripts = containerRef.current.querySelectorAll('script[src="//pl27451887.profitableratecpm.com/1c406903c40965fc0a4400f6ee08a040/invoke.js"]');
        scripts.forEach(s => s.remove());
      }
    };
  }, []);

  return (
    <div
      id="container-1c406903c40965fc0a4400f6ee08a040"
      ref={containerRef}
      style={{ minWidth: 300, minHeight: 250, display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }}
    />
  );
};

export default BannerAd;
