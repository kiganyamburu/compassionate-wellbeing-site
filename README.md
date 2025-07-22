# Compassionate Wellbeing Site

A modern, responsive therapy practice website built with React, TypeScript, and Tailwind CSS. This professional website showcases therapy services, practitioner information, and provides an intuitive user experience for clients seeking mental health support.

## 🌟 Features

- **Modern Design**: Clean, professional interface with healing-focused color palette
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Service Showcase**: Detailed information about therapy services offered
- **About Section**: Professional background and credentials display
- **Contact Integration**: Easy-to-use contact forms and location information
- **Blog Section**: Space for sharing wellness articles and resources
- **Testimonials**: Client feedback and success stories
- **Accessibility**: Built with accessibility best practices in mind

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI with shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Package Manager**: Bun
- **Development**: ESLint for code quality

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Bun](https://bun.sh/) package manager

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
   Navigate to `http://localhost:5173` to view the application

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
│   ├── ui/             # shadcn/ui components
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
│   └── NotFound.tsx    # 404 page
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
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

## 🚀 Deployment

### Building for Production

```bash
bun run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload the `dist/` folder to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📞 Support

For questions about this project or customization services, please reach out through the contact form on the website or create an issue in this repository.

---

**Note**: This is a template website for therapy practices. Please ensure all content, images, and information are updated to reflect your specific practice and comply with local regulations and professional guidelines.
