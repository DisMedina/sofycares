import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

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
    <nav className="relative z-10 bg-white/90 backdrop-blur-sm shadow-md border-b border-beige-200">
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
  const navItems = [
    {
      text: "Living Options",
      to: "#",
      hasDropdown: true,
      dropdownItems: [
        { text: "Independent Living", to: "/independent-living" },
        { text: "Assisted Living", to: "/assisted-living" },
      ],
    },
    { text: "About Us", to: "/about", hasDropdown: false },
    {
      text: "Healthcare Services",
      to: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          text: "Health & Medical Services",
          to: "/services#health-medical-services",
        },
        { text: "Levels of Care", to: "/services#levels-of-care" },
        { text: "Services & Amenities", to: "/services#services-amenities" },
      ],
    },
    { text: "Events", to: "/events", hasDropdown: false },
    { text: "Gallery", to: "/gallery", hasDropdown: false },
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
        CONTACT
      </Link>
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
  return (
    <div
      id="mobile-menu"
      className="min-[950px]:hidden bg-white/95 rounded-lg mt-2 shadow-lg border border-beige-200 p-4 space-y-3"
    >
      {/* MENU ITEMS */}
      <MobileDropdown
        label="Living Options"
        items={[
          { to: "/independent-living", text: "Independent Living" },
          { to: "/assisted-living", text: "Assisted Living" },
        ]}
        setMobileOpen={setMobileOpen}
      />

      <Link
        to="/about"
        className="block px-2 py-3 rounded-lg hover:bg-primary-50 text-text-primary text-lg font-medium"
        onClick={() => setMobileOpen(false)}
      >
        About Us
      </Link>

      <MobileDropdown
        label="Healthcare Services"
        items={[
          {
            to: "/services#health-medical-services",
            text: "Health & Medical Services",
          },
          { to: "/services#levels-of-care", text: "Levels of Care" },
          { to: "/services#services-amenities", text: "Services & Amenities" },
        ]}
        setMobileOpen={setMobileOpen}
      />

      <Link
        to="/events"
        className="block px-2 py-3 rounded-lg hover:bg-primary-50 text-text-primary text-lg font-medium"
        onClick={() => setMobileOpen(false)}
      >
        Events
      </Link>

      <Link
        to="/gallery"
        className="block px-2 py-3 rounded-lg hover:bg-primary-50 text-text-primary text-lg font-medium"
        onClick={() => setMobileOpen(false)}
      >
        Gallery
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
