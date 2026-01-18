// Footer.tsx

const socialLinks = [
  {
    href: "#",
    icon: "M24 4.557c-.883.392-1.832.656-2.828.775...",
  },
  {
    href: "https://www.facebook.com/sofycaresservices",
    icon: "M24 12.073c0-6.627-5.373-12-12-12S0...",
    target: "_blank",
  },
  {
    href: "https://www.instagram.com/sofycaresservices",
    icon: "M12.017 0C5.396 0 .029 5.367.029 11.987...",
    target: "_blank",
  },
  {
    href: "#",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328...",
  },
];

const quickLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About Us" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
  { href: "#careers", text: "Careers" },
];

const servicesList = [
  { href: "/independent-living", text: "Independent Living" },
  { href: "/assisted-living", text: "Assisted Living" },
  { href: "/services#health-medical-services", text: "Health & Medical Services" },
  { href: "/services#levels-of-care", text: "Levels of Care" },
  { href: "/services#services-amenities", text: "Services & Amenities" },
];

const legalLinks = [
  { href: "#privacy", text: "Privacy Policy" },
  { href: "#terms", text: "Terms of Service" },
  { href: "#accessibility", text: "Accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-text-primary via-primary-900 to-primary-800 text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 1. Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="/logo/logo-tll.svg"
                alt="Sofy Cares"
                className="h-12"
              />
            </div>

            <p className="text-white/80 mb-6 leading-relaxed">
              We provide personal care and professional companionship services
              with the love and attention your family deserves.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.target}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={s.icon}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("/")) {
                        e.preventDefault();
                        (window as any).navigateTo(link.href);
                      }
                    }}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {servicesList.map((service, i) => (
                <li key={i}>
                  <a
                    href={service.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-accent-300 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <p className="text-white/80">
                  Juan José Torres Landa No. 14
                  <br />
                  San Miguel de Allende, GTO 37797
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-accent-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <a
                  href="tel:4151177643"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  415 117 7643
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-accent-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <a
                  href="mailto:sofycaressma@gmail.com"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  sofycaressma@gmail.com
                </a>
              </div>

              <div className="mt-6">
                <p className="text-accent-300 font-medium mb-2">
                  Available 24/7
                </p>
                <p className="text-white/80 text-sm">
                  Always here when you need us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-text-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 Sofy Cares Services. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              {legalLinks.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  {l.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
