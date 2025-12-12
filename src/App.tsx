import { useState, useEffect, lazy, Suspense } from 'react';
import { SpaceScene } from './components/3d/SpaceScene';
import { Hero } from './components/ui/Hero';
import { Navigation } from './components/ui/Navigation';
import { ProjectDetails } from './components/ui/ProjectDetails';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Footer } from './components/ui/Footer';
import type { Project } from './data/projects';

// Lazy load heavy components
const About = lazy(() => import('./components/ui/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./components/ui/Contact').then(module => ({ default: module.Contact })));
const Experience = lazy(() => import('./components/ui/Experience').then(module => ({ default: module.Experience })));

type View = 'home' | 'about' | 'experience' | 'contact';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="w-full h-full relative">
      {/* 3D Space Scene - Only render on home for better performance */}
      {currentView === 'home' && (
        <SpaceScene
          onProjectSelect={setSelectedProject}
          selectedProject={selectedProject}
        />
      )}

      {/* Top Navigation Menu */}
      <div className="fixed top-3 md:top-6 right-3 md:right-6 z-50 pointer-events-auto">
        <div className="glass-effect rounded-lg md:rounded-xl p-1.5 md:p-2 flex gap-1 md:gap-2">
          {(['home', 'about', 'experience', 'contact'] as View[]).map((view) => (
            <button
              key={view}
              onClick={() => {
                setCurrentView(view);
                setSelectedProject(null);
              }}
              className={`px-2 md:px-4 py-1.5 md:py-2 rounded-md md:rounded-lg transition-all capitalize text-xs md:text-sm ${
                currentView === view
                  ? 'bg-blue-500/30 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* Conditional Content Based on View */}
      {currentView === 'home' && (
        <>
          <Hero />
          <Navigation
            selectedProject={selectedProject}
            onProjectSelect={setSelectedProject}
          />
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </>
      )}

      <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center z-30"><div className="text-white">Loading...</div></div>}>
        {currentView === 'about' && <About />}
        {currentView === 'experience' && <Experience />}
        {currentView === 'contact' && <Contact />}
      </Suspense>

      {/* Footer - Always visible */}
      <Footer />
    </div>
  );
}

export default App;
