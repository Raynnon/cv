# CV Project

A modern, responsive CV website built with React 18, showcasing professional experience, skills, and projects.

## ✨ Features

- **Modern React 18** - Latest React APIs (createRoot, StrictMode)
- **Responsive Design** - Mobile, tablet, and desktop support
- **Clean Architecture** - Separated data, components, and styling
- **Easy to Customize** - All personal data in dedicated files
- **Type-Safe** - PropTypes validation for all components
- **Performance Optimized** - Code splitting and lazy loading

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Raynnon/cv.git
cd cv

# Install dependencies
npm install

# Start development server
npm start
```

The website will open at `http://localhost:3000`.

## 📝 Customization

All personal data is stored in `src/data/` for easy updates. Simply edit these files:

- **`src/data/profile.js`** - Personal info, introduction, social links
- **`src/data/skills.js`** - Technical skills and logos
- **`src/data/projects.js`** - Portfolio projects and websites

**See [STRUCTURE.md](./STRUCTURE.md) for detailed customization guide.**

## 🛠️ Available Commands

```bash
npm start        # Start development server (localhost:3000)
npm run build    # Build for production
npm test         # Run tests
```

## 🔧 Technologies

- **Frontend**: React 18, React-Bootstrap
- **Styling**: Sass/SCSS, Bootstrap 5
- **Tooling**: Create React App, PropTypes
- **Validation**: PropTypes for type safety

## 📁 Project Structure

```text
cv/
├── src/
│   ├── components/     # React components
│   ├── data/          # Personal data (edit here!)
│   ├── constants/     # App constants
│   └── images/        # Image assets
├── public/            # Static files
├── STRUCTURE.md       # Detailed documentation
└── README.md          # This file
```

## 📖 Documentation

- **[STRUCTURE.md](./STRUCTURE.md)** - Complete guide to file organization and customization

## 📄 License

Open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own CV!
