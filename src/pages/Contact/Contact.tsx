import { useState } from "react";
import { Phone, Mail, MapPin, AlertTriangle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";
import { useEmailUsage } from "@/hooks/useEmailUsage";
import { useLang } from "@/i18n/LanguageContext";
import type { TranslationSchema } from "@/i18n/types";

const CONTACT_EMAIL = "sofycaressma@gmail.com";

type FormStatus = "idle" | "sending" | "success" | "error";
type ContactCopy = TranslationSchema["pages"]["contact"];

const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]{10,}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{2,50}$/,
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
  const { t } = useLang();
  const c: ContactCopy = t.pages.contact;

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
  const [status, setStatus] = useState<FormStatus>("idle");
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const validateField = (name: string, value: string) => {
    if (!value && name !== "phone") return c.validation.required;

    switch (name) {
      case "firstName":
      case "lastName":
        if (!VALIDATION_PATTERNS.name.test(value)) return c.validation.name;
        break;
      case "email":
        if (!VALIDATION_PATTERNS.email.test(value)) return c.validation.email;
        break;
      case "phone":
        if (value && !VALIDATION_PATTERNS.phone.test(value))
          return c.validation.phone;
        break;
      case "message":
        if (value.length < 10) return c.validation.message;
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

    if (emailUsage.isLimitReached) {
      showToast("error", c.toast.limitReached);
      return;
    }

    const newErrors: any = {};
    Object.keys(form).forEach((key) => {
      newErrors[key] = validateField(key, (form as any)[key]);
    });

    if (!form.serviceType) newErrors.serviceType = c.validation.required;

    if (Object.values(newErrors).some((e) => e)) {
      setErrors(newErrors);
      showToast("error", c.toast.validationError);
      return;
    }

    setStatus("sending");

    const serviceTypeLabels: Record<string, string> = {
      "personal-care": c.submitLabels.serviceType.personalCare,
      companionship: c.submitLabels.serviceType.companionship,
      "home-support": c.submitLabels.serviceType.homeSupport,
      "respite-care": c.submitLabels.serviceType.respiteCare,
      specialized: c.submitLabels.serviceType.specialized,
      consultation: c.submitLabels.serviceType.consultation,
    };

    const preferredContactLabels: Record<string, string> = {
      email: c.submitLabels.preferredContact.email,
      phone: c.submitLabels.preferredContact.phone,
      either: c.submitLabels.preferredContact.either,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone || c.submitLabels.phoneNotProvided,
          subject: form.subject,
          message: form.message,
          service_type:
            serviceTypeLabels[form.serviceType] || form.serviceType,
          preferred_contact:
            preferredContactLabels[form.preferredContact] ||
            form.preferredContact,
          to_email: CONTACT_EMAIL,
        },
        EMAILJS_CONFIG.publicKey
      );

      setStatus("success");
      showToast("success", c.toast.successSent);
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
      console.error("EmailJS Error:", error);
      setStatus("error");
      showToast("error", c.toast.sendFailed);
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
          <h1 className="text-5xl font-bold mb-4">{c.banner.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {c.banner.subtitle}
          </p>
        </div>
      </section>

      {/* INFO */}
      <section className="py-16 bg-secondary-50">
        <h2 className="text-3xl font-bold text-center font-allura text-primary-500 mb-12">
          {c.info.sectionTitle}
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {[
            {
              title: c.info.phoneTitle,
              content: c.info.phoneContent,
              desc: c.info.phoneDesc,
              icon: Phone,
            },
            {
              title: c.info.emailTitle,
              content: CONTACT_EMAIL,
              desc: c.info.emailDesc,
              icon: Mail,
            },
            {
              title: c.info.locationTitle,
              content: c.info.locationContent,
              desc: c.info.locationDesc,
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
          <h2 className="text-3xl font-bold text-center font-allura text-primary-500 mb-12">
            {c.form.sectionTitle}
          </h2>

          {/* Email Usage Warnings */}
          {emailUsage.isLimitReached && (
            <div className="mb-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">
                    {c.limits.unavailableTitle}
                  </h3>
                  <p className="text-red-700 mb-3">
                    {c.limits.unavailableBodyPrefix}
                    {emailUsage.used}/{emailUsage.limit}
                    {c.limits.unavailableBodySuffix}
                  </p>
                  <div className="space-y-2 text-red-800">
                    <p className="font-medium">
                      {c.limits.unavailableEmailLabel}
                      {CONTACT_EMAIL}
                    </p>
                    <p className="font-medium">
                      {c.limits.unavailablePhoneLabel}
                      {c.limits.unavailablePhone}
                    </p>
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
                    {c.limits.criticalTitle}
                  </h3>
                  <p className="text-orange-700">
                    {c.limits.criticalBodyPrefix}
                    {emailUsage.used}/{emailUsage.limit}
                    {c.limits.criticalBodySuffix}
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
                    <strong>{c.limits.warningPrefix}</strong>
                    {c.limits.warningBodyPrefix}
                    {emailUsage.used}/{emailUsage.limit}
                    {c.limits.warningBodySuffix}
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PERSONAL INFO */}
            <div className="grid md:grid-cols-2 gap-6">
              <TextField
                label={c.form.firstNameLabel}
                name="firstName"
                placeholder={c.form.firstNamePlaceholder}
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
                required
              />

              <TextField
                label={c.form.lastNameLabel}
                name="lastName"
                placeholder={c.form.lastNamePlaceholder}
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
              />
            </div>

            {/* CONTACT */}
            <div className="grid md:grid-cols-2 gap-6">
              <TextField
                label={c.form.emailLabel}
                name="email"
                type="email"
                placeholder={c.form.emailPlaceholder}
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              <TextField
                label={c.form.phoneLabel}
                name="phone"
                type="tel"
                placeholder={c.form.phonePlaceholder}
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>

            {/* SERVICE INFO */}
            <div className="grid md:grid-cols-2 gap-6">
              <SelectField
                label={c.form.serviceTypeLabel}
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                required
                error={errors.serviceType}
                options={[
                  { value: "", text: c.form.serviceTypeOptions.select },
                  {
                    value: "personal-care",
                    text: c.form.serviceTypeOptions.personalCare,
                  },
                  {
                    value: "companionship",
                    text: c.form.serviceTypeOptions.companionship,
                  },
                  {
                    value: "home-support",
                    text: c.form.serviceTypeOptions.homeSupport,
                  },
                  {
                    value: "respite-care",
                    text: c.form.serviceTypeOptions.respiteCare,
                  },
                  {
                    value: "specialized",
                    text: c.form.serviceTypeOptions.specialized,
                  },
                  {
                    value: "consultation",
                    text: c.form.serviceTypeOptions.consultation,
                  },
                ]}
              />

              <SelectField
                label={c.form.preferredContactLabel}
                name="preferredContact"
                value={form.preferredContact}
                onChange={handleChange}
                options={[
                  {
                    value: "email",
                    text: c.form.preferredContactOptions.email,
                  },
                  {
                    value: "phone",
                    text: c.form.preferredContactOptions.phone,
                  },
                  {
                    value: "either",
                    text: c.form.preferredContactOptions.either,
                  },
                ]}
              />
            </div>

            {/* SUBJECT */}
            <TextField
              label={c.form.subjectLabel}
              name="subject"
              placeholder={c.form.subjectPlaceholder}
              value={form.subject}
              onChange={handleChange}
              error={errors.subject}
              required
            />

            {/* MESSAGE */}
            <TextAreaField
              label={c.form.messageLabel}
              name="message"
              placeholder={c.form.messagePlaceholder}
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              required
            />

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === "sending" || emailUsage.isLimitReached}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {emailUsage.isLimitReached
                  ? c.form.unavailableButton
                  : status === "sending"
                  ? c.form.sendingButton
                  : c.form.sendButton}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
