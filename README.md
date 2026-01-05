# Sofy Cares Services

A modern and professional website for assisted living and care services, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

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

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run serve` - Serve the app on port 3000

## 🏗️ Project Structure

```
sofycares/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header2.tsx          # Main navigation header
│   │   ├── Footer.tsx           # Footer with links and contact info
│   │   ├── EmergencyInfo2.tsx   # Emergency phone directory bar
│   │   ├── DonateStickyButton.tsx # Floating "Give Care" button
│   │   └── ScrollToTop.tsx      # Auto-scroll handler
│   ├── pages/              # Page components
│   │   ├── Home/                # Home page
│   │   │   ├── Banner.tsx           # Hero banner
│   │   │   └── infoSection/         # Home sections
│   │   │       ├── IntroductionSection.tsx
│   │   │       ├── AboutSection.tsx
│   │   │       ├── ServicesSection.tsx
│   │   │       ├── EventsAndCommunitySection.tsx
│   │   │       ├── FounderSection.tsx
│   │   │       └── LocationSection.tsx
│   │   ├── AboutUs/             # About pages
│   │   │   ├── About.tsx
│   │   │   └── Founder.tsx          # Donation page
│   │   ├── HealthcareServices/  # Healthcare services page
│   │   │   └── Services.tsx
│   │   ├── AssistedLiving/      # Assisted living page
│   │   │   └── AssistedLiving.tsx
│   │   ├── IndependentLiving.tsx
│   │   ├── LevelsOfCare.tsx
│   │   └── Contact/             # Contact page
│   │       └── Contact.tsx
│   ├── layout/             # Layout components
│   │   └── MainLayout.tsx       # Main layout wrapper
│   ├── shared/             # Shared utilities
│   │   └── components/
│   │       └── GoogleTranslate.tsx
│   ├── data/               # Data and content
│   │   └── content.ts           # Contact info and content
│   ├── App.tsx             # Main app component with routes
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Features

- ✅ **React 19** with TypeScript for type-safe development
- ✅ **React Router v7** for client-side routing with hash navigation support
- ✅ **Tailwind CSS** for modern, responsive design
- ✅ **Custom color palette** with primary, accent, sage, olive, and beige colors
- ✅ **Responsive navigation** with desktop dropdowns and mobile menu
- ✅ **Sticky elements** including emergency info bar and donation button
- ✅ **Smooth scrolling** to page sections with hash navigation
- ✅ **Google Translate integration** for multilingual support
- ✅ **Glassmorphism effects** and modern UI design
- ✅ **Interactive components** with hover effects and animations
- ✅ **Contact forms** and location maps
- ✅ **SEO-friendly** structure

## 📄 Pages

### Main Pages
- **Home** (`/`) - Landing page with hero banner and overview sections
- **About Us** (`/about`) - Company information and story
- **Contact** (`/contact`) - Contact form and information

### Living Options
- **Independent Living** (`/independent-living`) - Information about independent living services
- **Assisted Living** (`/assisted-living`) - Details about assisted living care

### Healthcare Services (`/services`)
- Health & Medical Services (`#health-medical-services`)
- Levels of Care (`#levels-of-care`)
- Services & Amenities (`#services-amenities`)

### Other Pages
- **Founder/Donation** (`/founder`) - "Give Care" donation page
- **Levels of Care** (`/levels-of-care`) - Detailed care level information

## 🎨 Design System

### Color Palette
- **Primary Purple** (`#61137B`) - Main brand color for headers and primary actions
- **Accent Coral** (`#E97F72`) - Secondary accent for highlights and CTAs
- **Sage Green** (`#B6C8A9`) - Calming accent color
- **Olive Green** (`#6C7A47`) - Natural accent color
- **Beige** (`#E9DFC9`) - Warm neutral background
- **Text Primary** (`#2B1E34`) - Main text color

### Typography
- **Font Family**: Inter (sans-serif)
- Custom animations: fade-in, slide-up, pulse-slow

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for React Router:
   ```
   /* /index.html 200
   ```

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect Vite
3. Build configuration is automatic

### GitHub Pages
1. Build the project: `npm run build`
2. Upload the contents of `dist` to the `gh-pages` branch
3. Configure base path in `vite.config.ts` if needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ },
  // ...
}
```

### Content
Modify `src/data/content.ts` to update contact information and other content.

### Navigation
Update navigation structure in `src/components/Header2.tsx`:
```typescript
const navItems = [
  { text: "Menu Item", to: "/path", hasDropdown: false },
  // ...
];
```

### Routes
Add or modify routes in `src/App.tsx`:
```typescript
<Route path="/new-page" element={<NewPage />} />
```

## 🧩 Key Components

### Header2
Main navigation component with responsive dropdowns for Living Options and Healthcare Services.

### ScrollToTop
Automatic scroll management for page transitions and hash navigation to specific sections.

### DonateStickyButton
Floating button that appears when scrolling past the emergency info bar, linking to the donation page.

### EmergencyInfo2
Collapsible phone directory bar with general and emergency contact numbers.

### Footer
Comprehensive footer with quick links, services, contact information, and social media links.

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 👥 Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For inquiries about the project, please contact through GitHub issues or:
- **Email**: sofycaressma@gmail.com
- **Phone**: 415 117 7643
- **Emergency**: 415 154 8937

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and UI components inspired by modern design principles
- Google Translate integration for accessibility
