// Assisted Living View
export const AssistedLivingView = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16';

  const title = document.createElement('h1');
  title.className = 'text-4xl font-bold text-accent-700 mb-6 text-center';
  title.textContent = 'Assisted Living';
  section.appendChild(title);

  const desc = document.createElement('p');
  desc.className = 'text-lg text-text-secondary mb-6 leading-relaxed text-center';
  desc.textContent = 'Assisted living at Sofy Cares is designed to feel like home, not a hospital. We provide personalized support with daily activities, medication management, and compassionate care. Residents benefit from social activities, outings, and a variety of services that foster independence and well-being.';
  section.appendChild(desc);

  const benefits = document.createElement('ul');
  benefits.className = 'mb-6 max-w-2xl mx-auto text-left list-disc pl-6 text-text-secondary';
  [
    'Feels like home, not a hospital',
    'Personalized care and support',
    'Social activities and outings',
    'Services for residents and their families',
    'Safe, comfortable environment'
  ].forEach(benefit => {
    const li = document.createElement('li');
    li.textContent = benefit;
    benefits.appendChild(li);
  });
  section.appendChild(benefits);

  const imgRow = document.createElement('div');
  imgRow.className = 'flex flex-wrap justify-center gap-6 mb-8';
  ['https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
   'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80'].forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'w-80 h-56 object-cover rounded-xl shadow-lg';
    img.alt = 'Assisted Living Space';
    imgRow.appendChild(img);
  });
  section.appendChild(imgRow);

  return section;
};
