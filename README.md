# 🚀 Space Portfolio

A stunning 3D space-themed portfolio built with React, Three.js, and TypeScript. Navigate through a cosmic scene where each project is represented as an interactive planet.

## ✨ Features

- **3D Space Environment** - Fully interactive 3D scene with orbiting planets
- **Planet Navigation** - Each project is a unique planet with its own characteristics
- **Smooth Animations** - Framer Motion for buttery UI transitions
- **Responsive Design** - Works beautifully on all devices
- **Interactive Controls** - Drag to explore, zoom, and click planets for details

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for R3F
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd potfolio app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Adding Your Projects

Edit `src/data/projects.ts` to add your own projects:

```typescript
{
  id: 1,
  name: "Your Project Name",
  description: "Project description",
  technologies: ["React", "Node.js"],
  planetColor: "#ff6b6b",
  planetSize: 1.2,
  orbitRadius: 5,
  orbitSpeed: 0.5,
  github: "https://github.com/yourname/project",
  demo: "https://demo.com"
}
```

### Customizing Colors

Modify the Tailwind config in `tailwind.config.js` or update planet colors in the projects data.

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎮 Controls

- **Mouse Drag** - Rotate the camera
- **Scroll** - Zoom in/out
- **Click Planet** - View project details
- **Bottom Nav** - Quick access to all projects

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ and ☕
