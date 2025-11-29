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
  container.className = 'flex flex-col sm:flex-row gap-4 justify-center items-center';

  // Main CTA Button
  const mainButton = document.createElement('button');
  mainButton.id = 'main-cta-button';
  mainButton.className = 'group bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3';
  mainButton.innerHTML = `
    <span>Start Now</span>
    <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  `;

  container.appendChild(mainButton);

  return container;
};

// Helper function to create trust indicators section
const createTrustIndicators = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80';

  const indicators = [
    { text: 'Certified Staff' },
    { text: 'Available 24/7' },
    { text: 'Flexible Plans' }
  ];

  indicators.forEach(indicator => {
    const indicatorDiv = document.createElement('div');
    indicatorDiv.className = 'flex items-center space-x-2';
    indicatorDiv.innerHTML = `
      <svg class="w-5 h-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>
      <span class="text-sm font-medium">${indicator.text}</span>
    `;
    container.appendChild(indicatorDiv);
  });

  return container;
};

// Helper function to render hero content section
const renderHeroContent = (): HTMLElement => {
  const heroContainer = document.createElement('div');
  heroContainer.className = 'relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8';

  // Main heading
  const heading = document.createElement('h1');
  heading.className = 'text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight';
  heading.innerHTML = 'Care with <span class="text-accent-300 block">Heart</span>';

  // Description
  const description = document.createElement('p');
  description.className = 'text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed';
  description.textContent = 'Professional and compassionate care services for your loved ones. We provide personalized attention with the warmth of a family.';

  // CTA Buttons
  const ctaContainer = createCtaButtons();

  // Trust Indicators
  const trustIndicators = createTrustIndicators();

  heroContainer.appendChild(heading);
  heroContainer.appendChild(description);
  heroContainer.appendChild(ctaContainer);
  heroContainer.appendChild(trustIndicators);

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