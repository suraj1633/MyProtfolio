# My Personal Portfolio

A modern, interactive portfolio website built with advanced HTML, CSS, and JavaScript. Features a dark glassy theme, animated hero section, smooth scroll, responsive design, and dynamic project showcases. Designed to impress and provide a seamless user experience across all devices.

## ✨ Features
- Glassmorphism dark theme
- Animated hero section with interactive cursor effects
- Responsive and mobile-friendly
- Animated section reveals on scroll
- Project cards with images, tech badges, and modern hover effects
- About section with profile, quick facts, and skills
- Contact form (ready for integration with Formspree or similar)

## 🚀 Adding Your Projects
1. **Open `index.html` and find the Projects section:**
   ```html
   <div class="projects-grid">
     <!-- Project cards go here -->
   </div>
   ```
2. **Add a new project card:**
   ```html
   <div class="project-card scale-in">
     <img src="yourproject.png" alt="Project Screenshot" class="project-img fade-in" />
     <h3 class="slide-up">Project Title</h3>
     <p class="slide-up">A brief description of your project.</p>
     <div class="project-tech fade-in">
       <span>HTML</span>
       <span>CSS</span>
       <span>JavaScript</span>
     </div>
     <button class="project-btn slide-up" onclick="window.open('https://yourprojectlink.com', '_blank')">View Project</button>
   </div>
   ```
3. **Update the image, title, description, tech badges, and link as needed.**

## 📬 Contact Form Setup
- The contact form is ready for integration with [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), or similar services.
- To use Formspree:
  1. Sign up at [formspree.io](https://formspree.io/) and get your form endpoint.
  2. Set the `action` attribute of the form in `index.html` to your Formspree endpoint.
  3. Remove or update the JavaScript that fakes the form submission.

## 🌐 Deployment
### **GitHub Pages**
1. Push your project to a GitHub repository.
2. Go to **Settings > Pages** in your repo.
3. Set the source to the `main` branch and `/ (root)` folder.
4. Your site will be live at `https://yourusername.github.io/reponame/`.

### **Vercel**
1. Go to [vercel.com](https://vercel.com/) and sign up.
2. Import your repo or drag-and-drop your folder.
3. Deploy and get a live URL.

### **Netlify**
1. Go to [netlify.com](https://www.netlify.com/) and sign up.
2. Drag-and-drop your folder or connect your repo.
3. Deploy and get a live URL.

## 🛠️ Managing Git Remotes
- **View remotes:**
  ```sh
  git remote -v
  ```
- **Remove a remote:**
  ```sh
  git remote remove origin
  ```
  Replace `origin` with your remote's name if different.

---

**Feel free to customize and extend this portfolio!** 