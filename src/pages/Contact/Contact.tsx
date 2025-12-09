import { useState } from "react";

const CONTACT_EMAIL = "vzlamfab@gmail.com";

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
        className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200
          ${error ? "border-red-500" : "border-gray-300"}
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
        className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200
          ${error ? "border-red-500" : "border-gray-300"}
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
        className={`w-full px-4 py-3 border rounded-lg resize-vertical transition-colors duration-200
          ${error ? "border-red-500" : "border-gray-300"}
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

  const handleSubmit = (e: any) => {
    e.preventDefault();

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

    // MAILTO
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Inquiry: " + form.subject
    )}&body=${encodeURIComponent(`
Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Phone: ${form.phone}
Service Type: ${form.serviceType}
Preferred Contact: ${form.preferredContact}

Message:
${form.message}
    `)}`;

    window.location.href = mailtoLink;

    showToast("success", "Form sent! Your email client will open now.");
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
  };

  return (
    <div className="min-h-screen bg-beige-50">
      {toast && <Toast type={toast.type} message={toast.message} />}

      {/* BANNER */}
      <section className="relative h-80 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 flex items-center justify-center overflow-hidden">
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
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
          Contact Information
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {[
            {
              title: "Phone",
              content: "(123) 456-7890",
              desc: "Available 24/7",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28l1.5 4.5-2.25 1.1a11 11 0 005.5 5.5l1.1-2.25 4.5 1.5V19a2 2 0 01-2 2H6C4 21 3 14 3 6V5z"
                />
              ),
            },
            {
              title: "Email",
              content: CONTACT_EMAIL,
              desc: "Response within 24 hours",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.9 4.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              ),
            },
            {
              title: "Location",
              content: "123 Care Street, City",
              desc: "Metropolitan area",
              icon: (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z"
                  />
                  <circle cx="12" cy="10" r="3" />
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-primary-600 font-medium">{item.content}</p>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
            Send Us Your Inquiry
          </h2>

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
              />

              <TextField
                label="Last Name *"
                name="lastName"
                placeholder="Enter your last name"
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
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
              />

              <TextField
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
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
            />

            <div className="flex justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
