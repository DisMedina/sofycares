// Helper function to set up event listeners for the info section
const setupInfoSectionEventListeners = (infoSection: HTMLElement): void => {
  // Add event listeners for buttons and links
  const buttons = infoSection.querySelectorAll('button, a[href="#"]');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const buttonText = button.textContent?.trim();
      
          // Navigate to About page for "Learn More" button
          if (buttonText === 'Learn More') {
            (window as any).navigateTo('/about');
          }
          // Navigate to Services page for "More Info" buttons
          else if (buttonText === 'More Info') {
            (window as any).navigateTo('/services');
          }
          // Navigate to Services page for "View All Services" button
          else if (buttonText === 'View All Services') {
            (window as any).navigateTo('/services');
          }
          // Navigate to Founder page for "See Her Story" button
          else if (buttonText === 'See Her Story') {
            (window as any).navigateTo('/founder');
      } else {
        console.log('Button clicked:', buttonText);
        // TODO: Add navigation logic for other buttons when implemented
      }
    });
  });
};

// Helper function to render the about section
const renderAboutSection = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20';

  const container = document.createElement('div');
  container.className = 'grid lg:grid-cols-2 gap-12 items-center';

  // Content side
  const contentDiv = document.createElement('div');
  contentDiv.className = 'order-2 lg:order-1';

  const contentCard = document.createElement('div');
  contentCard.className = 'bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-beige-200';

  const heading = document.createElement('h2');
  heading.className = 'text-3xl lg:text-4xl font-bold text-text-primary mb-6';
    heading.textContent = 'About Us';

  const paragraph1 = document.createElement('p');
  paragraph1.className = 'text-lg text-text-secondary mb-6 leading-relaxed';
    paragraph1.textContent = 'At Sofy Cares, we believe that every person deserves quality care with dignity and respect. We are a family business dedicated to providing personal care and professional companionship services for seniors and people who need special assistance.';

  const paragraph2 = document.createElement('p');
  paragraph2.className = 'text-lg text-text-secondary mb-8 leading-relaxed';
    paragraph2.textContent = 'Our team is made up of certified and trained professionals who understand the importance of creating a safe, comfortable, and loving environment for our clients and their families.';

  const button = document.createElement('button');
  button.className = 'bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2';
  button.innerHTML = `
      <span>Learn More</span>
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  `;

  contentCard.appendChild(heading);
  contentCard.appendChild(paragraph1);
  contentCard.appendChild(paragraph2);
  contentCard.appendChild(button);
  contentDiv.appendChild(contentCard);

  // Image side
  const imageDiv = document.createElement('div');
  imageDiv.className = 'order-1 lg:order-2';

  const image = document.createElement('img');
  image.src = 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    image.alt = 'Professional caregiver helping a senior';
  image.className = 'w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl';

  imageDiv.appendChild(image);

  container.appendChild(contentDiv);
  container.appendChild(imageDiv);
  section.appendChild(container);

  return section;
};

// Helper function to create a service card
const createServiceCard = (iconPath: string, iconColor: string, bgColor: string, title: string, description: string): HTMLElement => {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-2xl shadow-lg p-8 border border-beige-200 hover:shadow-xl transition-shadow duration-300';

  const iconContainer = document.createElement('div');
  iconContainer.className = `w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center mb-6`;

  const icon = document.createElement('svg');
  icon.className = `w-8 h-8 ${iconColor}`;
  icon.setAttribute('fill', 'none');
  icon.setAttribute('stroke', 'currentColor');
  icon.setAttribute('viewBox', '0 0 24 24');
  icon.innerHTML = iconPath;

  iconContainer.appendChild(icon);

  const heading = document.createElement('h3');
  heading.className = 'text-xl font-semibold text-text-primary mb-4';
  heading.textContent = title;

  const paragraph = document.createElement('p');
  paragraph.className = 'text-text-secondary mb-6';
  paragraph.textContent = description;

  const link = document.createElement('a');
  link.href = '#';
  link.className = 'text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2';
  link.innerHTML = `
    <span>Más información</span>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  `;

  card.appendChild(iconContainer);
  card.appendChild(heading);
  card.appendChild(paragraph);
  card.appendChild(link);

  return card;
};

