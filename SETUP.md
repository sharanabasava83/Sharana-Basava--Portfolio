# Portfolio Setup & Installation Guide

## 🎯 Overview

Your professional portfolio website has been successfully created with a modern React + Vite stack. This guide will help you get it up and running in just a few minutes.

## ⚡ Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```
This will install all required packages including React, Framer Motion, Tailwind CSS, etc.

### 2. Start Development Server
```bash
npm run dev
```
Your portfolio will automatically open at `http://localhost:3000`

### 3. Make Changes
Edit files in the `src/` folder and see changes live in the browser (hot reload enabled).

### 4. Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

## 📝 Customization Steps

### Step 1: Update Your Information

#### In `src/constants/config.js`:
- Update your name, email, phone
- Update social media links
- Customize colors if desired

#### In `src/components/Hero.jsx`:
- Update your name and title
- Change the emoji or add your profile image
- Update the description

#### In `src/components/About.jsx`:
- Edit your career objective
- Update personal details

#### In `src/components/Skills.jsx`:
- Add/remove skills
- Modify skill categories
- Update proficiency levels

#### In `src/components/Experience.jsx`:
- Update internship/work experience
- Add your achievements
- Update dates and locations

#### In `src/components/Projects.jsx`:
- Update project titles and descriptions
- Add links to GitHub repos
- Add live demo links
- Update technology stacks

#### In `src/components/Education.jsx`:
- Update your degree and institution
- Change CGPA and graduation date
- Update achievements

#### In `src/components/Certifications.jsx`:
- Add your certifications
- Update dates and descriptions

#### In `src/components/Contact.jsx`:
- Update contact information
- Set up email notifications (see below)

### Step 2: Add Your Profile Image

1. Place your profile image in the `public/` folder
2. Name it `profile.jpg` or update the filename in `Hero.jsx`
3. Update the image path in `src/components/Hero.jsx`:
   ```jsx
   <img src="/profile.jpg" alt="Portrait of Sharanabasava" />
   ```

### Step 3: Add Your Resume

1. Save your resume as `resume.pdf`
2. Place it in the `public/` folder
3. Update the download link in `Hero.jsx` if needed:
   ```jsx
   <a href="/resume.pdf" download>
   ```

### Step 4: Customize Colors (Optional)

Edit `tailwind.config.js`:

```javascript
colors: {
  'primary': '#22C55E',      // Green accent
  'secondary': '#38BDF8',    // Blue accent
  'dark-bg': '#050816',      // Dark background
  'dark-card': '#111827',    // Card background
  'text-primary': '#FFFFFF', // Main text
  'text-dim': '#94A3B8',     // Muted text
}
```

## 📧 Email Setup (Optional)

To enable the contact form with email notifications:

1. **Sign up at** [EmailJS](https://www.emailjs.com/)
2. **Create an Email Service:**
   - Go to Dashboard → Email Services
   - Connect Gmail or your preferred email
3. **Create an Email Template:**
   - Go to Dashboard → Email Templates
   - Use variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
4. **Get Your Credentials:**
   - Service ID
   - Template ID
   - User ID (Public Key)
5. **Create `.env.local` file:**
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```
6. **Update `src/components/Contact.jsx`:**
   ```javascript
   import emailjs from 'emailjs-com'
   
   // In handleSubmit function:
   emailjs.send(
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     formData,
     import.meta.env.VITE_EMAILJS_USER_ID
   )
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended - 2 minutes)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Your site is live

### Deploy to Netlify

1. Build your project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [netlify.com](https://netlify.com)

OR connect your GitHub:
1. Push to GitHub
2. Go to Netlify → New site from Git
3. Select your repository
4. Click Deploy

### Custom Domain

Both Vercel and Netlify allow you to add a custom domain:
1. Go to project settings
2. Add your domain (e.g., yourname.dev)
3. Update DNS settings (instructions provided)

## 📊 Project Structure

```
portfolio/
├── public/              # Static files
│   ├── resume.pdf       # Your resume (add here)
│   └── profile.jpg      # Your profile image (add here)
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── ScrollToTop.jsx
│   ├── hooks/           # Custom hooks
│   │   └── useInView.js
│   ├── constants/       # Configuration
│   │   └── config.js
│   ├── App.jsx          # Main app
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS config
├── vite.config.js       # Vite config
├── package.json         # Dependencies
└── README.md            # Documentation
```

## 🎨 Customization Examples

### Change Primary Color

In `tailwind.config.js`:
```javascript
'primary': '#FF6B35',  // Change to orange
'secondary': '#004E89', // Change to dark blue
```

Then update `src/index.css` to match theme.

### Add New Section

1. Create a new component in `src/components/NewSection.jsx`
2. Import in `App.jsx`
3. Add to main render
4. Update navigation in `Navbar.jsx`

### Modify Animations

Edit `src/index.css` to customize animation speeds and effects.

## 🐛 Common Issues & Solutions

### Issue: Port 3000 Already in Use
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Issue: Dependencies Won't Install
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind Styles Not Working
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Issue: Build Fails
```bash
# Check for syntax errors
npm run lint

# Clear build and rebuild
rm -rf dist
npm run build
```

## 📚 Learn More

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## ✅ Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added profile image
- [ ] Added resume PDF
- [ ] Updated all project information
- [ ] Tested on mobile (responsive)
- [ ] Verified all links work
- [ ] Set up email (if using contact form)
- [ ] Ran `npm run build` successfully
- [ ] Tested production build with `npm run preview`
- [ ] Set up custom domain (optional)

## 🎉 You're All Set!

Your portfolio is ready to showcase your skills to potential employers and clients. Good luck with your job search!

## 📞 Support

If you have questions or need help:
1. Check the main README.md
2. Review component comments
3. Check Tailwind and React documentation
4. Test on different browsers and devices

---

**Happy coding! 🚀**
