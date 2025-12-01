import { JSX } from "react";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  bgColor,
  iconColor,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-beige-200 hover:shadow-xl transition-shadow duration-300">
      <div
        className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center mb-6`}
      >
        <div className={`w-8 h-8 ${iconColor}`}>{icon}</div>
      </div>

      <h3 className="text-xl font-semibold text-text-primary mb-4">{title}</h3>

      <p className="text-text-secondary mb-6">{description}</p>

      <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
        <span>More info</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  );
}
