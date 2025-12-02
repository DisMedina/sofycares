import './style.css';
import { Home } from './modules/home';
import { About } from './modules/about';
import { Services } from './modules/services';
import { Founder } from './modules/founder';
import { Contact } from './modules/contact';
import { GoogleTranslateComponent } from './modules/googleTranslate';

class SofyCaresApp {
  private app: HTMLElement;
  private translateComponent: GoogleTranslateComponent | null = null;

  constructor() {
    const appElement = document.getElementById('app');
    if (!appElement) {
      throw new Error('App element not found');
    }
    this.app = appElement;
    this.init();
  }

  private init(): void {
    this.setupRouting();
    this.loadInitialPage();
    this.initializeGoogleTranslate();
  }

  private setupRouting(): void {
    // Set up global navigation function
    (window as any).navigateTo = (path: string) => {
      this.navigateToPage(path);
      // Update URL without page reload
      window.history.pushState({ path }, '', path);
    };

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (event) => {
      const path = event.state?.path || window.location.pathname;
      this.navigateToPage(path);
    });
  }

  private loadInitialPage(): void {
    const path = window.location.pathname;
    this.navigateToPage(path);
  }

  private navigateToPage(path: string): void {
    // Clear previous content
    this.app.innerHTML = '';

    // Route to appropriate page (English only)
    switch (path) {
      case '/about':
        const aboutElement = About();
        this.app.appendChild(aboutElement);
        break;
      case '/services':
        const servicesElement = Services();
        this.app.appendChild(servicesElement);
        break;
      case '/founder':
        const founderElement = Founder();
        this.app.appendChild(founderElement);
        break;
      case '/contact':
        const contactElement = Contact();
        this.app.appendChild(contactElement);
        break;
      case '/':
      case '/home':
      default:
        const homeElement = Home();
        this.app.appendChild(homeElement);
        break;
    }
  }

  private initializeGoogleTranslate(): void {
    // Initialize Google Translate component
    this.translateComponent = new GoogleTranslateComponent(this.app);
  }

  public destroy(): void {
    if (this.translateComponent) {
      this.translateComponent.destroy();
    }
    this.app.innerHTML = '';
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  try {
    new SofyCaresApp();
  } catch (error) {
    console.error('Failed to initialize Sofy Cares App:', error);
  }
});

// Export for potential future use
export { SofyCaresApp };