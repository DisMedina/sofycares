// Levels of Care View
export const LevelsOfCareView = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16';

  const title = document.createElement('h1');
  title.className = 'text-4xl font-bold text-sage-700 mb-6 text-center';
  title.textContent = 'Levels of Care';
  section.appendChild(title);

  const desc = document.createElement('p');
  desc.className = 'text-lg text-text-secondary mb-6 leading-relaxed text-center';
  desc.textContent = 'We offer a full spectrum of care options to meet every need, from assisted living to specialized memory care and rehabilitation.';
  section.appendChild(desc);

  const levelsList = document.createElement('ul');
  levelsList.className = 'mb-6 max-w-2xl mx-auto text-left list-disc pl-6 text-text-secondary';
  [
    { name: 'Assisted Living', href: '/levels/assisted-living' },
    { name: 'Memory Care', href: '/levels/memory-care' },
    { name: 'Short-term Rehabilitation', href: '/levels/short-term-rehab' },
    { name: 'Long-term Rehabilitation', href: '/levels/long-term-rehab' }
  ].forEach(level => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = level.href;
    link.className = 'text-primary-600 hover:text-primary-700 underline';
    link.textContent = level.name;
    li.appendChild(link);
    levelsList.appendChild(li);
  });
  section.appendChild(levelsList);

  const imgRow = document.createElement('div');
  imgRow.className = 'flex flex-wrap justify-center gap-6 mb-8';
  ['https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
   'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80'].forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'w-80 h-56 object-cover rounded-xl shadow-lg';
    img.alt = 'Levels of Care';
    imgRow.appendChild(img);
  });
  section.appendChild(imgRow);

  return section;
};
