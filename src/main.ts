import './style.css';
import { HomeComponent } from './modules/home';
import { GoogleTranslateComponent } from './modules/googleTranslate';

class SofyCaresApp {
  private app: HTMLElement;
  private currentComponent: HomeComponent | null = null;
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
    this.loadHomePage();
    this.initializeGoogleTranslate();
  }

  private loadHomePage(): void {
    // Clean up previous component if exists
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    // Load the Home component
    this.currentComponent = new HomeComponent(this.app);
  }

  private initializeGoogleTranslate(): void {
    // Initialize Google Translate component
    this.translateComponent = new GoogleTranslateComponent(this.app);
  }

  public destroy(): void {
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
    if (this.translateComponent) {
      this.translateComponent.destroy();
    }
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