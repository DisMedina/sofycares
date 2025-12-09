import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const DonateStickyButton = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("emergency-info-bar");
    if (!el) return;

    targetRef.current = el;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <button
      onClick={() => navigate("/founder")}
      className={`
        fixed bottom-6 right-6 z-50
        px-6 py-3 rounded-2xl font-semibold tracking-wide text-white
        bg-accent-500 hover:bg-accent-600 active:bg-accent-700

        shadow-lg hover:shadow-xl
        transition-all duration-300

        backdrop-blur-sm

        ${
          visible
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }

        hover:-translate-y-1 hover:scale-[1.08]
        active:translate-y-0 active:scale-95
      `}
    >
      💖 Donate
    </button>
  );
};

export default DonateStickyButton;
