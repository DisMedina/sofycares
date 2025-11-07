export class FooterComponent {
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
      <footer class="bg-gradient-to-br from-text-primary via-primary-900 to-primary-800 text-white">
        <!-- Main Footer Content -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            <!-- Company Info -->
            <div class="lg:col-span-1">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold">Sofy Cares</h3>
              </div>
              <p class="text-white/80 mb-6 leading-relaxed">
                Brindamos servicios de cuidado personal y compañía profesional con el amor 
                y la atención que su familia merece.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/sofycaresservices" target="_blank" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/sofycaresservices" target="_blank" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.132-1.551c-.684-.941-.684-2.122 0-3.062c.684-.941 1.835-1.551 3.132-1.551s2.448.611 3.132 1.551c.684.941.684 2.122 0 3.062c-.684.941-1.835 1.551-3.132 1.551zm7.718-1.497H12.85v-4.808h3.317v4.808zm0-6.191H12.85V6.847h3.317V9.3z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="lg:col-span-1">
              <h4 class="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
              <ul class="space-y-4">
                <li><a href="#home" class="text-white/80 hover:text-white transition-colors duration-200">Inicio</a></li>
                <li><a href="#about" class="text-white/80 hover:text-white transition-colors duration-200">Nosotros</a></li>
                <li><a href="#services" class="text-white/80 hover:text-white transition-colors duration-200">Servicios</a></li>
                <li><a href="#contact" class="text-white/80 hover:text-white transition-colors duration-200">Contacto</a></li>
                <li><a href="#careers" class="text-white/80 hover:text-white transition-colors duration-200">Trabaja con Nosotros</a></li>
              </ul>
            </div>

            <!-- Services -->
            <div class="lg:col-span-1">
              <h4 class="text-lg font-semibold mb-6">Servicios</h4>
              <ul class="space-y-4">
                <li><a href="#personal-care" class="text-white/80 hover:text-white transition-colors duration-200">Cuidado Personal</a></li>
                <li><a href="#companionship" class="text-white/80 hover:text-white transition-colors duration-200">Compañía</a></li>
                <li><a href="#home-support" class="text-white/80 hover:text-white transition-colors duration-200">Apoyo Doméstico</a></li>
                <li><a href="#respite-care" class="text-white/80 hover:text-white transition-colors duration-200">Cuidado de Relevo</a></li>
                <li><a href="#specialized" class="text-white/80 hover:text-white transition-colors duration-200">Cuidado Especializado</a></li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div class="lg:col-span-1">
              <h4 class="text-lg font-semibold mb-6">Contacto</h4>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-accent-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p class="text-white/80">123 Care Street<br>Ciudad, Estado 12345</p>
                </div>
                
                <div class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <a href="tel:+1234567890" class="text-white/80 hover:text-white transition-colors duration-200">(123) 456-7890</a>
                </div>
                
                <div class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:info@sofycares.com" class="text-white/80 hover:text-white transition-colors duration-200">info@sofycares.com</a>
                </div>

                <div class="mt-6">
                  <p class="text-accent-300 font-medium mb-2">Disponible 24/7</p>
                  <p class="text-white/80 text-sm">Siempre aquí cuando nos necesites</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-white/10 bg-text-primary/20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div class="text-white/60 text-sm">
                © 2025 Sofy Cares Services. Todos los derechos reservados.
              </div>
              <div class="flex space-x-6 text-sm">
                <a href="#privacy" class="text-white/60 hover:text-white transition-colors duration-200">Política de Privacidad</a>
                <a href="#terms" class="text-white/60 hover:text-white transition-colors duration-200">Términos de Servicio</a>
                <a href="#accessibility" class="text-white/60 hover:text-white transition-colors duration-200">Accesibilidad</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  private setupEventListeners(): void {
    // Add event listeners for footer links
    const links = this.container.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log('Footer navigation clicked:', href);
        // TODO: Add navigation logic when routing is implemented
      });
    });

    // Handle phone and email links (these should work normally)
    const phoneLinks = this.container.querySelectorAll('a[href^="tel:"]');
    const emailLinks = this.container.querySelectorAll('a[href^="mailto:"]');
    
    phoneLinks.forEach(link => {
      link.addEventListener('click', () => {
        console.log('Phone link clicked:', link.getAttribute('href'));
      });
    });

    emailLinks.forEach(link => {
      link.addEventListener('click', () => {
        console.log('Email link clicked:', link.getAttribute('href'));
      });
    });
  }

  public destroy(): void {
    this.container.innerHTML = '';
  }
}