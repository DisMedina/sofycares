// EmailJS Configuration
// Sign up at https://www.emailjs.com/ to get your credentials

export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
  privateKey: 'YOUR_PRIVATE_KEY' // Optional: For usage tracking only
};

// Email usage limits
export const EMAIL_LIMITS = {
  FREE_TIER_LIMIT: 200,
  WARNING_THRESHOLD: 180, // Show warning at 90%
  CRITICAL_THRESHOLD: 195 // Show critical warning at 97.5%
};
