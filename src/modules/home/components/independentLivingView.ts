// Independent Living View
export const IndependentLivingView = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16';

  const title = document.createElement('h1');
  title.className = 'text-4xl font-bold text-text-primary mb-6 text-center';
  title.textContent = 'Independent Living';
  section.appendChild(title);

  const desc = document.createElement('p');
  desc.className = 'text-lg text-text-secondary mb-8 leading-relaxed text-center';
  desc.textContent = 'Our independent living spaces offer a vibrant, maintenance-free lifestyle for seniors who value freedom and community. Residents enjoy spacious accommodations, beautiful common areas, and access to amenities and activities designed for independent living.';
  section.appendChild(desc);

  const imgRow = document.createElement('div');
  imgRow.className = 'flex flex-wrap justify-center gap-6 mb-8';
  ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
   'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80'].forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'w-80 h-56 object-cover rounded-xl shadow-lg';
    img.alt = 'Independent Living Space';
    imgRow.appendChild(img);
  });
  section.appendChild(imgRow);

  return section;
};
