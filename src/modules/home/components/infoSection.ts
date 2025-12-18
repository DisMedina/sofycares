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
  section.className = 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20';

  // Title
  const heading = document.createElement('h2');
  heading.className = 'text-4xl font-bold text-text-primary mb-6 text-center';
  heading.textContent = 'Discover Sofy Cares: Your Trusted Assisted Living Partner';
  section.appendChild(heading);

  // Introductory paragraph covering all requested topics
  const intro = document.createElement('p');
  intro.className = 'text-lg text-text-secondary mb-8 leading-relaxed text-center';
  intro.textContent = `Located in the heart of our community, Sofy Cares is dedicated to providing exceptional assisted living services tailored to the needs of every resident. We offer a variety of living options, including independent and assisted living, as well as specialized memory care and nursing care. Our comprehensive services and amenities include comfortable accommodations, nutritious dining, engaging activities, and access to medical care. Residents enjoy a vibrant activity calendar, opportunities for social connection, and a welcoming environment that fosters well-being and peace of mind. Learn more about our community, our commitment to quality care, and how Sofy Cares can support you or your loved ones.`;
  section.appendChild(intro);

  // Read More button
  const readMoreButton = document.createElement('button');
  readMoreButton.className = 'bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 mx-auto block';
  readMoreButton.innerHTML = `
    <span>Read More</span>
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  `;
  readMoreButton.addEventListener('click', () => {
    (window as any).navigateTo('/about');
  });
  section.appendChild(readMoreButton);

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

  // Service cards: Independent Living, Assisted Living, Levels of Care
  const independentLivingCard = createServiceCard(
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>',
    'text-primary-600',
    'bg-primary-100',
    'Independent Living',
    'Enjoy a vibrant, maintenance-free lifestyle with access to amenities, activities, and a supportive community designed for independent seniors.'
  );

  const assistedLivingCard = createServiceCard(
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>',
    'text-accent-600',
    'bg-accent-100',
    'Assisted Living',
    'Personalized support with daily activities, medication management, and compassionate care in a safe, comfortable environment.'
  );

  const levelsOfCareCard = createServiceCard(
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6"></path>',
    'text-sage-600',
    'bg-sage-100',
    'Levels of Care',
    'From independent living to specialized nursing and memory care, we offer a full spectrum of services tailored to individual needs.'
  );

  servicesGrid.appendChild(independentLivingCard);
  servicesGrid.appendChild(assistedLivingCard);
  servicesGrid.appendChild(levelsOfCareCard);

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

  // Recognitions/Awards Section
  const awardsSection = document.createElement('section');
  awardsSection.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12';

  const awardsTitle = document.createElement('h2');
  awardsTitle.className = 'text-3xl lg:text-4xl font-bold text-accent-700 mb-6 text-center';
  awardsTitle.textContent = 'Recognitions & Awards';
  awardsSection.appendChild(awardsTitle);

  const awardsDesc = document.createElement('p');
  awardsDesc.className = 'text-lg text-text-secondary mb-8 leading-relaxed text-center';
  awardsDesc.textContent = 'Sofy Cares is proud to be recognized for excellence in senior care and community service. Our certifications and awards reflect our commitment to quality, safety, and compassion.';
  awardsSection.appendChild(awardsDesc);

  const awardsGrid = document.createElement('div');
  awardsGrid.className = 'flex flex-wrap justify-center gap-8';

  const awards = [
    {
      title: 'Certified Senior Care Provider',
      img: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
      desc: 'National certification for excellence in senior care.'
    },
    {
      title: 'Community Service Award',
      img: 'https://cdn-icons-png.flaticon.com/512/190/190406.png',
      desc: 'Recognized for outstanding service to the local community.'
    },
    {
      title: 'Health & Safety Excellence',
      img: 'https://cdn-icons-png.flaticon.com/512/190/190408.png',
      desc: 'Awarded for maintaining the highest standards in health and safety.'
    }
  ];

  awards.forEach(award => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-72';
    const img = document.createElement('img');
    img.src = award.img;
    img.alt = award.title;
    img.className = 'w-16 h-16 mb-4';
    card.appendChild(img);
    const cardTitle = document.createElement('h3');
    cardTitle.className = 'text-xl font-semibold text-text-primary mb-2 text-center';
    cardTitle.textContent = award.title;
    card.appendChild(cardTitle);
    const cardDesc = document.createElement('p');
    cardDesc.className = 'text-text-secondary text-center';
    cardDesc.textContent = award.desc;
    card.appendChild(cardDesc);
    awardsGrid.appendChild(card);
  });

  awardsSection.appendChild(awardsGrid);
  infoSection.appendChild(awardsSection);

  // Location Map & Contact Section
  const locationSection = document.createElement('section');
  locationSection.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12';

  const locationTitle = document.createElement('h2');
  locationTitle.className = 'text-3xl lg:text-4xl font-bold text-primary-700 mb-6 text-center';
  locationTitle.textContent = 'Our Location & Contact';
  locationSection.appendChild(locationTitle);

  // Flex row for contact info and map
  const locationRow = document.createElement('div');
  locationRow.className = 'flex flex-col md:flex-row items-center md:items-start justify-center gap-8 mb-8';

  // Contact Info (left)
  const contactDiv = document.createElement('div');
  contactDiv.className = 'flex flex-col items-start gap-4 md:w-1/2';

  const address = document.createElement('p');
  address.className = 'text-lg text-text-primary';
  address.innerHTML = '<strong>Address:</strong> 123 Main St, Springfield, USA';
  contactDiv.appendChild(address);

  const email = document.createElement('p');
  email.className = 'text-lg text-text-primary';
  email.innerHTML = '<strong>Email:</strong> <a href="mailto:info@sofycares.com" class="text-primary-600 underline">info@sofycares.com</a>';
  contactDiv.appendChild(email);

  const phone = document.createElement('p');
  phone.className = 'text-lg text-text-primary';
  phone.innerHTML = '<strong>Phone:</strong> <a href="tel:+1234567890" class="text-primary-600 underline">+1 (234) 567-890</a>';
  contactDiv.appendChild(phone);

  // Map (right)
  const mapDiv = document.createElement('div');
  mapDiv.className = 'md:w-1/2 flex justify-center';
  const mapIframe = document.createElement('iframe');
  mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363155047!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sSofy%20Cares!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus';
  mapIframe.width = '600';
  mapIframe.height = '350';
  mapIframe.style.border = '0';
  mapIframe.allowFullscreen = true;
  mapIframe.loading = 'lazy';
  mapIframe.referrerPolicy = 'no-referrer-when-downgrade';
  mapDiv.appendChild(mapIframe);

  locationRow.appendChild(contactDiv);
  locationRow.appendChild(mapDiv);
  locationSection.appendChild(locationRow);
  infoSection.appendChild(locationSection);

  // Set up event listeners
  setupInfoSectionEventListeners(infoSection);

  return infoSection;
};