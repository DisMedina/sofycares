import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { MX, US } from 'country-flag-icons/react/3x2';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const toggle = document.getElementById("mobile-menu-toggle");

      if (
        mobileOpen &&
        menu &&
        toggle &&
        !menu.contains(event.target as Node) &&
        !toggle.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [mobileOpen]);

  return (
    <nav className="relative z-10 bg-white/95 backdrop-blur-sm shadow-md border-b border-secondary-200">
      <div className="mx-auto px-6">
        {" "}
        {/* TOP BAR */}
        <div className="flex justify-between items-center h-20">
          {" "}
          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo/logo-tll.svg"
              alt="Sofy Cares"
              className="h-14"
            />
          </div>
          {/* DESKTOP NAV */}
          <DesktopNavigation />
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="md:hidden flex items-center justify-center border border-secondary-600 text-text-secondary bg-white px-3 py-2 rounded-full font-semibold text-sm transition hover:bg-primary-700 hover:text-white hover:border-primary-700"
              aria-label="Toggle language"
            >
              {language === "en" ? (
                <>
                  <MX className="w-4 h-auto mr-2" />
                  ES
                </>
              ) : (
                <>
                  <US className="w-4 h-auto mr-2" />
                  EN
                </>
              )}
            </button>
            {/* MOBILE TOGGLE */}
            <button
              id="mobile-menu-toggle"
              className="min-[950px]:hidden text-text-primary hover:text-primary-600 p-3 rounded-lg focus:outline-none"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* MOBILE MENU */}
        {mobileOpen && <MobileMenu setMobileOpen={setMobileOpen} />}
      </div>
    </nav>
  );
}

/* ---------------------------------------
   DESKTOP NAVIGATION
--------------------------------------- */

function DesktopNavigation() {
  const { language, toggleLanguage, t } = useLanguage();
  const navItems = [
    {
      text: t("livingOptions"),
      to: "#",
      hasDropdown: true,
      dropdownItems: [
        { text: t("independentLiving"), to: "/independent-living" },
        { text: t("assistedLiving"), to: "/assisted-living" },
      ],
    },
    { text: t("aboutUs"), to: "/about", hasDropdown: false },
    {
      text: t("healthcareServices"),
      to: "/services",
      hasDropdown: true,
      dropdownItems: [
        { text: t("healthAndMedicalServices"), to: "/services#health-medical-services" },
        { text: t("levelsOfCare"), to: "/services#levels-of-care" },
        { text: t("servicesAndAmenities"), to: "/services#services-amenities" },
      ],
    },
    { text: t("events"), to: "/events", hasDropdown: false },
    { text: t("gallery"), to: "/gallery", hasDropdown: false },
  ];

  return (
    <div className="hidden min-[950px]:flex flex-1 items-center justify-between gap-4">
      {/* CENTER MENU */}
      <div className="flex flex-1 justify-center">
        <ul className="flex items-stretch gap-1 text-[17px] text-center font-medium">
          {navItems.map((item) => (
            <li
              key={item.text}
              className="relative group h-20 flex items-stretch"
            >
              {/* ITEM */}
              <Link
                to={item.to}
                className="
                  h-full flex items-center
                  px-4
                  text-text-primary
                  transition-colors duration-200
                  hover:bg-primary-50
                  rounded-md
                "
              >
                {item.text}
              </Link>

              {/* DROPDOWN */}
              {item.hasDropdown && item.dropdownItems && (
                <div
                  className="
      absolute top-full left-1/2 -translate-x-1/2
      opacity-0 pointer-events-none
      transition-all duration-200
      group-hover:opacity-100 group-hover:pointer-events-auto
      z-50
    "
                >
                  <div className="bg-white rounded-lg shadow-lg border border-beige-200 w-56 py-3">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.to}
                        className="block px-4 py-2 hover:bg-primary-50 text-text-primary transition-colors duration-200"
                        to={dropdownItem.to}
                      >
                        {dropdownItem.text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT BUTTON */}
      <Link
        to="/contact"
        className="
          hidden md:block
          bg-primary-600 hover:bg-primary-700
          text-white px-6 py-3 rounded-full
          font-semibold text-base
          transition
          shrink-0
        "
      >
        {t("contact")}
      </Link>
      <button
        onClick={toggleLanguage}
        className="hidden md:flex items-center justify-center border border-secondary-600 text-text-secondary bg-white px-6 py-3 rounded-full font-semibold text-base transition hover:bg-primary-700 hover:text-white hover:border-primary-700 shrink-0"
        aria-label="Toggle language"
      >
        {language === "en" ? (
          <>
            <MX className="w-5 h-auto mr-2" />
            ES
          </>
        ) : (
          <>
            <US className="w-5 h-auto mr-2" />
            EN
          </>
        )}
      </button>
    </div>
  );
}

/* ---------------------------------------
   MOBILE MENU
--------------------------------------- */

function MobileMenu({
  setMobileOpen,
}: {
  setMobileOpen: (v: boolean) => void;
}) {
  const { t } = useLanguage();

  return (
    <div
      id="mobile-menu"
      className="min-[950px]:hidden bg-white/95 rounded-lg mt-2 shadow-lg border border-beige-200 p-4 space-y-3 mr-10"
    >
      {/* MENU ITEMS */}
      <MobileDropdown
        label={t("livingOptions")}
        items={[
          { to: "/independent-living", text: t("independentLiving") },
          { to: "/assisted-living", text: t("assistedLiving") },
        ]}
        setMobileOpen={setMobileOpen}
      />

      <Link
        to="/about"
        className="block px-2 py-3 rounded-lg hover:bg-primary-50 text-text-primary text-lg font-medium"
        onClick={() => setMobileOpen(false)}
      >
        {t("aboutUs")}
      </Link>

      <MobileDropdown
        label={t("healthcareServices")}
        items={[
          {
            to: "/services#health-medical-services",
            text: t("healthAndMedicalServices"),
          },
          { to: "/services#levels-of-care", text: t("levelsOfCare") },
          { to: "/services#services-amenities", text: t("servicesAndAmenities") },
        ]}
        setMobileOpen={setMobileOpen}
      />

      <Link
        to="/events"
        className="block px-2 py-3 rounded-lg hover:bg-primary-50 text-text-primary text-lg font-medium"
        onClick={() => setMobileOpen(false)}
      >
        {t("events")}
      </Link>

      <Link
        to="/gallery"
        className="block px-2 py-3 rounded-lg hover:bg-primary-50 text-text-primary text-lg font-medium"
        onClick={() => setMobileOpen(false)}
      >
        {t("gallery")}
      </Link>

      {/* SPACER */}
      <div className="mt-3 mb-1">
        <hr className="border-primary-200" />
      </div>

      {/* CONTACT BUTTON */}
      <Link
        to="/contact"
        className="block mx-auto text-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-lg transition w-[150px]"
        onClick={() => setMobileOpen(false)}
      >
        Contact
      </Link>
    </div>
  );
}

/* ---------------------------------------
   MOBILE DROPDOWN
--------------------------------------- */

function MobileDropdown({
  label,
  items,
  setMobileOpen,
}: {
  label: string;
  items: { to: string; text: string }[];
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <details className="group">
      <summary className="cursor-pointer list-none text-text-primary hover:text-primary-600 font-medium px-2 py-3 text-lg">
        {label}
      </summary>

      <div className="ml-4 mt-2 flex flex-col space-y-1">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block px-2 py-2 rounded-lg hover:bg-primary-50 text-text-primary"
            onClick={() => setMobileOpen(false)}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </details>
  );
}
