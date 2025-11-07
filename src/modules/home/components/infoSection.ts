export class InfoSectionComponent {
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
      <div class="py-16 lg:py-24">
        <!-- About Us Section -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-beige-200">
                <h2 class="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                  Sobre Nosotros
                </h2>
                <p class="text-lg text-text-secondary mb-6 leading-relaxed">
                  En Sofy Cares, creemos que cada persona merece recibir atención de calidad con 
                  dignidad y respeto. Somos una empresa familiar dedicada a proporcionar servicios 
                  de cuidado personal y compañía profesional para adultos mayores y personas que 
                  necesitan asistencia especial.
                </p>
                <p class="text-lg text-text-secondary mb-8 leading-relaxed">
                  Nuestro equipo está compuesto por profesionales certificados y capacitados que 
                  entienden la importancia de crear un ambiente seguro, cómodo y lleno de cariño 
                  para nuestros clientes y sus familias.
                </p>
                <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                  <span>Conocer Más</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cuidador profesional ayudando a adulto mayor" 
                class="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        <!-- Services Section -->
        <section class="bg-gradient-to-br from-sage-50 to-secondary-50 py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Nuestros Servicios
              </h2>
              <p class="text-lg text-text-secondary max-w-2xl mx-auto">
                Ofrecemos una amplia gama de servicios de cuidado diseñados para satisfacer 
                las necesidades únicas de cada cliente y su familia.
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Service 1: Personal Care -->
              <div class="bg-white rounded-2xl shadow-lg p-8 border border-beige-200 hover:shadow-xl transition-shadow duration-300">
                <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-text-primary mb-4">Cuidado Personal</h3>
                <p class="text-text-secondary mb-6">
                  Asistencia con actividades diarias como baño, vestido, alimentación y movilidad. 
                  Nuestros cuidadores brindan apoyo respetuoso y profesional.
                </p>
                <a href="#" class="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
                  <span>Más información</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>

              <!-- Service 2: Companionship -->
              <div class="bg-white rounded-2xl shadow-lg p-8 border border-beige-200 hover:shadow-xl transition-shadow duration-300">
                <div class="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                  <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-text-primary mb-4">Compañía</h3>
                <p class="text-text-secondary mb-6">
                  Servicios de compañía para combatir la soledad y el aislamiento. 
                  Incluye conversación, actividades recreativas y acompañamiento.
                </p>
                <a href="#" class="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
                  <span>Más información</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>

              <!-- Service 3: Home Support -->
              <div class="bg-white rounded-2xl shadow-lg p-8 border border-beige-200 hover:shadow-xl transition-shadow duration-300">
                <div class="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center mb-6">
                  <svg class="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-text-primary mb-4">Apoyo Doméstico</h3>
                <p class="text-text-secondary mb-6">
                  Ayuda con tareas del hogar, preparación de comidas, compras y organización 
                  para mantener un ambiente limpio y seguro.
                </p>
                <a href="#" class="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
                  <span>Más información</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div class="text-center mt-12">
              <button class="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Ver Todos los Servicios
              </button>
            </div>
          </div>
        </section>

        <!-- Founder Section -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Fundadora de Sofy Cares" 
                class="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-beige-200">
                <h2 class="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                  Nuestra Fundadora
                </h2>
                <p class="text-lg text-text-secondary mb-6 leading-relaxed">
                  Sofia Martinez fundó Sofy Cares con una visión clara: brindar el mismo nivel 
                  de cuidado que ella desearía para su propia familia. Con más de 15 años de 
                  experiencia en el sector de la salud y el cuidado de adultos mayores.
                </p>
                <p class="text-lg text-text-secondary mb-6 leading-relaxed">
                  Su pasión por ayudar a otros y su compromiso con la excelencia la llevaron 
                  a crear una empresa que se distingue por su enfoque personalizado y su 
                  dedicación genuina al bienestar de cada cliente.
                </p>
                <div class="flex items-center space-x-4 mb-6">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span class="text-primary-600 font-bold text-lg">SM</span>
                    </div>
                  </div>
                  <div>
                    <p class="text-lg font-semibold text-text-primary">Sofia Martinez</p>
                    <p class="text-text-secondary">Fundadora & CEO</p>
                  </div>
                </div>
                <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                  <span>Conocer Su Historia</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  private setupEventListeners(): void {
    // Add event listeners for buttons and links
    const buttons = this.container.querySelectorAll('button, a[href="#"]');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Button clicked:', button.textContent?.trim());
        // TODO: Add navigation logic when routing is implemented
      });
    });
  }

  public destroy(): void {
    this.container.innerHTML = '';
  }
}