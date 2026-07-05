# 🚀 Quick Start Guide

## Get Your Portfolio Running in 3 Steps

### Step 1: Open Terminal in Project Directory
```bash
cd Sharanabasava-Portfolio
```

### Step 2: Install All Dependencies
```bash
npm install
```
**Wait for this to complete** (takes 2-5 minutes depending on your internet)

### Step 3: Start Development Server
```bash
npm run dev
```
**Your portfolio will automatically open at `http://localhost:3000`**

---

## 🎯 What You Should See

✅ Dark theme with green and blue accents  
✅ Smooth animations on scroll  
✅ Navigation bar at the top  
✅ Hero section with your name  
✅ Multiple sections below  
✅ Responsive mobile menu  

---

## ✏️ Making Your First Edit

1. Open `src/components/Hero.jsx`
2. Find the line with `Sharanabasava`
3. Replace it with your name
4. **Save the file** (Ctrl+S)
5. **Check browser** - it updates automatically! ✨

---

## 📚 Documentation Files

| File | Read When |
|------|-----------|
| **BUILD_SUMMARY.md** | You want overview of what was created |
| **SETUP.md** | You're ready to customize everything |
| **README.md** | You need detailed technical docs |

---

## 🎨 Customization Checklist

**In Your First Session:**
- [ ] Update your name in `Hero.jsx`
- [ ] Update your email in `Contact.jsx`
- [ ] Update social links in `Footer.jsx`
- [ ] Add your profile image to `public/` folder
- [ ] Update project titles in `Projects.jsx`

**Before Deploying:**
- [ ] Add resume to `public/` folder
- [ ] Update all project information
- [ ] Verify all links work
- [ ] Test on mobile (resize browser)
- [ ] Run `npm run build` to test production

---

## 🚀 Ready to Deploy?

### Option 1: Vercel (Recommended)
```bash
git init
git add .
git commit -m "Portfolio"
git push origin main
# Then visit vercel.com and import your repo
```

### Option 2: Build & Deploy Manually
```bash
npm run build
# Now deploy the 'dist' folder to Netlify or GitHub Pages
```

---

## 🆘 If Something Goes Wrong

**Port 3000 already in use?**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <number> /F

# Mac
lsof -i :3000
kill -9 <PID>
```

**Styles look broken?**
```bash
rm -rf node_modules
npm install
npm run dev
```

**Build fails?**
```bash
npm run lint  # Check for errors
npm run build # Try building again
```

---

## 📖 File Editing Tips

### To Update...

| Element | File | What to Change |
|---------|------|-----------------|
| Your Name | `src/components/Hero.jsx` | "Sharanabasava" text |
| Bio | `src/components/About.jsx` | Career objective |
| Skills | `src/components/Skills.jsx` | Skill lists |
| Projects | `src/components/Projects.jsx` | Project array |
| Contact Info | `src/components/Contact.jsx` | Email, phone, etc |
| Colors | `tailwind.config.js` | Color hex codes |

---

## 🎉 You're Ready!

Your portfolio is production-ready. Just customize your content and deploy! 🚀

**Next:**
1. Read `SETUP.md` for detailed customization
2. Start editing `src/components/Hero.jsx` 
3. Share your portfolio link with everyone!

---

## 💡 Pro Tips

✨ **Hot Reload** - Edits auto-update in browser  
⚡ **Fast Loading** - Vite optimizes everything  
🎨 **Dark Theme** - Built for modern dark interfaces  
📱 **Mobile Ready** - Works on all devices  
🔒 **Secure** - No API keys in code  

---

Happy building! If you have questions, check the other .md files. 📚
