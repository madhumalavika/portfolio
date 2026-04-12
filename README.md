# Data Analyst Portfolio - Madhumalavika

A professional, responsive portfolio showcase featuring interactive project slideshows for data analytics dashboards and visualizations.

## 🌟 Features

- **Responsive Design** - Mobile-friendly layout that adapts to all screen sizes
- **Interactive Slideshows** - Browse through multiple dashboard views for each project with navigation arrows and dot indicators
- **Dark Theme** - Modern, eye-catching design with purple and cyan accents
- **GitHub Integration** - Direct links to project repositories
- **Optimized Performance** - Lazy-loaded images and minimal dependencies

## 📁 Portfolio Structure

```
portfolio/
├── index.html              # Main portfolio page
├── css/
│   └── style.css          # Styling with dark theme and animations
├── js/
│   └── lightbox.js        # Slideshow functionality
├── images/
│   └── projects/          # Organized project images
│       ├── airbnb/        # Global Airbnb Performance dashboards
│       ├── cricket/       # Cricket Data Analysis dashboards
│       ├── snowflake/     # Panic Attack Study dashboards
│       └── hr/            # HR Analytics dashboards
└── README.md              # This file
```

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

## 🎮 Slideshow Controls

- **Previous/Next Buttons** - Use ❮ ❯ buttons to navigate between dashboard slides
- **Dot Indicators** - Click on dots to jump directly to a specific slide
- **Keyboard Support** - Arrow keys for navigation (coming soon)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, animations, gradients
- **JavaScript** - Interactive slideshow functionality
- **Responsive Design** - Mobile-first approach

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

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root{
  --primary:#7C3AED;      /* Purple */
  --accent:#06B6D4;       /* Cyan */
  --bg:#0b0f1a;           /* Dark bg */
  --card-bg:#ffffff;      /* Card bg */
}
```

### Update Contact Information
Edit section `id="contact"` in `index.html` to add your email and links

### Add New Projects
1. Create a new folder in `images/projects/[project-name]/`
2. Add project images to the folder
3. Add a new project card in `index.html` with slideshow markup
4. Update dots count to match number of slides

## 📧 Contact

- Email: [your-email@example.com](mailto:your-email@example.com)
- GitHub: [@madhumalavika](https://github.com/madhumalavika)

## 📄 License

This portfolio is open source and available under the MIT License.

---

**Made with ❤️ by Madhumalavika | Last Updated: April 2026**
