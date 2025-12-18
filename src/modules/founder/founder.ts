// ? Components
import { HeaderComponent } from '../home/components/header';
import { FooterComponent } from '../../shared/components/footer';

// Helper function to create image carousel (on the right side)
const createFounderImageCarousel = (): HTMLElement => {
  const carousel = document.createElement('div');
  carousel.className = 'relative h-full';

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  alt: 'Sofia Martinez - Founder of Sofy Cares'
    },
    {
      src: 'https://images.unsplash.com/photo-1594824475317-8c78e1b0b157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  alt: 'Sofia Martinez at work'
    },
    {
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  alt: 'Sofia Martinez with the team'
    },
    {
      src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  alt: 'Sofia Martinez - Leader in health care'
    }
  ];

  // Create image container
  const imageContainer = document.createElement('div');
  imageContainer.className = 'overflow-hidden rounded-2xl shadow-2xl h-full';

  // Create images wrapper
  const imagesWrapper = document.createElement('div');
  imagesWrapper.className = 'relative h-full';
  imagesWrapper.id = 'founder-carousel-wrapper';

  images.forEach((imageData, index) => {
    const imageDiv = document.createElement('div');
    imageDiv.className = `absolute inset-0 transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
    imageDiv.setAttribute('data-index', index.toString());

    const image = document.createElement('img');
    image.src = imageData.src;
    image.alt = imageData.alt;
    image.className = 'w-full h-full object-cover';

    imageDiv.appendChild(image);
    imagesWrapper.appendChild(imageDiv);
  });

  // Create navigation dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10';

  images.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `w-3 h-3 rounded-full transition-colors duration-200 ${index === 0 ? 'bg-white' : 'bg-white/50'}`;
    dot.setAttribute('data-index', index.toString());
    dotsContainer.appendChild(dot);
  });

  imageContainer.appendChild(imagesWrapper);
  imageContainer.appendChild(dotsContainer);
  carousel.appendChild(imageContainer);

  return carousel;
};

// Helper function to create founder content (on the left side)
const createFounderContent = (): HTMLElement => {
  const content = document.createElement('div');
  content.className = 'space-y-8';

  // Title
  const title = document.createElement('h1');
  title.className = 'text-4xl lg:text-5xl font-bold text-text-primary mb-8';
  title.textContent = 'Our Founder';

  // Subtitle with name
  const subtitle = document.createElement('h2');
  subtitle.className = 'text-2xl font-semibold text-primary-600 mb-6';
  subtitle.textContent = 'Sofia Martinez - CEO & Founder';

  // Personal story section
  const personalSection = document.createElement('div');
  const personalTitle = document.createElement('h3');
  personalTitle.className = 'text-xl font-semibold text-text-primary mb-4';
  personalTitle.textContent = 'Her Personal Story';

  const personalText = document.createElement('p');
  personalText.className = 'text-lg text-text-secondary leading-relaxed';
  personalText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  personalSection.appendChild(personalTitle);
  personalSection.appendChild(personalText);

  // Professional background section
  const professionalSection = document.createElement('div');
  const professionalTitle = document.createElement('h3');
  professionalTitle.className = 'text-xl font-semibold text-text-primary mb-4';
  professionalTitle.textContent = 'Professional Experience';

  const professionalText1 = document.createElement('p');
  professionalText1.className = 'text-lg text-text-secondary leading-relaxed mb-4';
  professionalText1.textContent = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.';

  const professionalText2 = document.createElement('p');
  professionalText2.className = 'text-lg text-text-secondary leading-relaxed';
  professionalText2.textContent = 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.';

  professionalSection.appendChild(professionalTitle);
  professionalSection.appendChild(professionalText1);
  professionalSection.appendChild(professionalText2);

  // Vision section
  const visionSection = document.createElement('div');
  const visionTitle = document.createElement('h3');
  visionTitle.className = 'text-xl font-semibold text-text-primary mb-4';
  visionTitle.textContent = 'Her Vision for Sofy Cares';

  const visionText = document.createElement('p');
  visionText.className = 'text-lg text-text-secondary leading-relaxed';
  visionText.textContent = 'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.';

  visionSection.appendChild(visionTitle);
  visionSection.appendChild(visionText);

  // Achievements list
  const achievementsSection = document.createElement('div');
  const achievementsTitle = document.createElement('h3');
  achievementsTitle.className = 'text-xl font-semibold text-text-primary mb-4';
  achievementsTitle.textContent = 'Achievements and Recognitions';

  const achievementsList = document.createElement('ul');
  achievementsList.className = 'space-y-3 text-lg text-text-secondary';

  const achievements = [
    'Lorem ipsum dolor sit amet consectetur',
    'Adipiscing elit sed do eiusmod tempor',
    'Incididunt ut labore et dolore magna',
    'Aliqua enim ad minim veniam quis'
  ];

  achievements.forEach(achievement => {
    const listItem = document.createElement('li');
    listItem.className = 'flex items-start space-x-3';
    listItem.innerHTML = `
      <svg class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>
      <span>${achievement}</span>
    `;
    achievementsList.appendChild(listItem);
  });

  achievementsSection.appendChild(achievementsTitle);
  achievementsSection.appendChild(achievementsList);

  // Donation CTA Button
  const ctaButton = document.createElement('button');
  ctaButton.className = 'bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center space-x-3';
  ctaButton.innerHTML = `
    <span>Donate Here</span>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  `;

  content.appendChild(title);
  content.appendChild(subtitle);
  content.appendChild(personalSection);
  content.appendChild(professionalSection);
  content.appendChild(visionSection);
  content.appendChild(achievementsSection);
  content.appendChild(ctaButton);

  return content;
};

// Helper function to set up carousel functionality for founder page
const setupFounderCarouselEventListeners = (container: HTMLElement): void => {
  const wrapper = container.querySelector('#founder-carousel-wrapper');
  const dots = container.querySelectorAll('[data-index]');
  
  if (!wrapper) return;

  let currentIndex = 0;
  const totalImages = wrapper.children.length;

  // Auto-rotate carousel
  const autoRotate = () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  };

  const updateCarousel = () => {
    // Update images
    Array.from(wrapper.children).forEach((child, index) => {
      const element = child as HTMLElement;
      element.style.opacity = index === currentIndex ? '1' : '0';
    });

    // Update dots
    dots.forEach((dot, index) => {
      const button = dot as HTMLButtonElement;
      button.className = `w-3 h-3 rounded-full transition-colors duration-200 ${
        index === currentIndex ? 'bg-white' : 'bg-white/50'
      }`;
    });
  };

  // Set up dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Auto-rotate every 4 seconds
  setInterval(autoRotate, 4000);
};

const Founder = (): HTMLElement => {
  // Create main container
  const container = document.createElement('div');
  container.className = 'min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50';

  // Create header
  const header = document.createElement('header');
  const headerElement = HeaderComponent();
  header.appendChild(headerElement);

  // Create main content
  const main = document.createElement('main');
  main.className = 'pt-20 pb-16';

  const contentContainer = document.createElement('div');
  contentContainer.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid lg:grid-cols-2 gap-12 items-start';

  // Left side - Founder content (text)
  const contentSection = document.createElement('div');
  contentSection.className = 'bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-beige-200';
  
  const founderContent = createFounderContent();
  contentSection.appendChild(founderContent);

  // Right side - Image carousel
  const imageSection = document.createElement('div');
  imageSection.className = 'sticky top-24 h-[600px]';
  
  const carousel = createFounderImageCarousel();
  imageSection.appendChild(carousel);

  gridContainer.appendChild(contentSection);
  gridContainer.appendChild(imageSection);
  contentContainer.appendChild(gridContainer);
  main.appendChild(contentContainer);

  // Create footer
  const footer = document.createElement('footer');
  const footerElement = FooterComponent();
  footer.appendChild(footerElement);

  // Append all sections to container
  container.appendChild(header);
  container.appendChild(main);
  container.appendChild(footer);

  // Set up carousel functionality
  setupFounderCarouselEventListeners(container);

  return container;
};

export default Founder;