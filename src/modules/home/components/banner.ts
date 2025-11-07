export class BannerComponent {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.init();
  }

  private init(): void {
    this.render();
    this.setupEventListeners();
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
          <div class="w-full h-full bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-accent-600/60 absolute inset-0 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
            alt="Healthcare professional caring for elderly patient" 
            class="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <!-- Hero Content -->
        <div class="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Cuidado con 
            <span class="text-accent-300 block">Corazón</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Servicios de cuidado profesional y compasivo para tus seres queridos. 
            Brindamos atención personalizada con la calidez de una familia.
          </p>

          <!-- CTA Button -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              id="main-cta-button"
              class="group bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
            >
              <span>Comenzar Ahora</span>
              <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
            
            <button 
              id="secondary-cta-button"
              class="group text-white border-2 border-white/30 hover:border-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ease-in-out flex items-center space-x-3"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>Llamar Ahora</span>
            </button>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-sm font-medium">Personal Certificado</span>
            </div>
            
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-sm font-medium">Disponible 24/7</span>
            </div>
            
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-sm font-medium">Planes Flexibles</span>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div class="animate-bounce">
            <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    `;
  }

  private setupEventListeners(): void {
    const mainCtaButton = document.getElementById('main-cta-button');
    const secondaryCtaButton = document.getElementById('secondary-cta-button');

    if (mainCtaButton) {
      mainCtaButton.addEventListener('click', () => {
        console.log('Main CTA clicked - will redirect to contact/services');
        // TODO: Add navigation logic when routing is implemented
      });
    }

    if (secondaryCtaButton) {
      secondaryCtaButton.addEventListener('click', () => {
        console.log('Secondary CTA clicked - will initiate phone call');
        // TODO: Add phone call functionality
        // window.location.href = 'tel:+1234567890';
      });
    }
  }

  public destroy(): void {
    this.container.innerHTML = '';
  }
}