# Codriva Company Website

A modern, responsive company website built with Next.js, Tailwind CSS, and GSAP animations.

## Features

- 🚀 **Modern Tech Stack**: Built with Next.js 14, React 18, and TypeScript
- 🎨 **Beautiful Design**: Styled with Tailwind CSS for a modern, responsive design
- ✨ **Smooth Animations**: Enhanced with GSAP for engaging user interactions
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🔍 **SEO Optimized**: Built-in SEO features and metadata
- ⚡ **Fast Performance**: Optimized for speed and performance

## Sections

- **Hero Section**: Eye-catching landing area with animated elements
- **About Section**: Company information with animated statistics
- **Services Section**: Service offerings with interactive cards
- **Portfolio Section**: Project showcase with filtering capabilities
- **Contact Section**: Contact form and company information
- **Footer**: Comprehensive footer with links and newsletter signup

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd codriva-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Professional-grade animations
- **Framer Motion**: Additional animation library

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Portfolio.tsx
│   └── Services.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      secondary: {
        // Your secondary colors
      }
    }
  }
}
```

### Content
- Update company information in each component
- Replace placeholder images with your own
- Modify the services and portfolio data
- Update contact information

### Animations
GSAP animations can be customized in each component. The animations include:
- Fade-in effects
- Slide animations
- Hover effects
- Scroll-triggered animations
- Counter animations

## Performance

This website is optimized for performance with:
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized bundle size
- SEO best practices
- Fast loading animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact us at hello@codriva.com
