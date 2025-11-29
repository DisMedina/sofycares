import { HeaderComponent } from '../home/components/header';
import { FooterComponent } from '../../shared/components/footer';

// Contact configuration constants
// TODO: Change this email to the actual business contact email
const CONTACT_EMAIL = 'vzlamfab@gmail.com';

// Form validation patterns
const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]{10,}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{2,50}$/
};

// Form validation messages
const VALIDATION_MESSAGES = {
  required: 'Este campo es obligatorio',
  email: 'Por favor ingrese un email válido',
  phone: 'Por favor ingrese un teléfono válido',
  name: 'El nombre debe tener entre 2 y 50 caracteres',
  message: 'El mensaje debe tener al menos 10 caracteres'
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceType: string;
  preferredContact: string;
}

// Helper function to validate form fields
const validateField = (fieldName: string, value: string, isRequired: boolean = true): string | null => {
  // Check if required field is empty
  if (isRequired && (!value || value.trim().length === 0)) {
    return VALIDATION_MESSAGES.required;
  }

  // If field is empty and not required, it's valid
  if (!value || value.trim().length === 0) {
    return null;
  }

  // Field-specific validation
  switch (fieldName) {
    case 'firstName':
    case 'lastName':
      if (!VALIDATION_PATTERNS.name.test(value)) {
        return VALIDATION_MESSAGES.name;
      }
      break;
    case 'email':
      if (!VALIDATION_PATTERNS.email.test(value)) {
        return VALIDATION_MESSAGES.email;
      }
      break;
    case 'phone':
      if (!VALIDATION_PATTERNS.phone.test(value)) {
        return VALIDATION_MESSAGES.phone;
      }
      break;
    case 'message':
      if (value.length < 10) {
        return VALIDATION_MESSAGES.message;
      }
      break;
  }

  return null;
};

// Helper function to show/hide error messages
const showFieldError = (fieldElement: HTMLElement, message: string | null): void => {
  const errorElement = fieldElement.parentElement?.querySelector('.field-error') as HTMLElement;
  const inputElement = fieldElement.querySelector('input, textarea, select') as HTMLInputElement;

  if (message) {
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.remove('hidden');
    }
    inputElement?.classList.add('border-red-500');
    inputElement?.classList.remove('border-gray-300');
  } else {
    if (errorElement) {
      errorElement.classList.add('hidden');
    }
    inputElement?.classList.remove('border-red-500');
    inputElement?.classList.add('border-gray-300');
  }
};

// Helper function to handle form submission
const handleFormSubmission = (formData: ContactFormData): void => {
  // Create mailto link with form data
  const subject = encodeURIComponent(`Consulta: ${formData.subject}`);
  const body = encodeURIComponent(`
Nombre: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Teléfono: ${formData.phone}
Tipo de Servicio: ${formData.serviceType}
Método de Contacto Preferido: ${formData.preferredContact}

Mensaje:
${formData.message}
  `);

  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  
  // Try to open email client in new window/tab
  try {
    window.open(mailtoLink, '_blank');
    
    // Show success message
    showSuccessMessage();
  } catch (error) {
    console.error('Error opening email client:', error);
    showErrorMessage('Error al abrir el cliente de email. Por favor contacte directamente a: ' + CONTACT_EMAIL);
  }
};

// Helper function to show success message
const showSuccessMessage = (): void => {
  const successDiv = document.createElement('div');
  successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
  successDiv.innerHTML = `
    <div class="flex items-center space-x-2">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>Formulario enviado correctamente. Se abrirá su cliente de email.</span>
    </div>
  `;
  
  document.body.appendChild(successDiv);
  
  // Remove after 5 seconds
  setTimeout(() => {
    if (successDiv.parentElement) {
      successDiv.parentElement.removeChild(successDiv);
    }
  }, 5000);
};

