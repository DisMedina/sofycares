import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmergencyInfo2: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section
      id="emergency-info-bar"
      className="w-full bg-primary-50 border-b border-primary-200 py-0.5 px-6 relative z-50"
    >
      {/* Contenedor principal */}
      <div className="flex items-center justify-between w-full">
        {/* Phone Directory (left) */}
        <div
          className={`cursor-pointer select-none flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-300 ${
            open
              ? "bg-primary-900 text-primary-50"
              : "bg-transparent text-primary-900"
          }`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <h2 className="text-lg font-bold">Phone Directory</h2>

          {/* Icono triangulo */}
          <span
            className={`inline-block rounded-sm px-1 text-sm transition-transform duration-300 ease-in-out
              text-accent-500 ${open ? "rotate-180" : "rotate-0"}`}
          >
            ▲
          </span>
        </div>

        {/* Donate button (right) */}
        <button
          className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg font-medium transition"
          onClick={() => navigate("/founder")}
        >
          Donate
        </button>
      </div>

      {/* Dropdown */}
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`absolute left-0 top-full w-[400px] z-50 origin-top overflow-hidden transition-all duration-500 ease-in-out rounded-b-lg
            ${
              open
                ? "max-h-48 opacity-100 scale-y-100"
                : "max-h-0 opacity-0 scale-y-0"
            }
        `}
      >
        <div className="flex flex-col">
          {/* General Info */}
          <div className="bg-primary-100 px-4 py-2 hover:bg-primary-200 transition-colors shadow-md">
            <p className="text-lg text-text-primary">
              <strong>General Information:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="text-primary-700 hover:underline"
              >
                (123) 456-7890
              </a>
            </p>
          </div>

          {/* Emergency */}
          <div className="bg-primary-100 px-4 py-2 hover:bg-primary-200 transition-colors shadow-md">
            <p className="text-lg text-red-700">
              <strong>Emergency:</strong>{" "}
              <a
                href="tel:+1987654321"
                className="text-red-700 hover:underline"
              >
                (987) 654-3210
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyInfo2;
