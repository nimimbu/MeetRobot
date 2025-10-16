# meetRobot.org - Advancing Human-Robot Relationships

A nonprofit foundation landing page built with Astro, focusing on meaningful experimentation on the relationship between humanoids and robots within the human experience. Think of it as accelerated evolution at the intersection of humans and robotics - similar to how dogs evolved alongside humans, but at technological speed.

## 🤖 Features

- **Friendly Robot Character**: CSS-animated robot with blinking eyes and name tag representing our mission
- **Clean Design**: Inspired by kscale.dev's minimalist aesthetic
- **Google Forms Integration**: Easy setup for collecting interest in our research initiatives
- **Cloudflare Ready**: Optimized for static deployment on Cloudflare Pages
- **Mobile Responsive**: Looks great on all devices
- **Mission-Focused**: Clear communication of our nonprofit foundation's goals

## 🚀 Quick Setup

1. **Install dependencies**:
   ```sh
   npm install
   ```

2. **Configure your Google Form**:
   - Create a new Google Form for collecting interest in research initiatives
   - Copy the form URL
   - Replace `your-form-id-here` in `src/pages/index.astro` with your actual form URL

3. **Customize your site**:
   - Modify robot name, colors, messaging, or styling as needed for your organization
   - Update nonprofit mission statement and call-to-action text

4. **Start development server**:
   ```sh
   npm run dev
   ```

## 📝 Configuration

### Google Form Setup
1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with fields for:
   - Email address
   - Name (optional)
   - Interest level or other qualifying questions
3. Get the shareable link
4. Update both instances in `src/pages/index.astro`:
   ```javascript
   const googleFormUrl = "YOUR_GOOGLE_FORM_URL_HERE";
   // and
   const googleFormUrl = 'YOUR_GOOGLE_FORM_URL_HERE';
   ```

### Customization
- **Robot Name**: Change `robotName` variable in the frontmatter
- **Colors**: Modify CSS variables in the `<style>` section
- **Messaging**: Update heading, subtitle, and call-to-action text
- **Animation**: Adjust the eye blink animation timing in CSS

## 🌐 Cloudflare Pages Deployment

### Option 1: Git Integration (Recommended)
1. Push your code to GitHub/GitLab
2. Connect to [Cloudflare Pages](https://pages.cloudflare.com)
3. Import your repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18` or later

### Option 2: Direct Upload
1. Build the site locally:
   ```sh
   npm run build
   ```
2. Upload the `dist` folder to Cloudflare Pages

### Custom Domain
- Add your custom domain in Cloudflare Pages dashboard
- Update DNS records to point to your Cloudflare Pages site

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🎨 Design Elements

- **Typography**: System fonts for optimal loading speed
- **Color Palette**: Gradient backgrounds with high contrast text
- **Layout**: CSS Grid for responsive two-column design
- **Animations**: Subtle eye blinking and hover effects
- **Accessibility**: High contrast ratios and semantic HTML

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers

## 🤝 Contributing

This is a starter template - feel free to modify, extend, and make it your own!

## 📄 License

MIT License - use this template for any purpose.
