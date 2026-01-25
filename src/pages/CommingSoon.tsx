import { useEffect, useRef, useState } from "react";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function ComingSoon() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // -----------------------
  // COUNTDOWN LOGIC
  // -----------------------
  useEffect(() => {
    const launchDate = new Date("2025-12-01T00:00:00");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = launchDate.getTime() - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // -----------------------
  // PARTICLES LOGIC
  // -----------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Create particles - Using brand colors
    const colors = ["#662d91", "#af70af", "#e3aaaa", "#5c2883"];
    particlesRef.current = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // -----------------------
  // JSX UI
  // -----------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 relative overflow-hidden">
      {/* PARTICLES CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* HEADER */}
      <header className="relative z-10 p-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
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

          <div className="flex items-center space-x-4">
            <span className="text-sm text-olive-600">Coming Soon</span>
            <div className="w-3 h-3 bg-accent-400 rounded-full animate-pulse"></div>
          </div>
        </nav>
      </header>

      {/* MAIN */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* STATUS BADGE */}
          <div className="inline-flex items-center px-4 py-2 bg-beige-100 border border-beige-300 rounded-full text-olive-700 text-sm font-medium mb-8 animate-fade-in">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Site Under Development
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 animate-slide-up">
            <span className="gradient-bg bg-clip-text text-transparent">
              Sofy Cares
            </span>
            <br />
            <span className="text-olive-600">Services</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-olive-700 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            We are working on something amazing to transform professional care
            services.
          </p>

          {/* FEATURES */}
          <div
            className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                ),
                title: "Professional Care",
                text: "Specialized care services with qualified staff",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                title: "24/7 Availability",
                text: "Support and attention 24 hours a day",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
                title: "Total Trust",
                text: "Certified staff and guaranteed quality services",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="card p-6 rounded-xl shadow bg-white border border-beige-300"
              >
                <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {f.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  {f.title}
                </h3>
                <p className="text-olive-600 text-sm">{f.text}</p>
              </div>
            ))}
          </div>

          {/* COUNTDOWN */}
          <div
            className="mb-12 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-lg font-semibold text-olive-700 mb-4">
              Estimated launch in:
            </h3>

            <div className="flex justify-center space-x-4 text-center">
              {(["Days", "Hours", "Min", "Sec"] as const).map((label, i) => {
                const value = [
                  countdown.days,
                  countdown.hours,
                  countdown.minutes,
                  countdown.seconds,
                ][i];
                return (
                  <div
                    key={i}
                    className="bg-secondary-50 rounded-lg shadow-lg p-4 min-w-[80px] border border-beige-300"
                  >
                    <div className="text-3xl font-bold text-primary-600">
                      {String(value).padStart(2, "0")}
                    </div>
                    <div className="text-sm text-olive-600">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 text-center py-8 px-6 border-t border-beige-300 bg-secondary-50/80 backdrop-blur-sm">
        <p className="text-olive-600 text-sm">
          © 2025 Sofy Cares Services. All rights reserved.
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          {/* Social Icons */}
          <a
            href="https://www.facebook.com/sofycaressma/"
            target="_blank"
            className="text-olive-500 hover:text-primary-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/sofycaressma/"
            target="_blank"
            className="text-olive-500 hover:text-primary-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 1.8c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.042 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.059 4.04-.059zM10 5.351A4.649 4.649 0 105.351 10 4.649 4.649 0 0010 5.351zm0 1.621A3.027 3.027 0 106.973 10 3.027 3.027 0 0010 6.973zm4.865-2.392a1.081 1.081 0 11-2.162 0 1.081 1.081 0 012.162 0z" />
            </svg>
          </a>

          <a
            href="#"
            className="text-olive-500 hover:text-primary-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