// Helper function to show error message
const showErrorMessage = (message: string): void => {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
  errorDiv.innerHTML = `
    <div class="flex items-center space-x-2">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.732 15.5c-.77.833.192 2.5 1.732 2.5z"></path>
      </svg>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(errorDiv);
  
  // Remove after 7 seconds
  setTimeout(() => {
    if (errorDiv.parentElement) {
      errorDiv.parentElement.removeChild(errorDiv);
    }
  }, 7000);
};

// Helper function to create contact banner
const createContactBanner = (): HTMLElement => {
  const banner = document.createElement('section');
  banner.className = 'relative h-80 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 flex items-center justify-center overflow-hidden';

  // Background pattern
  const pattern = document.createElement('div');
  pattern.className = 'absolute inset-0 opacity-10';
  pattern.innerHTML = `
    <svg class="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="contact-grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-grid)" />
    </svg>
  `;
  banner.appendChild(pattern);

  const content = document.createElement('div');
  content.className = 'relative z-10 text-center text-white max-w-4xl mx-auto px-4';

  const title = document.createElement('h1');
  title.className = 'text-4xl md:text-5xl lg:text-6xl font-bold mb-6';
  title.textContent = 'Contáctanos';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-xl md:text-2xl text-white/90 max-w-2xl mx-auto';
  subtitle.textContent = 'Estamos aquí para ayudarte. Envíanos tu consulta y nos pondremos en contacto contigo pronto.';

  content.appendChild(title);
  content.appendChild(subtitle);
  banner.appendChild(content);

  return banner;
};

// Helper function to create contact information section
const createContactInfoSection = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'py-16 bg-gray-50';

  const container = document.createElement('div');
  container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  const title = document.createElement('h2');
  title.className = 'text-3xl font-bold text-center text-text-primary mb-12';
  title.textContent = 'Información de Contacto';

  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 md:grid-cols-3 gap-8';

  const contactItems = [
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
      </svg>`,
      title: 'Teléfono',
      content: '(123) 456-7890',
      description: 'Disponible 24/7 para emergencias'
    },
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>`,
      title: 'Email',
      content: CONTACT_EMAIL,
      description: 'Respuesta dentro de 24 horas'
    },
    {
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>`,
      title: 'Ubicación',
      content: '123 Care Street, Ciudad',
      description: 'Área de servicio metropolitana'
    }
  ];

  contactItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300';

    const iconContainer = document.createElement('div');
    iconContainer.className = 'w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4';
    iconContainer.innerHTML = item.icon;

    const title = document.createElement('h3');
    title.className = 'text-xl font-semibold text-text-primary mb-2';
    title.textContent = item.title;

    const content = document.createElement('p');
    content.className = 'text-lg font-medium text-primary-600 mb-2';
    content.textContent = item.content;

    const description = document.createElement('p');
    description.className = 'text-gray-600';
    description.textContent = item.description;

    card.appendChild(iconContainer);
    card.appendChild(title);
    card.appendChild(content);
    card.appendChild(description);
    grid.appendChild(card);
  });

  container.appendChild(title);
  container.appendChild(grid);
  section.appendChild(container);

  return section;
};

