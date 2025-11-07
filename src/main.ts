import './style.css';
import { CommingSoonComponent } from './modules/commingSoon';

class SofyCaresApp {
  private app: HTMLElement;
  private currentComponent: CommingSoonComponent | null = null;

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
  }

  private loadCommingSoonPage(): void {
    // Clean up previous component if exists
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    // Load the Coming Soon component
    this.currentComponent = new CommingSoonComponent(this.app);
  }

  public destroy(): void {
    if (this.currentComponent) {
      this.currentComponent.destroy();
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