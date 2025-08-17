import { useEffect, useRef } from "react";

// Replace with your Adsterra banner ad options and script src
const ADSTERRA_SCRIPT_SRC = "https://www.profitabledisplaynetwork.com/...";
const ADSTERRA_OPTIONS = "atOptions = { /* your options here */ };";

export default function AdsterraBannerAd() {
  const adRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && adRef.current) {
      const script = document.createElement("script");
      script.type = "text/javascript";
  script.innerHTML = `${ADSTERRA_OPTIONS}\ndocument.write('<script src="${ADSTERRA_SCRIPT_SRC}"></script>');`;
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={adRef} className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
      {/* Adsterra banner ad will be injected here */}
    </div>
  );
}
