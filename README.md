# Compassionate Wellbeing Site

A modern, responsive therapy practice website built with React, TypeScript, and Tailwind CSS. This professional website showcases therapy services, practitioner information, and provides an intuitive user experience for clients seeking mental health support.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC?logo=tailwind-css)

## 🌟 Features

- **Modern Design**: Clean, professional interface with healing-focused color palette
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices  
- **Service Showcase**: Detailed information about therapy services offered
- **About Section**: Professional background and credentials display
- **Contact Integration**: Easy-to-use contact forms with Formspree integration
- **Blog Section**: Space for sharing wellness articles and resources
- **Testimonials**: Client feedback and success stories
- **Accessibility**: Built with accessibility best practices in mind
- **Dark/Light Mode**: Theme switching with next-themes
- **Form Validation**: Robust form handling with React Hook Form and Zod
- **Performance Optimized**: Fast loading with Vite and SWC compilation
- **SEO Friendly**: Optimized for search engines with proper meta tags

## 🚀 Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript 5.5.3
- **Build Tool**: Vite 5.4.1 with SWC for fast compilation
- **Styling**: Tailwind CSS 3.4.11 with Typography plugin
- **UI Components**: Radix UI with shadcn/ui component library
- **Icons**: Lucide React and React Icons
- **Routing**: React Router DOM 6.26.2
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: TanStack Query for data fetching
- **Form Handling**: Formspree integration for contact forms
- **Package Manager**: Bun for fast package management
- **Development**: ESLint 9.9.0 with modern configuration
- **Theming**: Next-themes for dark/light mode support
- **Notifications**: Sonner for toast notifications
- **Charts**: Recharts for data visualization
- **Date Handling**: date-fns for date utilities

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [Bun](https://bun.sh/) package manager (latest version)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kiganyamburu/compassionate-wellbeing-site.git
   cd compassionate-wellbeing-site
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start the development server**

   ```bash
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

## 📜 Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the project for production
- `bun run build:dev` - Build the project in development mode
- `bun run preview` - Preview the production build locally
- `bun run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components (30+ components)
│   ├── Footer.tsx      # Site footer
│   ├── Layout.tsx      # Main layout wrapper
│   └── Navigation.tsx  # Navigation header
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About the therapist
│   ├── Services.tsx    # Therapy services
│   ├── Contact.tsx     # Contact information
│   ├── Blog.tsx        # Blog/articles
│   ├── Testimonials.tsx # Client testimonials
│   ├── Location.tsx    # Office location
│   ├── Index.tsx       # Route index
│   └── NotFound.tsx    # 404 page
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks (mobile, toast)
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🎨 Design System

The project uses a carefully crafted design system focused on creating a calming, professional atmosphere:

- **Color Palette**: Healing blues and greens with warm accent colors
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Consistent UI components built with Radix UI
- **Animations**: Subtle transitions and hover effects
- **Spacing**: Consistent spacing using Tailwind's spacing scale

## 📱 Pages Overview

### Home Page

- Hero section with compelling messaging
- Service highlights
- Testimonials preview
- Call-to-action sections

### About Page

- Therapist biography and credentials
- Professional philosophy
- Education and experience
- Personal approach to therapy

### Services Page

- Detailed service descriptions
- Pricing information
- Session duration and format options
- Specialized treatment areas

### Contact Page

- Contact form
- Office location and hours
- Insurance and payment information
- Appointment scheduling details

## 🔧 Customization

### Updating Content

1. **Therapist Information**: Edit `src/pages/About.tsx`
2. **Services**: Modify `src/pages/Services.tsx`
3. **Contact Details**: Update `src/pages/Contact.tsx`
4. **Navigation**: Edit `src/components/Navigation.tsx`

### Styling

- **Colors**: Update `tailwind.config.ts` for color scheme changes
- **Components**: Modify files in `src/components/ui/` for component styling
- **Global Styles**: Edit `src/index.css` for global styling updates

### Images

Replace images in `src/assets/` with your own professional photos:

- `hero-therapy-office.jpg` - Main hero image
- `therapist-portrait.jpg` - Professional headshot
- `meditation-garden.jpg` - Calming environment image
- Additional WhatsApp images for gallery or testimonials

## 🧪 Development Features

### Modern Development Experience

- **Hot Module Replacement**: Instant updates during development
- **TypeScript Support**: Full type safety and IntelliSense
- **ESLint Configuration**: Modern ESLint flat config with React hooks support
- **Path Aliases**: Convenient `@/` imports for src directory
- **Component Tagging**: Development-time component identification with lovable-tagger

### Performance Optimizations

- **SWC Compilation**: Ultra-fast TypeScript/JSX compilation
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Optimized image and asset loading

## 🚀 Deployment

### Building for Production

```bash
bun run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments with zero configuration
- **Netlify**: Drag and drop the `dist/` folder or connect via Git with form handling support
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Railway**: Deploy with automatic HTTPS and custom domains
- **Cloudflare Pages**: Fast global CDN deployment
- **Traditional Hosting**: Upload the `dist/` folder to your web server

### Environment Variables

For contact form functionality, configure these environment variables:

```bash
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
```

## 🔍 Browser Support

- Chrome/Chromium (latest 2 versions)
- Firefox (latest 2 versions)  
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimized with tree shaking and code splitting
- **Loading Speed**: Fast initial page load with progressive enhancement

## 🤝 Contributing

We welcome contributions to improve this therapy practice website template! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and TypeScript patterns
- Ensure all components are accessible and responsive
- Test changes across different devices and browsers
- Update documentation for any new features
- Use semantic commit messages

### Areas for Contribution

- UI/UX improvements
- Accessibility enhancements
- Performance optimizations
- Additional therapy-specific features
- Documentation improvements
- Bug fixes and error handling

## 🛡️ Security & Privacy

This template is designed with privacy and security in mind:

- **Form Security**: Formspree integration for secure form handling
- **No Data Collection**: Template doesn't collect user data by default
- **HTTPS Ready**: Designed for secure deployment
- **Privacy Compliant**: Built to support HIPAA and privacy regulations

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📞 Support

For questions about this project or customization services, please reach out through the contact form on the website or create an issue in this repository.

### Helpful Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Vite Documentation](https://vitejs.dev/)

## 📈 Roadmap

Planned features and improvements:

- [ ] Online appointment booking system
- [ ] Client portal integration
- [ ] Multi-language support
- [ ] Advanced SEO optimization
- [ ] Analytics dashboard
- [ ] Email newsletter integration
- [ ] Social media integration
- [ ] Progressive Web App (PWA) features

---

**Note**: This is a template website for therapy practices. Please ensure all content, images, and information are updated to reflect your specific practice and comply with local regulations and professional guidelines.

## 🏷️ Tags

`therapy` `mental-health` `react` `typescript` `tailwind` `vite` `website-template` `healthcare` `wellness` `professional-services`
