// ? Components
import { HeaderComponent } from '../home/components/header';
import { EmergencyInfoComponent } from '../../shared/components/EmergencyInfo';
import { FooterComponent } from '../../shared/components/footer';

// Helper function to create services banner
const createServicesBanner = (
  backgroundImage: string = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
): HTMLElement => {
  const banner = document.createElement('div');
  banner.className = 'relative h-80 flex items-center justify-center overflow-hidden';

  // Background image
  const backgroundDiv = document.createElement('div');
  backgroundDiv.className = 'absolute inset-0 z-0';

  const overlay = document.createElement('div');
  overlay.className = 'w-full h-full bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-accent-600/60 absolute inset-0 z-10';

  const image = document.createElement('img');
  image.src = backgroundImage;
  image.alt = 'Professional quality services';
  image.className = 'w-full h-full object-cover';
  image.loading = 'eager';

  backgroundDiv.appendChild(overlay);
  backgroundDiv.appendChild(image);

  // Banner content
  const content = document.createElement('div');
  content.className = 'relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8';

  const heading = document.createElement('h1');
  heading.className = 'text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight';
  heading.textContent = 'The services we offer are of high quality';

  content.appendChild(heading);
  banner.appendChild(backgroundDiv);
  banner.appendChild(content);

  return banner;
};

// Helper function to create service section (text + image)
const createServiceSection = (
  title: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  imageOnLeft: boolean = true
): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'py-16 lg:py-20';

  const container = document.createElement('div');
  container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  const grid = document.createElement('div');
  grid.className = 'grid lg:grid-cols-2 gap-12 items-center';

  // Content side
  const contentDiv = document.createElement('div');
  contentDiv.className = imageOnLeft ? 'order-2 lg:order-2' : 'order-2 lg:order-1';

  const contentCard = document.createElement('div');
  contentCard.className = 'bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-beige-200';

  const titleElement = document.createElement('h2');
  titleElement.className = 'text-3xl lg:text-4xl font-bold text-text-primary mb-6';
  titleElement.textContent = title;

  const descriptionElement = document.createElement('div');
  descriptionElement.className = 'text-lg text-text-secondary leading-relaxed space-y-4';

  // Split description into paragraphs for better readability
  const paragraphs = description.split('\n\n');
  paragraphs.forEach(paragraph => {
    if (paragraph.trim()) {
      const p = document.createElement('p');
      p.textContent = paragraph.trim();
      descriptionElement.appendChild(p);
    }
  });

  contentCard.appendChild(titleElement);
  contentCard.appendChild(descriptionElement);
  contentDiv.appendChild(contentCard);

  // Image side
  const imageDiv = document.createElement('div');
  imageDiv.className = imageOnLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2';

  const imageElement = document.createElement('img');
  imageElement.src = imageSrc;
  imageElement.alt = imageAlt;
  imageElement.className = 'w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl';

  imageDiv.appendChild(imageElement);

  grid.appendChild(imageOnLeft ? imageDiv : contentDiv);
  grid.appendChild(imageOnLeft ? contentDiv : imageDiv);
  container.appendChild(grid);
  section.appendChild(container);

  return section;
};

// Helper function to create benefits section
const createBenefitsSection = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'py-12 bg-gradient-to-br from-sage-50 to-secondary-50';

  const container = document.createElement('div');
  container.className = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center';

  const title = document.createElement('h2');
  title.className = 'text-3xl font-bold text-text-primary mb-8';
  title.textContent = 'Other Benefits';

  const benefitsGrid = document.createElement('div');
  benefitsGrid.className = 'grid grid-cols-1 md:grid-cols-3 gap-6';

  const benefits = [
    'Lorem ipsum dolor sit amet consectetur',
    'Adipiscing elit sed do eiusmod tempor',
    'Incididunt ut labore et dolore magna',
    'Aliqua enim ad minim veniam quis',
    'Nostrud exercitation ullamco laboris',
    'Nisi ut aliquip ex ea commodo consequat'
  ];

  benefits.forEach(benefit => {
    const benefitItem = document.createElement('div');
    benefitItem.className = 'bg-white rounded-xl p-6 shadow-lg border border-beige-200 hover:shadow-xl transition-shadow duration-300';

    const icon = document.createElement('div');
    icon.className = 'w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4';
    icon.innerHTML = `
      <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>
    `;

    const text = document.createElement('p');
    text.className = 'text-text-secondary font-medium';
    text.textContent = benefit;

    benefitItem.appendChild(icon);
    benefitItem.appendChild(text);
    benefitsGrid.appendChild(benefitItem);
  });

  container.appendChild(title);
  container.appendChild(benefitsGrid);
  section.appendChild(container);

  return section;
};

const Services = (): HTMLElement => {
  // Create main container
  const container = document.createElement('div');
  container.className = 'min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50';

  // Create header (overlays banner like in home page)
  const header = document.createElement('header');
  const headerElement = HeaderComponent();
  header.appendChild(headerElement);
  // Insert EmergencyInfoComponent after header
  const emergencyInfoSection = EmergencyInfoComponent();
  header.appendChild(emergencyInfoSection);

  // Services banner section (no wrapper, directly like home page)
  const bannerSection = document.createElement('section');
  const banner = createServicesBanner();
  bannerSection.appendChild(banner);

  // Main content for services
  const main = document.createElement('main');

  // Service 1: Cuidado Personal (Image on left, text on right)


    const service1 = createServiceSection(
      'Personal Care',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  main.appendChild(service1);
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'Professional personal care',
      true
    );
  // Benefits section
  const benefits = createBenefitsSection();
  main.appendChild(benefits);

  // Service 2: Compañía (Image on right, text on left)
  const service2 = createServiceSection(
    'Companionship',
    `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.

    Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.

    Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.`,
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Proffessional companionship services',
    false
  );
  main.appendChild(service2);

  // Service 3: Apoyo Doméstico (Image on left, text on right)
  const service3 = createServiceSection(
    'Domestic Support',
    `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

    Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.

    Id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.`,
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Professional domestic support servicess',
    true
  );
  main.appendChild(service3);

  // Create footer
  const footer = document.createElement('footer');
  const footerElement = FooterComponent();
  footer.appendChild(footerElement);

  // Append all sections to container (header overlays banner like in home)
  container.appendChild(header);
  container.appendChild(bannerSection);
  container.appendChild(main);
  container.appendChild(footer);

  return container;
};

export default Services;