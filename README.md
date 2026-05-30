# Sofy Cares Services

A modern and professional website for assisted living and care services in San Miguel de Allende, built with React, TypeScript, and Tailwind CSS.

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DisMedina/sofycares.git
cd sofycares
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run serve` - Serve the app on port 3000

## Project Structure

```
sofycares/
├── public/
│   ├── images/             # Gallery and page images (SC_*.jpg)
│   └── logo/               # Logo assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.tsx          # Main navigation header
│   │   ├── Footer.tsx          # Footer with links and contact info
│   │   ├── EmergencyInfo2.tsx  # Phone directory bar
│   │   ├── DonateStickyButton.tsx # Floating "Give Care" button
│   │   └── ScrollToTop.tsx     # Auto-scroll handler
│   ├── pages/
│   │   ├── Home/               # Home page
│   │   │   ├── Home.tsx
│   │   │   ├── Banner.tsx
│   │   │   └── infoSection/
│   │   │       ├── IntroductionSection.tsx
│   │   │       ├── AboutSection.tsx
│   │   │       ├── ServicesSection.tsx
│   │   │       ├── HealthServicesSection.tsx
│   │   │       ├── LevelsOfCareSection.tsx
│   │   │       ├── AmenitiesSection.tsx
│   │   │       ├── EventsAndCommunitySection.tsx
│   │   │       ├── FounderSection.tsx
│   │   │       ├── LocationSection.tsx
│   │   │       └── AwardsSection.tsx
│   │   ├── AboutUs/
│   │   │   ├── About.tsx       # About Us page
│   │   │   └── Founder.tsx     # Founder biography
│   │   ├── HealthcareServices/
│   │   │   └── Services.tsx    # Healthcare services page
│   │   ├── AssistedLiving/
│   │   │   └── AssistedLiving.tsx
│   │   ├── IndependentLiving.tsx
│   │   ├── LevelsOfCare.tsx
│   │   ├── Gallery/
│   │   │   └── Gallery.tsx     # Photo gallery with lightbox
│   │   ├── Events/
│   │   │   └── Events.tsx      # Events page
│   │   ├── Contact/
│   │   │   └── Contact.tsx     # Contact form and info
│   ├── layout/
│   │   └── MainLayout.tsx      # Main layout wrapper
│   ├── shared/
│   │   └── components/
│   │       └── GoogleTranslate.tsx
│   ├── data/
│   │   └── content.ts          # Centralized content and contact info
│   ├── App.tsx                 # Main app component with routes
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Features

- **React 19** with TypeScript
- **React Router v7** for client-side routing
- **Tailwind CSS** for responsive design
- **Custom brand color palette** (purple, lavender, blush pink)
- **Responsive navigation** with desktop dropdowns and mobile menu
- **Sticky elements** (phone directory bar, "Give Care" button)
- **Photo gallery** with lightbox modal
- **Google Translate** integration
- **Smooth scrolling** with hash navigation

## Pages

### Main Pages
- **Home** (`/`) - Landing page with overview sections
- **About Us** (`/about`) - Company information
- **Founder** (`/founder`) - Sofia Toledo Soto biography
- **Contact** (`/contact`) - Contact form and information
- **Gallery** (`/gallery`) - Photo gallery
- **Events** (`/events`) - Community events

### Living Options
- **Independent Living** (`/independent-living`) - Independent living services
- **Assisted Living** (`/assisted-living`) - Assisted living care

### Healthcare Services (`/services`)
- Health & Medical Services
- Levels of Care
- Services & Amenities

## Design System

### Color Palette
- **Primary Purple** (`#662d91`) - Main brand color
- **Secondary Lavender** (`#af70af`) - Soft accent
- **Accent Blush Pink** (`#e3aaaa`) - Warm accent for highlights
- **Sage Green** (`#B6C8A9`) - Natural accent
- **Olive Green** (`#6C7A47`) - Earth tone
- **Beige** (`#E9DFC9`) - Warm neutral
- **Text Primary** (`#2B1E34`) - Main text color

### Typography
- **Font Family**: Inter (sans-serif)
- Custom animations: fade-in, slide-up, pulse-slow

## Deployment

### Netlify
1. Build: `npm run build`
2. Upload the `dist` folder
3. Add redirect rule: `/* /index.html 200`

#### Environment variables (required)
The contact form sends email via EmailJS directly from the browser. Three
**public, client-safe** variables must be configured (no private key — see
[EMAILJS_SETUP.md](EMAILJS_SETUP.md)):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

**Locally:** copy `.env.example` to `.env` and fill in the values (`.env` is
gitignored).

**On Netlify:** add the same prefixed names under *Site configuration →
Environment variables*. Vite injects env vars **only at build time**, so
**trigger a fresh deploy** after adding or changing them. Never add a private
key.

### Vercel
1. Connect repository to Vercel
2. Auto-detected Vite configuration

## Key Components

### Header
Responsive navigation with dropdowns for Living Options and Healthcare Services.

### DonateStickyButton
Floating "Give Care" button that links to external donation page (sofycares.app).

### EmergencyInfo2
Collapsible phone directory with general and emergency contact numbers.

### Gallery
Masonry grid photo gallery with lightbox modal for enlarged viewing.

### Footer
Links, contact information, and social media (Facebook, Instagram, TikTok).

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette.

### Content
Modify `src/data/content.ts` to update contact information and page content.

### Navigation
Update navigation in `src/components/Header.tsx`.

### Routes
Add or modify routes in `src/App.tsx`.

## Contact

- **Email**: sofycaressma@gmail.com
- **Phone**: +52 415 117 7643
- **Emergency**: 415 111 2213
- **Location**: San Miguel de Allende, Gto., Mexico

## License

This project is under the MIT License.
