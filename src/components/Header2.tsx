import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header2() {
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
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-text-primary">Sofy Cares</h1>
          </div>
          {/* DESKTOP NAV */}
          <DesktopNavigation />
          {/* MOBILE TOGGLE */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-text-primary hover:text-primary-600 p-3 rounded-lg focus:outline-none"
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
    { text: "Assisted Living", to: "#", hasDropdown: true },
    { text: "Lifestyle Options", to: "#", hasDropdown: true },
    { text: "About Us", to: "/about", hasDropdown: true },
    { text: "Healthcare Services", to: "#", hasDropdown: true },
    { text: "Events", to: "#", hasDropdown: true },
    { text: "Gallery", to: "#", hasDropdown: false },
  ];

  return (
    <div className="hidden md:flex flex-1 items-center justify-between">
      {/* CENTER MENU */}
      <div className="flex flex-1 justify-center">
        <ul className="flex items-center space-x-4 text-base text-center font-medium">
          {navItems.map((item) => (
            <li key={item.text} className="relative group">
              {/* ITEM */}
              <Link
                to={item.to}
                className="
                  py-1
                  text-text-primary
                  transition-colors duration-200
                  hover:bg-primary-50
                  rounded-md
                "
              >
                {item.text}
              </Link>

              {/* DROPDOWN */}
              {item.hasDropdown && (
                <div
                  className="
                    absolute left-1/2 -translate-x-1/2 mt-2
                    bg-white rounded-lg shadow-lg border border-beige-200 
                    opacity-0 pointer-events-none translate-y-3
                    transition-all duration-300
                    group-hover:opacity-100 group-hover:pointer-events-auto
                    group-hover:translate-y-0
                    w-48 py-3 z-50
                  "
                >
                  <Link
                    className="block px-4 py-2 hover:bg-primary-50 text-text-primary"
                    to="#"
                  >
                    Item 1
                  </Link>
                  <Link
                    className="block px-4 py-2 hover:bg-primary-50 text-text-primary"
                    to="#"
                  >
                    Item 2
                  </Link>
                  <Link
                    className="block px-4 py-2 hover:bg-primary-50 text-text-primary"
                    to="#"
                  >
                    Item 3
                  </Link>
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
  const navItems = [
    { text: "Assisted Living", to: "#" },
    { text: "Lifestyle Options", to: "#" },
    { text: "About Us", to: "/about" },
    { text: "Healthcare Services", to: "#" },
    { text: "Events", to: "#" },
    { text: "Gallery", to: "#" },
  ];

  return (
    <div
      id="mobile-menu"
      className="md:hidden bg-white/95 rounded-lg mt-2 shadow-lg border border-beige-200 p-4 space-y-3"
    >
      {/* MENU ITEMS */}
      {navItems.map((item) => (
        <Link
          key={item.text}
          to={item.to}
          className="block px-2 py-3 rounded-lg hover:bg-primary-50 text-text-primary text-lg font-medium"
          onClick={() => setMobileOpen(false)}
        >
          {item.text}
        </Link>
      ))}

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
