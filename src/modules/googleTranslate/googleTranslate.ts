// Google Translate Widget Component
export class GoogleTranslateComponent {
  private container: HTMLElement;
  private isLoaded: boolean = false;

  constructor(container: HTMLElement) {
    this.container = container;
    this.init();
  }

  private init(): void {
    this.loadGoogleTranslateScript();
    this.render();
  }

  private render(): void {
    // Create only the Google Translate element (hidden but functional for browser translation)
    const translateContainer = document.createElement('div');
    translateContainer.id = 'google_translate_element';
    translateContainer.className = 'hidden';
    
    // Insert the hidden translate container
    this.container.insertBefore(translateContainer, this.container.firstChild);
  }

  private loadGoogleTranslateScript(): void {
    // Check if script is already loaded
    if (document.querySelector('script[src*="translate.google.com"]')) {
      this.initializeGoogleTranslate();
      return;
    }

    // Create and load Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    
    // Add global callback function
    (window as any).googleTranslateElementInit = () => {
      this.initializeGoogleTranslate();
    };

    document.head.appendChild(script);
  }

  private initializeGoogleTranslate(): void {
    if (this.isLoaded) return;
    
    try {
      console.log('Initializing Google Translate for browser use...');
      
      // Initialize Google Translate - this enables browser translation capabilities
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'es', // Default page language (Spanish)
        includedLanguages: 'en,es', // Only Spanish and English
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true,
        gaTrack: false,
        gaId: null
      }, 'google_translate_element');

      this.isLoaded = true;
      this.styleGoogleTranslateWidget();
      
      console.log('Google Translate initialized - browser translation now available');
      
    } catch (error) {
      console.warn('Google Translate initialization failed:', error);
      // Retry after a short delay
      setTimeout(() => {
        if (!this.isLoaded) {
          this.initializeGoogleTranslate();
        }
      }, 1000);
    }
  }





  private styleGoogleTranslateWidget(): void {
    // Add CSS to completely hide Google Translate widget but keep functionality
    const style = document.createElement('style');
    style.textContent = `
      /* Hide Google Translate banner and attribution completely */
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
      }
      
      body {
        top: 0px !important;
      }
      
      /* Completely hide all Google Translate visual elements */
      .goog-te-gadget,
      .goog-te-gadget-simple,
      #google_translate_element,
      #google_translate_element * {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
        pointer-events: none !important;
      }
      
      /* Hide any translate menus or popups */
      .goog-te-menu-frame,
      .goog-te-menu2,
      .goog-te-ftab,
      .goog-te-balloon {
        display: none !important;
        visibility: hidden !important;
      }
      
      /* Remove any translate branding */
      .goog-te-gadget img,
      .goog-te-gadget-icon,
      .goog-logo-link {
        display: none !important;
      }
      
      /* Ensure body doesn't get pushed down by hidden elements */
      body.goog-te-p {
        top: 0px !important;
      }
    `;
    
    document.head.appendChild(style);
  }

  public destroy(): void {
    // Clean up the translate widget
    const translateElements = document.querySelectorAll('[id*="google_translate"], .goog-te-banner-frame, .goog-te-menu-frame');
    translateElements.forEach(element => {
      element.remove();
    });
    
    // Remove global callback
    if ((window as any).googleTranslateElementInit) {
      delete (window as any).googleTranslateElementInit;
    }
    
    // Remove custom styles
    const customStyles = document.querySelectorAll('style');
    customStyles.forEach(style => {
      if (style.textContent?.includes('goog-te')) {
        style.remove();
      }
    });
    
    this.isLoaded = false;
  }

  public show(): void {
    // Google Translate component is now invisible - no UI to show
    console.log('Google Translate is enabled for browser translation');
  }

  public hide(): void {
    // Google Translate component is now invisible - no UI to hide
    console.log('Google Translate remains available for browser translation');
  }
}