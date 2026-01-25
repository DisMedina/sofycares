import { useState } from "react";
import { Phone, Mail, MapPin, AlertTriangle, XCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';
import { useEmailUsage } from '@/hooks/useEmailUsage';

const CONTACT_EMAIL = "sofycaressma@gmail.com";

// Form is disabled - feature under development
const FORM_DISABLED = true;

const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]{10,}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{2,50}$/,
};

const VALIDATION_MESSAGES = {
  required: "This field is required",
  email: "Please enter a valid email",
  phone: "Please enter a valid phone number",
  name: "Name must be between 2 and 50 characters",
  message: "Message must be at least 10 characters",
};

// ------------------------------------
// TOAST COMPONENT
// ------------------------------------
function Toast({
  type,
  message,
}: {
  type: "success" | "error";
  message: string;
}) {
  return (
    <div
      className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white animate-fade-in
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      <div className="flex items-center space-x-2">
        {type === "success" ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
            />
          </svg>
        )}
        <span>{message}</span>
      </div>
    </div>
  );
}

// ------------------------------------
// FORM FIELD COMPONENTS
// ------------------------------------
function TextField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
  disabled,
}: any) {
  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-700 mb-2"
        htmlFor={name}
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200
          ${error ? "border-red-500" : "border-gray-300"}
          ${disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : ""}
        `}
      />

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required,
  disabled,
}: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200
          ${error ? "border-red-500" : "border-gray-300"}
          ${disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : ""}
        `}
      >
        {options.map((opt: any) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function TextAreaField({
  label,
  name,
  value,
  required,
  placeholder,
  onChange,
  error,
  disabled,
}: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        required={required}
        rows={5}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-3 border rounded-lg resize-vertical transition-colors duration-200
          ${error ? "border-red-500" : "border-gray-300"}
          ${disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : ""}
        `}
      />

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}

// ------------------------------------
// MAIN COMPONENT
// ------------------------------------
export default function Contact() {
  const emailUsage = useEmailUsage();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "",
    preferredContact: "email",
  });

  const [errors, setErrors] = useState<any>({});
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hide toast after 4 seconds
  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const validateField = (name: string, value: string) => {
    if (!value && name !== "phone") return VALIDATION_MESSAGES.required;

    switch (name) {
      case "firstName":
      case "lastName":
        if (!VALIDATION_PATTERNS.name.test(value))
          return VALIDATION_MESSAGES.name;
        break;
      case "email":
        if (!VALIDATION_PATTERNS.email.test(value))
          return VALIDATION_MESSAGES.email;
        break;
      case "phone":
        if (value && !VALIDATION_PATTERNS.phone.test(value))
          return VALIDATION_MESSAGES.phone;
        break;
      case "message":
        if (value.length < 10) return VALIDATION_MESSAGES.message;
        break;
    }

    return null;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev: any) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check if email limit is reached
    if (emailUsage.isLimitReached) {
      showToast("error", "Monthly email limit reached. Please contact us directly via phone or email.");
      return;
    }

    const newErrors: any = {};
    Object.keys(form).forEach((key) => {
      newErrors[key] = validateField(key, (form as any)[key]);
    });

    if (!form.serviceType) newErrors.serviceType = VALIDATION_MESSAGES.required;

    if (Object.values(newErrors).some((e) => e)) {
      setErrors(newErrors);
      showToast("error", "Please correct the highlighted fields.");
      return;
    }

    // EmailJS Integration
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone || 'Not provided',
          subject: form.subject,
          message: form.message,
          serviceType: form.serviceType,
          preferredContact: form.preferredContact,
          to_email: CONTACT_EMAIL
        },
        EMAILJS_CONFIG.publicKey
      );

      showToast("success", "Email sent successfully! We'll get back to you soon.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        serviceType: "",
        preferredContact: "email",
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast("error", "Failed to send email. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      {toast && <Toast type={toast.type} message={toast.message} />}

      {/* BANNER */}
      <section className="relative h-80 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We are here to help you. Send your inquiry and we will reach you
            soon.
          </p>
        </div>
      </section>

      {/* INFO */}
      <section className="py-16 bg-secondary-50">
        <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
          Contact Information
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {[
            {
              title: "Phone",
              content: "+52 415 117 7643",
              desc: "Available 24/7",
              icon: Phone,
            },
            {
              title: "Email",
              content: CONTACT_EMAIL,
              desc: "Response within 24 hours",
              icon: Mail,
            },
            {
              title: "Location",
              content: "Juan José Torres Landa Torre A",
              desc: "37797 San Miguel de Allende, Gto.",
              icon: MapPin,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-primary-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition border border-primary-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-200 flex items-center justify-center text-primary-700">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-primary-600 font-medium">{item.content}</p>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 bg-accent-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
            Send Us Your Inquiry
          </h2>

          {/* Form Disabled Notice */}
          {FORM_DISABLED && (
            <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">
                    Contact Form Coming Soon
                  </h3>
                  <p className="text-blue-700 mb-3">
                    Our online contact form is currently under development. Please reach out to us directly using the contact information above.
                  </p>
                  <div className="space-y-2 text-blue-800">
                    <p className="font-medium">📧 Email: {CONTACT_EMAIL}</p>
                    <p className="font-medium">📞 Phone: +52 415 117 7643</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Email Usage Warnings */}
          {emailUsage.isLimitReached && (
            <div className="mb-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">
                    Contact Form Temporarily Unavailable
                  </h3>
                  <p className="text-red-700 mb-3">
                    We've reached our monthly email limit ({emailUsage.used}/{emailUsage.limit} emails sent).
                    Please contact us directly using the information below:
                  </p>
                  <div className="space-y-2 text-red-800">
                    <p className="font-medium">📧 Email: {CONTACT_EMAIL}</p>
                    <p className="font-medium">📞 Phone: +52 415 117 7643</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {emailUsage.isCriticalLevel && !emailUsage.isLimitReached && (
            <div className="mb-8 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-orange-800 mb-2">
                    High Email Usage Alert
                  </h3>
                  <p className="text-orange-700">
                    We're approaching our monthly email limit ({emailUsage.used}/{emailUsage.limit} emails sent).
                    If you need an immediate response, please call us at +52 415 117 7643.
                  </p>
                </div>
              </div>
            </div>
          )}

          {emailUsage.isWarningLevel && !emailUsage.isCriticalLevel && (
            <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-yellow-800">
                    <strong>Note:</strong> We're experiencing high email volume ({emailUsage.used}/{emailUsage.limit} emails sent this month).
                    Your message will be delivered, but for urgent matters, please call +52 415 117 7643.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PERSONAL INFO */}
            <div className="grid md:grid-cols-2 gap-6">
              <TextField
                label="First Name *"
                name="firstName"
                placeholder="Enter your first name"
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
                required
                disabled={FORM_DISABLED}
              />

              <TextField
                label="Last Name *"
                name="lastName"
                placeholder="Enter your last name"
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
                disabled={FORM_DISABLED}
              />
            </div>

            {/* CONTACT */}
            <div className="grid md:grid-cols-2 gap-6">
              <TextField
                label="Email *"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
                disabled={FORM_DISABLED}
              />

              <TextField
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                disabled={FORM_DISABLED}
              />
            </div>

            {/* SERVICE INFO */}
            <div className="grid md:grid-cols-2 gap-6">
              <SelectField
                label="Service Type *"
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                required
                error={errors.serviceType}
                disabled={FORM_DISABLED}
                options={[
                  { value: "", text: "Select a service" },
                  { value: "personal-care", text: "Personal Care" },
                  { value: "companionship", text: "Companionship" },
                  { value: "home-support", text: "Home Support" },
                  { value: "respite-care", text: "Respite Care" },
                  { value: "specialized", text: "Specialized Care" },
                  { value: "consultation", text: "General Consultation" },
                ]}
              />

              <SelectField
                label="Preferred Contact Method"
                name="preferredContact"
                value={form.preferredContact}
                onChange={handleChange}
                disabled={FORM_DISABLED}
                options={[
                  { value: "email", text: "Email" },
                  { value: "phone", text: "Phone" },
                  { value: "either", text: "Either" },
                ]}
              />
            </div>

            {/* SUBJECT */}
            <TextField
              label="Subject *"
              name="subject"
              placeholder="Brief description of your inquiry"
              value={form.subject}
              onChange={handleChange}
              error={errors.subject}
              required
              disabled={FORM_DISABLED}
            />

            {/* MESSAGE */}
            <TextAreaField
              label="Message *"
              name="message"
              placeholder="Describe your inquiry in detail"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              required
              disabled={FORM_DISABLED}
            />

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={FORM_DISABLED || isSubmitting || emailUsage.isLimitReached}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {FORM_DISABLED
                  ? 'Coming Soon'
                  : emailUsage.isLimitReached
                  ? 'Form Unavailable - Contact Us Directly'
                  : isSubmitting
                  ? 'Sending...'
                  : 'Send Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
