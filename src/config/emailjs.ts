// EmailJS Configuration

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Email usage limits
export const EMAIL_LIMITS = {
  FREE_TIER_LIMIT: 200,
  WARNING_THRESHOLD: 180, // Show warning at 90%
  CRITICAL_THRESHOLD: 195 // Show critical warning at 97.5%
};
