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
    <nav className="relative z-10 bg-white/90 backdrop-blur-sm shadow-lg border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
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

            <h1 className="text-2xl font-bold text-text-primary">Sofy Cares</h1>
          </div>

          {/* DESKTOP */}
          <DesktopNavigation />

          {/* MOBILE TOGGLE */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-text-primary hover:text-primary-600 p-2 rounded-lg focus:outline-none"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <svg
              className="w-6 h-6"
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

/* --------------------------
   DESKTOP NAVIGATION
-------------------------- */
function DesktopNavigation() {
  const navigate = useNavigate();

  const navItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="text-text-primary hover:text-primary-600 transition font-medium"
        >
          {item.text}
        </Link>
      ))}

      <button
        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition"
        onClick={() => navigate("/founder")}
      >
        Donate
      </button>
    </div>
  );
}

/* --------------------------
   MOBILE MENU
-------------------------- */
function MobileMenu({
  setMobileOpen,
}: {
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <div
      id="mobile-menu"
      className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg border border-beige-200 p-4"
    >
      <div className="flex flex-col space-y-2">
        <MobileDropdown
          label="Why choose Assisted Living"
          items={[
            { to: "/services", text: "Services" },
            { to: "/food", text: "Food" },
            { to: "/amenities", text: "Amenities" },
            { to: "/personalized-care", text: "Personalized Care" },
          ]}
          setMobileOpen={setMobileOpen}
        />

        <MobileDropdown
          label="Living Options"
          items={[
            { to: "/independent", text: "Independent Living" },
            { to: "/assisted", text: "Assisted Living" },
          ]}
          setMobileOpen={setMobileOpen}
        />

        <MobileDropdown
          label="About"
          items={[
            { to: "/about", text: "Our Story" },
            { to: "/team", text: "Meet the Team" },
          ]}
          setMobileOpen={setMobileOpen}
        />

        <MobileDropdown
          label="Health Services"
          items={[
            { to: "/health", text: "Medical Care" },
            { to: "/wellness", text: "Wellness Programs" },
          ]}
          setMobileOpen={setMobileOpen}
        />

        <MobileDropdown
          label="Events"
          items={[
            { to: "/events", text: "Upcoming Events" },
            { to: "/calendar", text: "Event Calendar" },
          ]}
          setMobileOpen={setMobileOpen}
        />

        <MobileDropdown
          label="Gallery"
          items={[
            { to: "/gallery", text: "Photo Gallery" },
            { to: "/virtual-tour", text: "Virtual Tour" },
          ]}
          setMobileOpen={setMobileOpen}
        />

        <MobileDropdown
          label="Contact"
          items={[
            { to: "/contact", text: "Contact Form" },
            { to: "/location", text: "Location & Hours" },
          ]}
          setMobileOpen={setMobileOpen}
        />

        <button
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 mt-2"
          onClick={() => {
            setMobileOpen(false);
            window.location.href = "/founder";
          }}
        >
          Donate
        </button>
      </div>
    </div>
  );
}

/* --------------------------
   MOBILE DROPDOWN
-------------------------- */
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
      <summary className="cursor-pointer list-none text-text-primary hover:text-primary-600 font-medium px-2 py-1">
        {label}
      </summary>

      <div className="ml-4 mt-2 flex flex-col space-y-1">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block px-2 py-1 rounded-lg hover:bg-primary-50 text-text-primary"
            onClick={() => setMobileOpen(false)}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </details>
  );
}
