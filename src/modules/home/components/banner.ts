// Helper function to set up event listeners for the banner
const setupBannerEventListeners = (banner: HTMLElement): void => {
  const mainCtaButton = banner.querySelector('#main-cta-button') as HTMLButtonElement;

  if (mainCtaButton) {
    mainCtaButton.addEventListener('click', () => {
      console.log('Main CTA clicked - will redirect to contact/services');
      // TODO: Add navigation logic when routing is implemented
    });
  }
};

// Helper function to render the background image section
const renderBackgroundImage = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'absolute inset-0 z-0';

  const overlay = document.createElement('div');
  overlay.className = 'w-full h-full bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-accent-600/60 absolute inset-0 z-10';

  const image = document.createElement('img');
  image.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80';
  image.alt = 'Healthcare professional caring for elderly patient';
  image.className = 'w-full h-full object-cover';
  image.loading = 'eager';

  container.appendChild(overlay);
  container.appendChild(image);

  return container;
};

// Helper function to create CTA buttons section
const createCtaButtons = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'flex flex-col items-center gap-4';

  // Common button style
  const buttonClass = 'bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 flex items-center space-x-2';

  // Top row: two buttons
  const topRow = document.createElement('div');
  topRow.className = 'flex flex-row gap-4 justify-center';

  // Watch Full Video Button
  const videoButton = document.createElement('button');
  videoButton.className = buttonClass;
  videoButton.innerHTML = `<span>Watch Full Video</span>`;
  videoButton.addEventListener('click', () => {
    // TODO: Add video modal or navigation logic
    console.log('Watch Full Video clicked');
  });
  topRow.appendChild(videoButton);

  // Schedule a Visit Button
  const visitButton = document.createElement('button');
  visitButton.className = buttonClass;
  visitButton.innerHTML = `<span>Schedule a Visit</span>`;
  visitButton.addEventListener('click', () => {
    // TODO: Add scheduling logic
    console.log('Schedule a Visit clicked');
  });
  topRow.appendChild(visitButton);

  // Bottom row: one button centered
  const bottomRow = document.createElement('div');
  bottomRow.className = 'flex justify-center mt-2';

  const contactButton = document.createElement('button');
  contactButton.className = buttonClass;
  contactButton.innerHTML = `<span>Contact Us</span>`;
  contactButton.addEventListener('click', () => {
    // TODO: Add contact logic
    console.log('Contact Us clicked');
  });
  bottomRow.appendChild(contactButton);

  container.appendChild(topRow);
  container.appendChild(bottomRow);

  return container;
};

// Helper function to create trust indicators section
const createTrustIndicators = (): HTMLElement => {
  // Removed trust indicators section
  return document.createElement('div');
};

// Helper function to render hero content section
const renderHeroContent = (): HTMLElement => {
  const heroContainer = document.createElement('div');
  heroContainer.className = 'relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8';

  // Only CTA Buttons (no heading, description, trust indicators)
  const ctaContainer = createCtaButtons();
  heroContainer.appendChild(ctaContainer);

  return heroContainer;
};

// Helper function to render scroll indicator
const renderScrollIndicator = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20';

  const bounceDiv = document.createElement('div');
  bounceDiv.className = 'animate-bounce';
  bounceDiv.innerHTML = `
    <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  `;

  container.appendChild(bounceDiv);
  return container;
};

// Pure functional component (React-like)
export const BannerComponent = (): HTMLElement => {
  const banner = document.createElement('div');
  banner.className = 'relative min-h-screen flex items-center justify-center overflow-hidden';

  const backgroundImage = renderBackgroundImage();
  banner.appendChild(backgroundImage);

  const heroContent = renderHeroContent();
  banner.appendChild(heroContent);

  const scrollIndicator = renderScrollIndicator();
  banner.appendChild(scrollIndicator);

  // Set up event listeners
  setupBannerEventListeners(banner);

  return banner;
};