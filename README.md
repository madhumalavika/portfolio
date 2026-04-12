# Data Analyst Portfolio - Madhumalavika

A professional, responsive portfolio showcase featuring interactive project slideshows for data analytics dashboards and visualizations.

## 🌟 Features

- **Professional Dashboard Layout** - Modern hero section, comprehensive project cards, and organized skills display
- **Dark Mode Toggle** - 🌙 Switch between light and dark themes with persistent preference saving
- **Interactive Slideshows** - Browse through multiple dashboard views for each project with navigation arrows and dot indicators
- **GitHub Integration** - Direct links to all project repositories
- **Responsive Design** - Mobile-friendly layout that adapts to all screen sizes
- **Modern Styling** - Blue color scheme with gradients, smooth animations, and professional typography
- **Skills Section** - 6 categories of technical expertise and tools
- **Contact Section** - Easy-to-find contact and social links

## 📁 Portfolio Structure

```
portfolio/
├── index.html           # Main portfolio page (HTML + inline CSS + Dark mode scripts)
├── js/
│   └── lightbox.js      # Interactive slideshow functionality
├── images/
│   └── projects/        # Organized project images
│       ├── airbnb/      # Airbnb Performance dashboards (3 images)
│       ├── cricket/     # Cricket Data Analysis dashboards (3 images)
│       ├── snowflake/   # Panic Attack Study dashboards (4 images)
│       └── hr/          # HR Analytics dashboards (1 image)
└── README.md            # This file
```

**Note**: All styling is integrated into `index.html` for streamlined deployment. CSS variables enable instant theme switching between light and dark modes.

## 📊 Projects Showcased

### 1. Global Airbnb Performance
- **Slides**: 3 (Overview, Ratings, Reviews)
- **Tools**: Power BI, DAX, Data Modeling
- **Description**: Comprehensive analysis of Airbnb performance metrics across regions
- **GitHub**: [airbnb-performance-dashboard](https://github.com/madhumalavika/airbnb-performance-dashboard)

### 2. Cricket Data Analysis
- **Slides**: 3 (Batting, Bowling, Fielding)
- **Tools**: Power BI, Data Visualization, Analytics
- **Description**: In-depth performance analysis of cricket metrics across formats
- **GitHub**: [cricket-data-analysis](https://github.com/madhumalavika/cricket-data-analysis)

### 3. Snowflake-Power BI: Panic Attack Study
- **Slides**: 4 (Dashboard views)
- **Tools**: Power BI, Snowflake, ETL
- **Description**: Advanced analytics study integrating Snowflake with Power BI
- **GitHub**: [panic-attack-study](https://github.com/madhumalavika/panic-attack-study)

### 4. Employee Presence Analysis - HR Analytics
- **Slides**: 1
- **Tools**: Power BI, KPIs, HR Metrics
- **Description**: HR dashboard tracking employee attendance and workforce analytics
- **GitHub**: [hr-analytics-dashboard](https://github.com/madhumalavika/hr-analytics-dashboard)

## � Dark Mode

- **Toggle Button** - Click the moon icon (🌙) in the header to switch themes
- **Auto-Detection** - Respects your system's color scheme preference on first visit
- **Persistent** - Your theme preference is saved in browser localStorage
- **Smooth Transitions** - All color changes animate smoothly (0.3s)
- **Full Support** - All components (cards, buttons, text, backgrounds) adapt perfectly

**Color Schemes:**
- **Light Mode**: Clean white background (#f8fafc) with professional blue accents (#2563eb)
- **Dark Mode**: Dark navy background (#111827) with bright adjustable colors for contrast

## 🎮 Slideshow Controls

- **Previous/Next Buttons** - Use ❮ ❯ buttons to navigate between dashboard slides
- **Dot Indicators** - Click on dots to jump directly to a specific slide
- **Auto-First Slide** - First slide loads automatically for each project

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with responsive structure
- **CSS3** - CSS variables, Flexbox, Grid, animations, gradients, media queries
- **JavaScript** - Slideshow carousel, dark mode toggle, localStorage persistence
- **Responsive Design** - Mobile-first approach with breakpoints at 768px
- **No Dependencies** - Pure vanilla HTML/CSS/JS, no frameworks needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/madhumalavika/portfolio.git
   cd portfolio
   ```

2. Open in your browser:
   - Double-click `index.html`, or
   - Use a local server: `python -m http.server 8000` (then visit `http://localhost:8000`)

3. Navigate through projects using the slideshow controls

## 📝 Customization

### Change Color Scheme
Edit CSS variables inside the `<style>` tag in `index.html`:
```css
:root {
    --primary-color: #2563eb;           /* Main theme color */
    --secondary-color: #1e40af;         /* Darker accent */
    --accent-color: #f59e0b;            /* Highlight color */
    --dark-bg: #0f172a;                 /* Dark mode background */
    --light-bg: #f8fafc;                /* Light mode background */
    --card-bg: #ffffff;                 /* Card background */
    --text-primary: #1e293b;            /* Primary text */
    --text-secondary: #64748b;          /* Secondary text */
    --border-color: #e2e8f0;            /* Border color */
}

/* Dark mode colors override automatically */
body.dark-mode {
    --primary-color: #3b82f6;           /* Lighter blue for dark mode */
    --secondary-color: #60a5fa;         /* ... etc */
    /* All other variables adjust for optimal dark mode contrast */
}
```

### Update Contact Information
1. Edit the Contact section in `index.html` (search for `id="contact"`)
2. Replace `your-email@example.com` with your actual email
3. Update GitHub links if needed

### Update Hero Section Stats
Edit the `.hero-stats` section to change the numbers displayed

### Add New Projects
1. Create a new folder: `images/projects/[project-name]/`
2. Add project images to the folder
3. Copy a project card template from existing projects
4. Update:
   - Image paths to match your folder structure
   - Project title and description
   - Number of slides (dots count)
   - GitHub repository link
   - Technologies and metrics
5. Add the new card to the projects grid

## 📧 Contact & Links

- **Email**: Update in the Contact section of `index.html`
- **GitHub**: [@madhumalavika](https://github.com/madhumalavika)
- **Portfolio**: [Live Demo](#) - Deploy to Netlify or GitHub Pages

## 🎯 Skills Showcase

The portfolio includes 6 categories of technical expertise:
1. **BI & Visualization** - Power BI, DAX, Dashboard Design
2. **Data & Databases** - SQL, Data Modeling, ETL, Snowflake
3. **Analytics & Insights** - Business Intelligence, Predictive Analytics, Trend Analysis
4. **Domain Expertise** - Real Estate, Sports, HR, Healthcare Analytics
5. **Analytical Methods** - Problem Solving, Data Storytelling, Root Cause Analysis
6. **Tools & Platforms** - Excel, Python, Git, Azure, Data Integration

## 📄 License

This portfolio is open source and available under the MIT License.

---

**Made with ❤️ by Madhumalavika | Last Updated: April 2026**

## 🚀 Deployment

### GitHub Pages
1. Push your repository to GitHub
2. Go to Settings → Pages
3. Enable GitHub Pages from `main` branch
4. Your portfolio is live!

### Netlify
1. Connect your GitHub repo to Netlify
2. Deploy with one click
3. Share your custom domain

### Local Testing
```bash
# Using Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

## 💡 Tips

- Test dark mode by clicking the moon icon in the header
- All images are optimized for web display
- Slideshow works on mobile with touch gestures
- JSON formatting in localStorage persists your theme preference across sessions
