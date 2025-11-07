import './style.css';
import { CommingSoonComponent } from './modules/commingSoon';
import { GoogleTranslateComponent } from './modules/googleTranslate';

class SofyCaresApp {
  private app: HTMLElement;
  private currentComponent: CommingSoonComponent | null = null;
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
    this.loadCommingSoonPage();
    this.initializeGoogleTranslate();
  }

  private loadCommingSoonPage(): void {
    // Clean up previous component if exists
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    // Load the Coming Soon component
    this.currentComponent = new CommingSoonComponent(this.app);
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