// EmergencyInfo.ts
// Reusable emergency info component for all views

export const EmergencyInfoComponent = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'w-full bg-primary-50 border-b border-primary-200 py-6 flex flex-col items-center';

  const title = document.createElement('h2');
  title.className = 'text-2xl font-bold text-primary-900 mb-2';
  title.textContent = 'Phone Directory';

  const generalInfo = document.createElement('p');
  generalInfo.className = 'text-lg text-text-primary mb-1';
  generalInfo.innerHTML = '<strong>General Information:</strong> <a href="tel:+1234567890" class="text-primary-700 hover:underline">(123) 456-7890</a>';

  const emergencyInfo = document.createElement('p');
  emergencyInfo.className = 'text-lg text-red-700';
  emergencyInfo.innerHTML = '<strong>Emergency:</strong> <a href="tel:+1987654321" class="text-red-700 hover:underline">(987) 654-3210</a>';

  section.appendChild(title);
  section.appendChild(generalInfo);
  section.appendChild(emergencyInfo);

  return section;
};
