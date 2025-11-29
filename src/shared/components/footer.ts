// Helper function to set up event listeners
const setupFooterEventListeners = (footer: HTMLElement): void => {
  // Add event listeners for footer links
  const links = footer.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      console.log('Footer navigation clicked:', href);
      // TODO: Add navigation logic when routing is implemented
    });
  });

  // Handle phone and email links (these should work normally)
  const phoneLinks = footer.querySelectorAll('a[href^="tel:"]');
  const emailLinks = footer.querySelectorAll('a[href^="mailto:"]');
  
  phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log('Phone link clicked:', link.getAttribute('href'));
    });
  });

  emailLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log('Email link clicked:', link.getAttribute('href'));
    });
  });
};

// Pure functional component (React-like)
export const FooterComponent = (): HTMLElement => {
  const footer = document.createElement('footer');
  footer.className = 'bg-gradient-to-br from-text-primary via-primary-900 to-primary-800 text-white';

  // Main Footer Content
  const mainContent = document.createElement('div');
  mainContent.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16';

  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12';

  // Company Info Section
  const companyInfo = createCompanyInfoSection();
  grid.appendChild(companyInfo);

  // Quick Links Section
  const quickLinks = createQuickLinksSection();
  grid.appendChild(quickLinks);

  // Services Section
  const services = createServicesSection();
  grid.appendChild(services);

  // Contact Info Section
  const contactInfo = createContactInfoSection();
  grid.appendChild(contactInfo);

  mainContent.appendChild(grid);
  footer.appendChild(mainContent);

  // Bottom Bar
  const bottomBar = createBottomBar();
  footer.appendChild(bottomBar);

  // Set up event listeners on the footer element
  setupFooterEventListeners(footer);

  return footer;
};

  const createCompanyInfoSection = (): HTMLElement => {
    const section = document.createElement('div');
    section.className = 'lg:col-span-1';

    const header = document.createElement('div');
    header.className = 'flex items-center space-x-3 mb-6';

    const logo = document.createElement('div');
    logo.className = 'w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center';
    logo.innerHTML = `
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    `;

    const title = document.createElement('h3');
    title.className = 'text-2xl font-bold';
    title.textContent = 'Sofy Cares';

    header.appendChild(logo);
    header.appendChild(title);

    const description = document.createElement('p');
    description.className = 'text-white/80 mb-6 leading-relaxed';
    description.textContent = 'Brindamos servicios de cuidado personal y compañía profesional con el amor y la atención que su familia merece.';

    const socialLinks = createSocialLinks();

    section.appendChild(header);
    section.appendChild(description);
    section.appendChild(socialLinks);

    return section;
  };

  const createSocialLinks = (): HTMLElement => {
    const container = document.createElement('div');
    container.className = 'flex space-x-4';

    const socialData = [
      { href: '#', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
      { href: 'https://www.facebook.com/sofycaresservices', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', target: '_blank' },
      { href: 'https://www.instagram.com/sofycaresservices', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001z', target: '_blank' },
      { href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z' }
    ];

    socialData.forEach(social => {
      const link = document.createElement('a');
      link.href = social.href;
      if (social.target) link.target = social.target;
      link.className = 'w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200';
      link.innerHTML = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="${social.icon}"/></svg>`;
      container.appendChild(link);
    });

    return container;
  };

  const createQuickLinksSection = (): HTMLElement => {
    const section = document.createElement('div');
    section.className = 'lg:col-span-1';

    const title = document.createElement('h4');
    title.className = 'text-lg font-semibold mb-6';
    title.textContent = 'Enlaces Rápidos';

    const list = document.createElement('ul');
    list.className = 'space-y-4';

    const links = [
      { href: '/', text: 'Inicio' },
      { href: '/about', text: 'Nosotros' },
      { href: '/services', text: 'Servicios' },
      { href: '/contact', text: 'Contacto' },
      { href: '#careers', text: 'Trabaja con Nosotros' }
    ];

    links.forEach(linkData => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = linkData.href;
      link.className = 'text-white/80 hover:text-white transition-colors duration-200';
      link.textContent = linkData.text;
      
      // Add navigation event listener for routed pages
      if (linkData.href.startsWith('/')) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          (window as any).navigateTo(linkData.href);
        });
      }
      
      li.appendChild(link);
      list.appendChild(li);
    });

    section.appendChild(title);
    section.appendChild(list);
    return section;
  };

  const createServicesSection = (): HTMLElement => {
    const section = document.createElement('div');
    section.className = 'lg:col-span-1';

    const title = document.createElement('h4');
    title.className = 'text-lg font-semibold mb-6';
    title.textContent = 'Servicios';

    const list = document.createElement('ul');
    list.className = 'space-y-4';

    const services = [
      { href: '#personal-care', text: 'Cuidado Personal' },
      { href: '#companionship', text: 'Compañía' },
      { href: '#home-support', text: 'Apoyo Doméstico' },
      { href: '#respite-care', text: 'Cuidado de Relevo' },
      { href: '#specialized', text: 'Cuidado Especializado' }
    ];

    services.forEach(service => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = service.href;
      link.className = 'text-white/80 hover:text-white transition-colors duration-200';
      link.textContent = service.text;
      li.appendChild(link);
      list.appendChild(li);
    });

    section.appendChild(title);
    section.appendChild(list);
    return section;
  };

  const createContactInfoSection = (): HTMLElement => {
    const section = document.createElement('div');
    section.className = 'lg:col-span-1';

    const title = document.createElement('h4');
    title.className = 'text-lg font-semibold mb-6';
    title.textContent = 'Contacto';

    const contactContainer = document.createElement('div');
    contactContainer.className = 'space-y-4';

    // Address
    const addressDiv = document.createElement('div');
    addressDiv.className = 'flex items-start space-x-3';
    addressDiv.innerHTML = `
      <svg class="w-5 h-5 text-accent-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      <p class="text-white/80">123 Care Street<br>Ciudad, Estado 12345</p>
    `;

    // Phone
    const phoneDiv = document.createElement('div');
    phoneDiv.className = 'flex items-center space-x-3';
    const phoneSvg = document.createElement('svg');
    phoneSvg.className = 'w-5 h-5 text-accent-300 flex-shrink-0';
    phoneSvg.setAttribute('fill', 'none');
    phoneSvg.setAttribute('stroke', 'currentColor');
    phoneSvg.setAttribute('viewBox', '0 0 24 24');
    phoneSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>';
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:+1234567890';
    phoneLink.className = 'text-white/80 hover:text-white transition-colors duration-200';
    phoneLink.textContent = '(123) 456-7890';
    phoneDiv.appendChild(phoneSvg);
    phoneDiv.appendChild(phoneLink);

    // Email
    const emailDiv = document.createElement('div');
    emailDiv.className = 'flex items-center space-x-3';
    const emailSvg = document.createElement('svg');
    emailSvg.className = 'w-5 h-5 text-accent-300 flex-shrink-0';
    emailSvg.setAttribute('fill', 'none');
    emailSvg.setAttribute('stroke', 'currentColor');
    emailSvg.setAttribute('viewBox', '0 0 24 24');
    emailSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>';
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:info@sofycares.com';
    emailLink.className = 'text-white/80 hover:text-white transition-colors duration-200';
    emailLink.textContent = 'info@sofycares.com';
    emailDiv.appendChild(emailSvg);
    emailDiv.appendChild(emailLink);

    // Availability
    const availabilityDiv = document.createElement('div');
    availabilityDiv.className = 'mt-6';
    const availabilityTitle = document.createElement('p');
    availabilityTitle.className = 'text-accent-300 font-medium mb-2';
    availabilityTitle.textContent = 'Disponible 24/7';
    const availabilityDesc = document.createElement('p');
    availabilityDesc.className = 'text-white/80 text-sm';
    availabilityDesc.textContent = 'Siempre aquí cuando nos necesites';
    availabilityDiv.appendChild(availabilityTitle);
    availabilityDiv.appendChild(availabilityDesc);

    contactContainer.appendChild(addressDiv);
    contactContainer.appendChild(phoneDiv);
    contactContainer.appendChild(emailDiv);
    contactContainer.appendChild(availabilityDiv);

    section.appendChild(title);
    section.appendChild(contactContainer);
    return section;
  };

  const createBottomBar = (): HTMLElement => {
    const bottomBar = document.createElement('div');
    bottomBar.className = 'border-t border-white/10 bg-text-primary/20';

    const container = document.createElement('div');
    container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6';

    const flexContainer = document.createElement('div');
    flexContainer.className = 'flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0';

    const copyright = document.createElement('div');
    copyright.className = 'text-white/60 text-sm';
    copyright.textContent = '© 2025 Sofy Cares Services. Todos los derechos reservados.';

    const legalLinks = document.createElement('div');
    legalLinks.className = 'flex space-x-6 text-sm';

    const legalLinksData = [
      { href: '#privacy', text: 'Política de Privacidad' },
      { href: '#terms', text: 'Términos de Servicio' },
      { href: '#accessibility', text: 'Accesibilidad' }
    ];

    legalLinksData.forEach(linkData => {
      const link = document.createElement('a');
      link.href = linkData.href;
      link.className = 'text-white/60 hover:text-white transition-colors duration-200';
      link.textContent = linkData.text;
      legalLinks.appendChild(link);
    });

    flexContainer.appendChild(copyright);
    flexContainer.appendChild(legalLinks);
    container.appendChild(flexContainer);
    bottomBar.appendChild(container);

    return bottomBar;
  };

