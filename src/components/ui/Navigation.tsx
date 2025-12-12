import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import type { Project } from '../../data/projects';

interface NavigationProps {
  selectedProject: Project | null;
  onProjectSelect: (project: Project) => void;
}

export function Navigation({ selectedProject, onProjectSelect }: NavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed bottom-0 left-0 w-full p-6 z-40"
    >
      <div className="glass-effect rounded-2xl p-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => onProjectSelect(project)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all ${
                selectedProject?.id === project.id
                  ? 'bg-white/20 ring-2 ring-white/50'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.planetColor }}
                />
                <span className="text-sm font-medium whitespace-nowrap">
                  {project.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
