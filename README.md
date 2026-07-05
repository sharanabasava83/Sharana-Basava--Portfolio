# Sharanabasava - Portfolio Website

A modern, fully responsive personal portfolio website for a Java Full Stack Developer. Built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Dark Theme**: Premium dark glassmorphism design with smooth transitions
- **Smooth Animations**: Framer Motion animations and scroll effects
- **Interactive Components**: Animated skill cards, project showcases, and timeline
- **Performance Optimized**: Fast loading with Vite and code splitting
- **SEO Friendly**: Meta tags and structured content
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Modern UI/UX**: Inspired by Awwwards-quality portfolios

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Basic knowledge of React and JavaScript

### Installation

1. **Clone or Navigate to the Project**
   ```bash
   cd Sharanabasava-Portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.jsx       # Navigation bar
│   ├── Hero.jsx         # Hero/landing section
│   ├── About.jsx        # About section
│   ├── Skills.jsx       # Skills showcase
│   ├── Experience.jsx   # Work experience timeline
│   ├── Projects.jsx     # Featured projects
│   ├── Education.jsx    # Education section
│   ├── Certifications.jsx # Certifications
│   ├── Achievements.jsx # Key highlights
│   ├── Contact.jsx      # Contact form
│   ├── Footer.jsx       # Footer
│   ├── ParticleBackground.jsx # Animated particle background
│   └── ScrollToTop.jsx  # Scroll to top button
├── hooks/               # Custom React hooks
│   └── useInView.js    # Intersection observer hook
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx            # Entry point
public/
├── resume.pdf          # Resume file (add your resume here)
└── profile.jpg         # Profile image (optional)
```

## 🎨 Customization

### Update Personal Information

Edit the following files to add your information:

1. **Hero Section** - `src/components/Hero.jsx`
   - Update name, title, and description
   - Add your profile image

2. **About Section** - `src/components/About.jsx`
   - Update career objective and personal details

3. **Skills Section** - `src/components/Skills.jsx`
   - Add/remove skills and categories

4. **Experience Section** - `src/components/Experience.jsx`
   - Update internship/work experience

5. **Projects Section** - `src/components/Projects.jsx`
   - Update your projects with descriptions, tech stack, and links

6. **Education Section** - `src/components/Education.jsx`
   - Update your education details

7. **Contact Section** - `src/components/Contact.jsx`
   - Update contact information
   - Set up email notifications (EmailJS integration)

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#22C55E',      // Main accent color
      'secondary': '#38BDF8',    // Secondary accent
      'dark-bg': '#050816',      // Background
      'dark-card': '#111827',    // Card background
    },
  },
},
```

### Add Resume

1. Place your resume PDF in the `public` folder as `resume.pdf`
2. Update the download link in `Hero.jsx` if needed

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll detection
- **React CountUp** - Number animation
- **EmailJS** - Email service integration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/portfolio/',
     // ... rest of config
   })
   ```
2. Run: `npm run build`
3. Push to GitHub and enable Pages

## 🔐 Environment Variables

Create a `.env.local` file for sensitive data:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

## 📧 Email Setup (EmailJS)

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Add credentials to `.env.local`
5. Update `Contact.jsx` with your EmailJS configuration

## 🎯 Performance Tips

- Images are optimized and lazy-loaded
- CSS is minified and purged of unused styles
- JavaScript is code-split and minified
- Animations use GPU acceleration
- Particles are optimized for performance

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# On Linux/Mac
lsof -i :3000
kill -9 <PID>

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Tailwind styles not applying
- Clear cache: `rm -rf node_modules/.vite`
- Rebuild: `npm run dev`

### Build errors
- Clear node_modules: `rm -rf node_modules`
- Reinstall: `npm install`
- Try build again: `npm run build`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and create your own portfolio. If you have suggestions or improvements, feel free to reach out!

## 👤 Author

**Sharanabasava**
- GitHub: [@sharanabasava83](https://github.com/sharanabasava83)
- LinkedIn: [sharanabasava-797746280](https://www.linkedin.com/in/sharanabasava-797746280)
- Email: sharanurs05@gmail.com

---

**Built with ❤️ by Sharanabasava**
