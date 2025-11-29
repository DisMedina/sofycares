// Helper function for event listeners
const setupEventListeners = (navElement: HTMLElement): void => {
  const mobileMenuToggle = navElement.querySelector('#mobile-menu-toggle') as HTMLElement;
  const mobileMenu = navElement.querySelector('#mobile-menu') as HTMLElement;

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    if (mobileMenu && !mobileMenu.contains(event.target as Node) && !mobileMenuToggle?.contains(event.target as Node)) {
      mobileMenu.classList.add('hidden');
    }
  });
};

// Pure functional component (React-like)
export const HeaderComponent = (): HTMLElement => {
  const nav = document.createElement('nav');
  nav.className = 'relative z-10 bg-white/90 backdrop-blur-sm shadow-lg border-b border-beige-200';

  const maxWidthDiv = document.createElement('div');
  maxWidthDiv.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  const flexContainer = document.createElement('div');
  flexContainer.className = 'flex justify-between items-center h-16';

  // Logo Section
  const logoSection = createLogoSection();
  flexContainer.appendChild(logoSection);

  // Desktop Navigation
  const desktopNav = createDesktopNavigation();
  flexContainer.appendChild(desktopNav);

  // Mobile Menu Button
  const mobileMenuButton = createMobileMenuButton();
  flexContainer.appendChild(mobileMenuButton);

  maxWidthDiv.appendChild(flexContainer);

  // Mobile Navigation
  const mobileMenu = createMobileMenu();
  maxWidthDiv.appendChild(mobileMenu);

  nav.appendChild(maxWidthDiv);

  // Set up event listeners
  setupEventListeners(nav);

  return nav;
  };

  const createLogoSection = (): HTMLElement => {
    const logoDiv = document.createElement('div');
    logoDiv.className = 'flex items-center space-x-3 cursor-pointer';

    const logoContainer = document.createElement('div');
    logoContainer.className = 'w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center';
    logoContainer.innerHTML = `
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    `;

    const title = document.createElement('h1');
    title.className = 'text-2xl font-bold text-text-primary';
    title.textContent = 'Sofy Cares';

    // Add click event to navigate to home
    logoDiv.addEventListener('click', () => {
      (window as any).navigateTo('/');
    });

    logoDiv.appendChild(logoContainer);
    logoDiv.appendChild(title);

    return logoDiv;
  };

  const createDesktopNavigation = (): HTMLElement => {
    const nav = document.createElement('div');
    nav.className = 'hidden md:flex items-center space-x-8';

    const navItems = [
      { href: '/', text: 'Home' },
      { href: '/about', text: 'About Us' },
      { href: '/services', text: 'Services' },
      { href: '/contact', text: 'Contact' }
    ];

    navItems.forEach(item => {
      const link = document.createElement('a');
      link.href = item.href;
      link.className = 'text-text-primary hover:text-primary-600 transition-colors duration-200 font-medium';
      link.textContent = item.text;
      
      // Add navigation event listener for routed pages
      if (item.href.startsWith('/')) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          (window as any).navigateTo(item.href);
        });
      }
      
      nav.appendChild(link);
    });

    const ctaButton = document.createElement('button');
    ctaButton.className = 'bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200';
  ctaButton.textContent = 'Donate';
    ctaButton.addEventListener('click', () => {
      (window as any).navigateTo('/founder');
    });
    nav.appendChild(ctaButton);

    return nav;
  };

  const createMobileMenuButton = (): HTMLElement => {
    const container = document.createElement('div');
    container.className = 'md:hidden';

    const button = document.createElement('button');
    button.id = 'mobile-menu-toggle';
    button.className = 'text-text-primary hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-2';
    button.innerHTML = `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    `;

    container.appendChild(button);
    return container;
  };

  const createMobileMenu = (): HTMLElement => {
    const menu = document.createElement('div');
    menu.id = 'mobile-menu';
    menu.className = 'hidden md:hidden bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg border border-beige-200';

    const menuContainer = document.createElement('div');
    menuContainer.className = 'px-4 py-3 space-y-3';

    const navItems = [
      { href: '/', text: 'Home' },
      { href: '/about', text: 'About Us' },
      { href: '/services', text: 'Services' },
      { href: '/contact', text: 'Contact' }
    ];

    navItems.forEach(item => {
      const link = document.createElement('a');
      link.href = item.href;
      link.className = 'block text-text-primary hover:text-primary-600 transition-colors duration-200 font-medium py-2';
      link.textContent = item.text;
      
      // Add navigation event listener for routed pages
      if (item.href.startsWith('/')) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          (window as any).navigateTo(item.href);
        });
      }
      
      menuContainer.appendChild(link);
    });

    const ctaButton = document.createElement('button');
    ctaButton.className = 'w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 mt-2';
  ctaButton.textContent = 'Donate';
    ctaButton.addEventListener('click', () => {
      (window as any).navigateTo('/founder');
    });
    menuContainer.appendChild(ctaButton);

    menu.appendChild(menuContainer);
    return menu;
  };

