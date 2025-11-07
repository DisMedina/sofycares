import { BannerComponent } from "./components/banner";
import { HeaderComponent } from "./components/header";
import { InfoSectionComponent } from "./components/infoSection";
import { FooterComponent } from "../../shared/components/footer";


export class HomeComponent {
  private container: HTMLElement;
  private headerComponent: HeaderComponent | null = null;
  private bannerComponent: BannerComponent | null = null;
  private infoSectionComponent: InfoSectionComponent | null = null;
  private footerComponent: FooterComponent | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.init();
  }

  private init(): void {
    this.render();
    this.initializeComponents();
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50">
        <!-- Header Section -->
        <header id="header-section"></header>
        
        <!-- Hero Banner Section -->
        <section id="banner-section"></section>
        
        <!-- Info Sections -->
        <main id="info-section"></main>
        
        <!-- Footer Section -->
        <footer id="footer-section"></footer>
      </div>
    `;
  }

  private initializeComponents(): void {
    // Initialize Header
    const headerSection = document.getElementById('header-section');
    if (headerSection) {
      this.headerComponent = new HeaderComponent(headerSection);
    }

    // Initialize Banner
    const bannerSection = document.getElementById('banner-section');
    if (bannerSection) {
      this.bannerComponent = new BannerComponent(bannerSection);
    }

    // Initialize Info Section
    const infoSection = document.getElementById('info-section');
    if (infoSection) {
      this.infoSectionComponent = new InfoSectionComponent(infoSection);
    }

    // Initialize Footer
    const footerSection = document.getElementById('footer-section');
    if (footerSection) {
      this.footerComponent = new FooterComponent(footerSection);
    }
  }

  public destroy(): void {
    if (this.headerComponent) {
      this.headerComponent.destroy();
    }
    if (this.bannerComponent) {
      this.bannerComponent.destroy();
    }
    if (this.infoSectionComponent) {
      this.infoSectionComponent.destroy();
    }
    if (this.footerComponent) {
      this.footerComponent.destroy();
    }
    this.container.innerHTML = '';
  }
}