// Helper function to create the contact form
const createContactForm = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'py-16 bg-white';

  const container = document.createElement('div');
  container.className = 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8';

  const title = document.createElement('h2');
  title.className = 'text-3xl font-bold text-center text-text-primary mb-12';
  title.textContent = 'Envíanos tu Consulta';

  const form = document.createElement('form');
  form.className = 'space-y-6';
  form.id = 'contact-form';

  // Personal Information Row
  const personalRow = document.createElement('div');
  personalRow.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';

  // First Name Field
  const firstNameField = createFormField(
    'firstName',
    'Nombre *',
    'text',
    'Ingrese su nombre',
    true
  );
  personalRow.appendChild(firstNameField);

  // Last Name Field
  const lastNameField = createFormField(
    'lastName',
    'Apellido *',
    'text',
    'Ingrese su apellido',
    true
  );
  personalRow.appendChild(lastNameField);

  form.appendChild(personalRow);

  // Contact Information Row
  const contactRow = document.createElement('div');
  contactRow.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';

  // Email Field
  const emailField = createFormField(
    'email',
    'Email *',
    'email',
    'ejemplo@email.com',
    true
  );
  contactRow.appendChild(emailField);

  // Phone Field
  const phoneField = createFormField(
    'phone',
    'Teléfono',
    'tel',
    '+1 (555) 123-4567',
    false
  );
  contactRow.appendChild(phoneField);

  form.appendChild(contactRow);

  // Service and Contact Preference Row
  const serviceRow = document.createElement('div');
  serviceRow.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';

  // Service Type Select
  const serviceTypeField = createSelectField(
    'serviceType',
    'Tipo de Servicio *',
    [
      { value: '', text: 'Seleccione un servicio' },
      { value: 'personal-care', text: 'Cuidado Personal' },
      { value: 'companionship', text: 'Compañía' },
      { value: 'home-support', text: 'Apoyo Doméstico' },
      { value: 'respite-care', text: 'Cuidado de Relevo' },
      { value: 'specialized', text: 'Cuidado Especializado' },
      { value: 'consultation', text: 'Consulta General' }
    ],
    true
  );
  serviceRow.appendChild(serviceTypeField);

  // Preferred Contact Method
  const contactMethodField = createSelectField(
    'preferredContact',
    'Método de Contacto Preferido',
    [
      { value: 'email', text: 'Email' },
      { value: 'phone', text: 'Teléfono' },
      { value: 'either', text: 'Cualquiera' }
    ],
    false
  );
  contactMethodField.querySelector('select')!.value = 'email'; // Set default
  serviceRow.appendChild(contactMethodField);

  form.appendChild(serviceRow);

  // Subject Field
  const subjectField = createFormField(
    'subject',
    'Asunto *',
    'text',
    'Breve descripción de su consulta',
    true
  );
  form.appendChild(subjectField);

  // Message Field
  const messageField = createTextareaField(
    'message',
    'Mensaje *',
    'Describa detalladamente su consulta o necesidades...',
    true
  );
  form.appendChild(messageField);

  // Submit Button
  const submitContainer = document.createElement('div');
  submitContainer.className = 'flex justify-center';

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';
  submitButton.textContent = 'Enviar Consulta';

  submitContainer.appendChild(submitButton);
  form.appendChild(submitContainer);

  // Form submission handler
  form.addEventListener('submit', handleFormSubmit);

  container.appendChild(title);
  container.appendChild(form);
  section.appendChild(container);

  return section;
};

// Helper function to create form field
const createFormField = (
  name: string,
  label: string,
  type: string,
  placeholder: string,
  required: boolean
): HTMLElement => {
  const fieldContainer = document.createElement('div');
  fieldContainer.className = 'relative';

  const labelElement = document.createElement('label');
  labelElement.className = 'block text-sm font-medium text-gray-700 mb-2';
  labelElement.htmlFor = name;
  labelElement.textContent = label;

  const input = document.createElement('input');
  input.type = type;
  input.id = name;
  input.name = name;
  input.placeholder = placeholder;
  input.required = required;
  input.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200';

  const errorElement = document.createElement('div');
  errorElement.className = 'field-error hidden text-red-500 text-sm mt-1';

  // Real-time validation
  input.addEventListener('blur', () => {
    const error = validateField(name, input.value, required);
    showFieldError(fieldContainer, error);
  });

  fieldContainer.appendChild(labelElement);
  fieldContainer.appendChild(input);
  fieldContainer.appendChild(errorElement);

  return fieldContainer;
};

