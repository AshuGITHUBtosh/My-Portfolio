# Ashutosh Bhardwaj - Portfolio Website

A modern, visually impressive, production-ready personal portfolio website built with React, featuring smooth animations, dynamic backgrounds, and a premium dark mode design.

## 🚀 Features

- **Modern Design**: Premium, futuristic UI with glassmorphism effects and neon accents
- **Smooth Animations**: Framer Motion powered page transitions and micro-interactions
- **Dynamic Background**: Interactive particle system with connecting lines
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: Beautiful dark theme with gradient accents
- **Interactive Sections**:
  - Hero section with animated CTAs
  - About section with stats and education
  - Skills section with animated progress bars
  - Experience timeline
  - Projects carousel with modal details
  - Achievements showcase
  - Contact form with social links

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **CSS Modules** - Scoped styling
- **React Icons** - Beautiful icon library

## 📦 Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

## 🎯 Usage

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx
│   └── ParticleBackground.jsx
├── sections/            # Page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Achievements.jsx
│   └── Contact.jsx
├── data/                # Resume data
│   └── resumeData.js
├── styles/              # Global styles
│   └── global.css
└── App.jsx              # Main app component
```

## 🎨 Customization

### Update Resume Data

Edit `src/data/resumeData.js` to update:
- Personal information
- Skills and proficiency levels
- Experience and projects
- Achievements
- Education details

### Styling

- Global styles: `src/styles/global.css`
- Component styles: Each component has its own `.module.css` file
- Color scheme: Modify CSS variables in `global.css`

### Add Resume PDF

1. Place your resume PDF in the `public/` folder
2. Update the download link in `src/sections/Hero.jsx`:

```jsx
const downloadResume = () => {
  window.open('/resume.pdf', '_blank')
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📝 Notes

- The contact form is currently a placeholder. Integrate with a backend service (e.g., EmailJS, Formspree) for functionality
- GitHub and LinkedIn links use placeholder URLs. Update with your actual profiles
- All content is derived from the resume data file for easy updates

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ashutosh Bhardwaj**
- Email: ashutosh10503@gmail.com
- LinkedIn: [Ashutosh Bhardwaj](https://linkedin.com/in/ashutosh-bhardwaj)
- GitHub: [AshuGITHUBtosh](https://github.com/AshuGITHUBtosh)

---

Built with ❤️ using React and Framer Motion