// Helper function to render the services section
const renderServicesSection = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'bg-gradient-to-br from-sage-50 to-secondary-50 py-16';

  const container = document.createElement('div');
  container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  // Header
  const headerDiv = document.createElement('div');
  headerDiv.className = 'text-center mb-12';

  const heading = document.createElement('h2');
  heading.className = 'text-3xl lg:text-4xl font-bold text-text-primary mb-4';
    heading.textContent = 'Our Services';

  const description = document.createElement('p');
  description.className = 'text-lg text-text-secondary max-w-2xl mx-auto';
    description.textContent = 'We offer a wide range of care services designed to meet the unique needs of each client and their family.';

  headerDiv.appendChild(heading);
  headerDiv.appendChild(description);

  // Services grid
  const servicesGrid = document.createElement('div');
  servicesGrid.className = 'grid md:grid-cols-2 lg:grid-cols-3 gap-8';

  // Service cards
  const personalCareCard = createServiceCard(
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>',
    'text-primary-600',
    'bg-primary-100',
      'Personal Care',
      'Assistance with daily activities such as bathing, dressing, eating, and mobility. Our caregivers provide respectful and professional support.'
  );

  const companionshipCard = createServiceCard(
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>',
    'text-accent-600',
    'bg-accent-100',
      'Companionship',
      'Companionship services to combat loneliness and isolation. Includes conversation, recreational activities, and accompaniment.'
  );

  const homeSupportCard = createServiceCard(
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
    'text-sage-600',
    'bg-sage-100',
      'Home Support',
      'Help with household chores, meal preparation, shopping, and organization to maintain a clean and safe environment.'
  );

  servicesGrid.appendChild(personalCareCard);
  servicesGrid.appendChild(companionshipCard);
  servicesGrid.appendChild(homeSupportCard);

  // CTA button
  const ctaDiv = document.createElement('div');
  ctaDiv.className = 'text-center mt-12';

  const ctaButton = document.createElement('button');
  ctaButton.className = 'bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200';
    ctaButton.textContent = 'View All Services';

  ctaDiv.appendChild(ctaButton);

  container.appendChild(headerDiv);
  container.appendChild(servicesGrid);
  container.appendChild(ctaDiv);
  section.appendChild(container);

  return section;
};

// Helper function to render the founder section
const renderFounderSection = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16';

  const container = document.createElement('div');
  container.className = 'grid lg:grid-cols-2 gap-12 items-center';

  // Image side
  const imageDiv = document.createElement('div');
  const image = document.createElement('img');
  image.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    image.alt = 'Founder of Sofy Cares';
  image.className = 'w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl';
  imageDiv.appendChild(image);

  // Content side
  const contentDiv = document.createElement('div');
  const contentCard = document.createElement('div');
  contentCard.className = 'bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-beige-200';

  const heading = document.createElement('h2');
  heading.className = 'text-3xl lg:text-4xl font-bold text-text-primary mb-6';
    heading.textContent = 'Our Founder';

  const paragraph1 = document.createElement('p');
  paragraph1.className = 'text-lg text-text-secondary mb-6 leading-relaxed';
    paragraph1.textContent = 'Sofia Martinez founded Sofy Cares with a clear vision: to provide the same level of care she would want for her own family. With more than 15 years of experience in the health and senior care sector.';

  const paragraph2 = document.createElement('p');
  paragraph2.className = 'text-lg text-text-secondary mb-6 leading-relaxed';
    paragraph2.textContent = 'Her passion for helping others and her commitment to excellence led her to create a company distinguished by its personalized approach and genuine dedication to the well-being of every client.';

  // Profile section
  const profileDiv = document.createElement('div');
  profileDiv.className = 'flex items-center space-x-4 mb-6';

  const avatarDiv = document.createElement('div');
  avatarDiv.className = 'flex-shrink-0';

  const avatar = document.createElement('div');
  avatar.className = 'w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center';
  const avatarText = document.createElement('span');
  avatarText.className = 'text-primary-600 font-bold text-lg';
  avatarText.textContent = 'SM';
  avatar.appendChild(avatarText);
  avatarDiv.appendChild(avatar);

  const profileInfo = document.createElement('div');
  const name = document.createElement('p');
  name.className = 'text-lg font-semibold text-text-primary';
    name.textContent = 'Sofia Martinez';
  const title = document.createElement('p');
  title.className = 'text-text-secondary';
    title.textContent = 'Founder & CEO';
  profileInfo.appendChild(name);
  profileInfo.appendChild(title);

  profileDiv.appendChild(avatarDiv);
  profileDiv.appendChild(profileInfo);

  const button = document.createElement('button');
  button.className = 'bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2';
  button.innerHTML = `
      <span>See Her Story</span>
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  `;

  contentCard.appendChild(heading);
  contentCard.appendChild(paragraph1);
  contentCard.appendChild(paragraph2);
  contentCard.appendChild(profileDiv);
  contentCard.appendChild(button);
  contentDiv.appendChild(contentCard);

  container.appendChild(imageDiv);
  container.appendChild(contentDiv);
  section.appendChild(container);

  return section;
};

// Pure functional component (React-like)
export const InfoSectionComponent = (): HTMLElement => {
  const infoSection = document.createElement('div');
  infoSection.className = 'py-16 lg:py-24';

  const aboutSection = renderAboutSection();
  infoSection.appendChild(aboutSection);

  const servicesSection = renderServicesSection();
  infoSection.appendChild(servicesSection);

  const founderSection = renderFounderSection();
  infoSection.appendChild(founderSection);

  // Set up event listeners
  setupInfoSectionEventListeners(infoSection);

  return infoSection;
};