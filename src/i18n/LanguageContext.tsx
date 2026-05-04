import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Language } from "./types";
import { translations } from "./translations";

interface LanguageContextValue {
  lang: Language;
  t: (typeof translations)[Language];
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "es" ? "es" : "en";
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Language = prev === "en" ? "es" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
