export class HeaderComponent {
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
      <nav class="relative z-10 bg-white/90 backdrop-blur-sm shadow-lg border-b border-beige-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h1 class="text-2xl font-bold text-text-primary">Sofy Cares</h1>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" class="text-text-primary hover:text-primary-600 transition-colors duration-200 font-medium">Inicio</a>
              <a href="#about" class="text-text-primary hover:text-primary-600 transition-colors duration-200 font-medium">Nosotros</a>
              <a href="#services" class="text-text-primary hover:text-primary-600 transition-colors duration-200 font-medium">Servicios</a>
              <a href="#contact" class="text-text-primary hover:text-primary-600 transition-colors duration-200 font-medium">Contacto</a>
              <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                Consulta Gratis
              </button>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button id="mobile-menu-toggle" class="text-text-primary hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Navigation (Hidden by default) -->
          <div id="mobile-menu" class="hidden md:hidden bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg border border-beige-200">
            <div class="px-4 py-3 space-y-3">
              <a href="#home" class="block text-text-primary hover:text-primary-600 transition-colors duration-200 font-medium py-2">Inicio</a>
              <a href="#about" class="block text-text-primary hover:text-primary-600 transition-colors duration-200 font-medium py-2">Nosotros</a>
              <a href="#services" class="block text-text-primary hover:text-primary-600 transition-colors duration-200 font-medium py-2">Servicios</a>
              <a href="#contact" class="block text-text-primary hover:text-primary-600 transition-colors duration-200 font-medium py-2">Contacto</a>
              <button class="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 mt-2">
                Consulta Gratis
              </button>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  private setupEventListeners(): void {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (mobileMenu && !mobileMenu.contains(event.target as Node) && !mobileMenuToggle?.contains(event.target as Node)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  public destroy(): void {
    // Clean up event listeners if needed
    this.container.innerHTML = '';
  }
}