// ? Components
import { BannerComponent } from './components/banner';
import { HeaderComponent } from './components/header';
import { InfoSectionComponent } from './components/infoSection';
import { FooterComponent } from '../../shared/components/footer';

const Home = (): HTMLElement => {
  // Create main container
  const container = document.createElement('div');
  container.className = 'min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50';

  // Create sections
  const header = document.createElement('header');
  header.id = 'header-section';
  
  const bannerSection = document.createElement('section');
  bannerSection.id = 'banner-section';
  
  const infoSection = document.createElement('main');
  infoSection.id = 'info-section';
  
  const footer = document.createElement('footer');
  footer.id = 'footer-section';

  // Initialize components and append to sections
  const headerElement = HeaderComponent();
  header.appendChild(headerElement);

  const bannerElement = BannerComponent();
  bannerSection.appendChild(bannerElement);

  const infoSectionElement = InfoSectionComponent();
  infoSection.appendChild(infoSectionElement);

  const footerElement = FooterComponent();
  footer.appendChild(footerElement);

  // Append all sections to container
  container.appendChild(header);
  container.appendChild(bannerSection);
  container.appendChild(infoSection);
  container.appendChild(footer);

  return container;
};

export default Home;