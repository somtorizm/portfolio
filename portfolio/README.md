# Senior Mobile Engineer Portfolio

A stunning, modern portfolio website built with React + Vite featuring glassmorphism design, dark mode, smooth animations, and fully responsive layout.

## Features

- **Glassmorphism Design**: Modern frosted glass effects with transparent layers
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Framer Motion powered scroll-triggered animations
- **Mobile App Mockups**: Interactive phone frames showcasing your projects
- **Skills Visualization**: Dynamic progress bars and tech stack display
- **Contact Form**: Functional contact form with validation
- **Resume Download**: One-click resume download functionality
- **Fully Responsive**: Optimized for all screen sizes
- **Performance Optimized**: Fast loading with Vite

## Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing fast development
- **Framer Motion** for animations
- **React Icons** for beautiful icons
- **CSS3** with modern features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## Customization Guide

### 1. Personal Information

**Hero Section** (`src/components/Hero.tsx`):
- Line 31: Update your name
- Line 41: Update your title
- Line 47-51: Update your description
- Line 78: Replace profile image URL
- Line 11-14: Update social media links

**About Section** (`src/components/Hero.tsx`):
- Lines 106-118: Update your bio
- Lines 122-145: Update your statistics

### 2. Projects

Edit `src/components/Projects.tsx` (lines 9-58):
```typescript
const projects = [
  {
    title: 'Your App Name',
    description: 'Your app description',
    image: 'URL to app screenshot',
    technologies: [/* Your tech stack */],
    stats: { downloads: '2M+', rating: '4.8', users: '500K+' },
    links: {
      github: 'your-github-url',
      demo: 'your-demo-url',
    },
  },
  // Add more projects...
];
```

### 3. Skills

Edit `src/components/Skills.tsx` (lines 18-57):
- Update skill categories
- Modify skill levels (0-100)
- Add/remove technologies

Edit expertise areas (lines 59-68):
```typescript
const expertise = [
  'Your expertise area 1',
  'Your expertise area 2',
  // Add more...
];
```

### 4. Contact Information

Edit `src/components/Contact.tsx` (lines 35-50):
```typescript
const contactInfo = [
  {
    icon: <FiMail />,
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
  },
  // Update phone and location...
];
```

Update social links (lines 52-56):
```typescript
const socialLinks = [
  { icon: <FiGithub />, name: 'GitHub', url: 'https://github.com/yourusername' },
  // Update other links...
];
```

### 5. Resume Download

Place your resume PDF in the `public` folder as `resume.pdf`. The download button in the Hero section will automatically use this file.

### 6. Color Scheme

Edit `src/styles/global.css`:

**Light Mode** (lines 4-11):
```css
:root {
  --accent: #667eea; /* Primary color */
  /* Modify other colors as needed */
}
```

**Dark Mode** (lines 13-21):
```css
.dark {
  --accent: #a78bfa; /* Primary color for dark mode */
  /* Modify other colors as needed */
}
```

### 7. Images

Replace placeholder images with your own:
- Profile image: `src/components/Hero.tsx` line 78
- Project screenshots: `src/components/Projects.tsx` in the projects array

Use high-quality images:
- Profile: 300x300px minimum
- Project screenshots: 300x600px (mobile aspect ratio)

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx/css      # Navigation with dark mode toggle
│   │   ├── Hero.tsx/css        # Hero and About sections
│   │   ├── Projects.tsx/css    # Projects showcase
│   │   ├── Skills.tsx/css      # Skills visualization
│   │   └── Contact.tsx/css     # Contact form
│   ├── contexts/
│   │   └── DarkModeContext.tsx # Dark mode state management
│   ├── styles/
│   │   └── global.css          # Global styles and theme
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
├── public/
│   └── resume.pdf              # Your resume (add this)
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Performance Tips

- Optimize images (use WebP format when possible)
- Keep animations smooth (avoid animating expensive properties)
- Lazy load images below the fold
- Minimize bundle size by removing unused dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.

---

Built with love by [Your Name]
