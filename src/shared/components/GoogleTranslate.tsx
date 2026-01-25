import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    const translateId = "google_translate_element";

    // 1. Create hidden translate container
    let container = document.getElementById(translateId);
    if (!container) {
      container = document.createElement("div");
      container.id = translateId;
      container.style.display = "none";
      document.body.appendChild(container);
    }

    // 2. Inject CSS to hide the widget
    const style = document.createElement("style");
    style.textContent = `
      .goog-te-banner-frame.skiptranslate { display: none !important; }
      body { top: 0px !important; }

      .goog-te-gadget,
      .goog-te-gadget-simple,
      #google_translate_element,
      #google_translate_element * {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
        pointer-events: none !important;
      }

      .goog-te-menu-frame,
      .goog-te-menu2,
      .goog-te-ftab,
      .goog-te-balloon {
        display: none !important;
      }

      .goog-te-gadget img,
      .goog-te-gadget-icon,
      .goog-logo-link {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // 3. Load Google Translate script (only once)
    const scriptExists = document.querySelector(
      'script[src*="translate.google.com"]'
    );

    if (!scriptExists) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    }

    // 4. Google callback
    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "es",
            includedLanguages: "en,es",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true,
            gaTrack: false,
          },
          translateId
        );
      } catch (err) {
        console.warn("Retrying Google Translate initialization...");
        setTimeout(() => window.googleTranslateElementInit?.(), 1000);
      }
    };

    // 5. CLEANUP
    return () => {
      window.googleTranslateElementInit = undefined;

      const frames = document.querySelectorAll(
        ".goog-te-banner-frame, .goog-te-menu-frame"
      );
      frames.forEach((el) => el.remove());

      style.remove();
    };
  }, []);

  // Component returns nothing because everything is injected dynamically
  return null;
}
