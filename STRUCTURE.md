# Project Structure & Customization Guide

This document provides a detailed guide to the project's file structure and step-by-step instructions for customizing your CV.

## 📁 Detailed File Organization

```text
cv/
├── src/
│   ├── components/              # React components
│   │   ├── header/
│   │   │   ├── Header.js       # Header component with intro
│   │   │   ├── index.js        # Export file
│   │   │   ├── *.png           # Header images
│   │   │   └── *.jpg           # Profile pictures
│   │   │
│   │   ├── skills/
│   │   │   ├── Skills.js       # Skills section component
│   │   │   ├── Logo.js         # Individual skill logo component
│   │   │   └── index.js        # Export file
│   │   │
│   │   ├── my-websites/
│   │   │   ├── MyWebsites.js   # Projects list component
│   │   │   ├── ItemContent.js  # Individual project component
│   │   │   ├── index.js        # Export file
│   │   │   └── images/         # Project screenshots
│   │   │
│   │   └── footer/
│   │       ├── Footer.js       # Footer component
│   │       └── index.js        # Export file
│   │
│   ├── data/                    # ⭐ Edit these files to customize your CV
│   │   ├── profile.js          # Personal info, intro text, social links
│   │   ├── skills.js           # Technical skills list
│   │   └── projects.js         # Portfolio projects list
│   │
│   ├── constants/
│   │   └── index.js            # App constants (texts, IDs, dimensions)
│   │
│   ├── images/                 # Global images (logos, icons)
│   │   ├── react.png
│   │   ├── nodejs.png
│   │   └── ...
│   │
│   ├── App.js                  # Main application component
│   ├── index.js                # App entry point
│   ├── app.scss                # Global styles
│   └── custom.scss             # Bootstrap customization
│
├── public/                      # Static files
│   ├── index.html
│   └── ...
│
└── package.json                 # Dependencies and scripts
```

## 🎯 Step-by-Step Customization

### 1️⃣ Update Personal Information

**File:** `src/data/profile.js`

```javascript
export const profile = {
  // Change your display name
  name: 'Your Name',

  // Main heading on the page
  title: 'Hi! I am Your Name!',

  // Introduction section
  introduction: {
    // Main description paragraph
    paragraph1: 'Your professional description here...',

    // Roles section title
    rolesTitle: 'Interested in the following roles:',

    // List of roles (separated by ·)
    roles: 'Web Developer · Backend Engineer · Full Stack',

    // Contact message
    contactMessage: 'Feel free to reach out!',
  },

  // Social media links
  social: {
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
  },
};
```

### 2️⃣ Add or Edit Skills

**File:** `src/data/skills.js`

**Step 1:** Add your logo image to `src/images/`

**Step 2:** Import it at the top of the file:

```javascript
import mySkillLogo from '../images/my-skill.png';
```

**Step 3:** Add the skill to the array:

```javascript
export const skills = [
  {
    name: 'React',
    logo: reactLogo,
    showName: true  // Set to true to show name on hover
  },
  {
    name: 'Your Skill',
    logo: mySkillLogo,
    showName: true
  },
  // Add more skills...
];
```

### 3️⃣ Add or Edit Projects

**File:** `src/data/projects.js`

**Step 1:** Add your project image to `src/components/my-websites/images/`

**Step 2:** Import it at the top of the file:

```javascript
import myProjectImage from '../components/my-websites/images/my-project.jpg';
```

**Step 3:** Add the project to the array:

```javascript
export const projects = [
  {
    name: 'Your Project Name',
    imageAlt: 'descriptive-alt-text',
    liveLink: 'https://your-project.com',           // Optional
    sourceLink: 'https://github.com/you/project',   // Optional
    // OR for separate front/back repos:
    // sourceLinkFront: 'https://github.com/you/frontend',
    // sourceLinkBack: 'https://github.com/you/backend',
    description: 'Brief description of your project and technologies used',
    image: myProjectImage,
  },
  // Add more projects...
];
```

**Project fields explained:**
- `name` - Project title
- `imageAlt` - Alternative text for accessibility
- `liveLink` - Live demo URL (optional)
- `sourceLink` - GitHub repo link for single repo (optional)
- `sourceLinkFront`/`sourceLinkBack` - Separate repos (optional)
- `description` - Short description
- `image` - Imported image

### 4️⃣ Customize Styles

#### Colors and Layout

**File:** `src/app.scss`

Modify global styles, colors, spacing, etc.

```scss
// Example: Change header height
#header {
  height: 100vh;  // Change this value
}

// Example: Change section colors
#skills {
  background-color: #f8f9fa;  // Change color
}
```

#### Bootstrap Variables

**File:** `src/custom.scss`

Override Bootstrap default colors and settings:

```scss
// Primary color
$primary: #007bff;

// Import Bootstrap
@import "~bootstrap/scss/bootstrap";
```

### 5️⃣ Modify Button Texts and Constants

**File:** `src/constants/index.js`

Change button labels, section titles, etc:

```javascript
// Button labels
export const BUTTON_LABELS = {
  SEE_LIVE: 'View Live',          // Change button text
  SOURCE_CODE: 'View Code',       // Change button text
  // ...
};

// Section titles
export const PAGE_TITLES = {
  TECHNICAL_SKILLS: 'My Skills',  // Change section title
  MY_WEBSITES: 'My Work',         // Change section title
};
```

## 💡 Pro Tips

### Adding a New Skill

1. Find or create a 64x64px logo image
2. Save it to `src/images/`
3. Import in `src/data/skills.js`
4. Add object to `skills` array
5. Set `showName: true` for hover effect

### Adding a New Project

1. Take a screenshot of your project
2. Save to `src/components/my-websites/images/`
3. Import in `src/data/projects.js`
4. Add object to `projects` array
5. Fill in all relevant fields
6. The component adapts automatically (no code changes needed)

### Changing Header Image

Replace files in `src/components/header/`:
- `florian-assante-small.png` - Profile picture
- `computer.png` - Decorative image

Keep the same filenames or update imports in `Header.js`.

### Testing Your Changes

```bash
npm start        # See changes in real-time
npm run build    # Test production build
```

## 🔍 Understanding the Architecture

### Data-Driven Design

All content is separated from components:
- **Components** (`src/components/`) - Handle display logic
- **Data** (`src/data/`) - Store actual content
- **Constants** (`src/constants/`) - Define reusable values

This means you can update content without touching React code!

### Component Hierarchy

```text
App
├── Header       (intro, title, images)
├── Skills       (skill logos)
│   └── Logo × N (individual skill)
├── MyWebsites   (projects list)
│   └── ItemContent × N (individual project)
└── Footer       (social links, back-to-top)
```

### PropTypes Validation

Each component validates its props for type safety:

```javascript
Logo.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  showName: PropTypes.bool,
};
```

This helps catch errors early in development.

## 🐛 Troubleshooting

**Image not showing?**
- Check the import path is correct
- Verify the file exists in the specified location
- Clear cache and restart dev server

**Build failing?**
- Run `npm install` to ensure dependencies are up to date
- Check for syntax errors in modified files
- Review console errors for specific issues

**Changes not appearing?**
- Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check that you saved the file
- Restart the development server