// Helper function to create select field
const createSelectField = (
  name: string,
  label: string,
  options: Array<{ value: string; text: string }>,
  required: boolean
): HTMLElement => {
  const fieldContainer = document.createElement('div');
  fieldContainer.className = 'relative';

  const labelElement = document.createElement('label');
  labelElement.className = 'block text-sm font-medium text-gray-700 mb-2';
  labelElement.htmlFor = name;
  labelElement.textContent = label;

  const select = document.createElement('select');
  select.id = name;
  select.name = name;
  select.required = required;
  select.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200';

  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    select.appendChild(optionElement);
  });

  const errorElement = document.createElement('div');
  errorElement.className = 'field-error hidden text-red-500 text-sm mt-1';

  // Real-time validation
  select.addEventListener('change', () => {
    if (required && !select.value) {
      showFieldError(fieldContainer, VALIDATION_MESSAGES.required);
    } else {
      showFieldError(fieldContainer, null);
    }
  });

  fieldContainer.appendChild(labelElement);
  fieldContainer.appendChild(select);
  fieldContainer.appendChild(errorElement);

  return fieldContainer;
};

// Helper function to create textarea field
const createTextareaField = (
  name: string,
  label: string,
  placeholder: string,
  required: boolean
): HTMLElement => {
  const fieldContainer = document.createElement('div');
  fieldContainer.className = 'relative';

  const labelElement = document.createElement('label');
  labelElement.className = 'block text-sm font-medium text-gray-700 mb-2';
  labelElement.htmlFor = name;
  labelElement.textContent = label;

  const textarea = document.createElement('textarea');
  textarea.id = name;
  textarea.name = name;
  textarea.placeholder = placeholder;
  textarea.required = required;
  textarea.rows = 5;
  textarea.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-vertical';

  const errorElement = document.createElement('div');
  errorElement.className = 'field-error hidden text-red-500 text-sm mt-1';

  // Real-time validation
  textarea.addEventListener('blur', () => {
    const error = validateField(name, textarea.value, required);
    showFieldError(fieldContainer, error);
  });

  fieldContainer.appendChild(labelElement);
  fieldContainer.appendChild(textarea);
  fieldContainer.appendChild(errorElement);

  return fieldContainer;
};

// Helper function to handle form submission
const handleFormSubmit = (event: Event): void => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  
  const contactData: ContactFormData = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
    serviceType: formData.get('serviceType') as string,
    preferredContact: formData.get('preferredContact') as string
  };

  // Validate all fields
  let hasErrors = false;
  const fieldValidations = [
    { name: 'firstName', value: contactData.firstName, required: true },
    { name: 'lastName', value: contactData.lastName, required: true },
    { name: 'email', value: contactData.email, required: true },
    { name: 'phone', value: contactData.phone, required: false },
    { name: 'subject', value: contactData.subject, required: true },
    { name: 'message', value: contactData.message, required: true }
  ];

  fieldValidations.forEach(validation => {
    const fieldContainer = form.querySelector(`#${validation.name}`)?.parentElement;
    if (fieldContainer) {
      const error = validateField(validation.name, validation.value, validation.required);
      if (error) {
        hasErrors = true;
        showFieldError(fieldContainer, error);
      } else {
        showFieldError(fieldContainer, null);
      }
    }
  });

  // Check service type selection
  if (!contactData.serviceType) {
    const serviceTypeContainer = form.querySelector('#serviceType')?.parentElement;
    if (serviceTypeContainer) {
      showFieldError(serviceTypeContainer, VALIDATION_MESSAGES.required);
      hasErrors = true;
    }
  }

  // If no errors, submit the form
  if (!hasErrors) {
    handleFormSubmission(contactData);
    form.reset();
  }
};

// Main Contact component
export const Contact = (): HTMLElement => {
  const contactPage = document.createElement('div');
  contactPage.className = 'min-h-screen bg-beige-50';

  // Add components
  const header = HeaderComponent();
  const banner = createContactBanner();
  const contactInfo = createContactInfoSection();
  const contactForm = createContactForm();
  const footer = FooterComponent();

  contactPage.appendChild(header);
  contactPage.appendChild(banner);
  contactPage.appendChild(contactInfo);
  contactPage.appendChild(contactForm);
  contactPage.appendChild(footer);

  return contactPage;
};