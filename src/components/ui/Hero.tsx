import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full p-6 md:p-8 z-40 pointer-events-none"
    >
      <div className="max-w-3xl">
        <motion.h1 
          className="text-4xl md:text-7xl font-extrabold text-glow mb-2 tracking-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Kartik Bhat
        </motion.h1>
        <motion.p 
          className="text-lg md:text-3xl font-light text-blue-200 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Full-Stack Developer
        </motion.p>
        <motion.p 
          className="text-sm md:text-lg text-gray-400 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          B.Tech CSE @ BENNETT UNIVERSITY • Specializing in computer science
        </motion.p>
        <motion.div 
          className="mt-6 flex gap-4 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a 
            href="mailto:kartikbhat028@gmail.com"
            className="px-5 py-2 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg backdrop-blur-sm border border-blue-400/30 transition-all text-sm md:text-base"
          >
            Contact Me
          </a>
          <a 
            href="/Kartik Resume.pdf"
            download="Kartik_Bhat_Resume.pdf"
            className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/20 transition-all text-sm md:text-base"
          >
            Download Resume
          </a>
        </motion.div>
        <motion.p 
          className="text-xs md:text-sm text-gray-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          💫 Click planets to explore projects • 🖱️ Drag to navigate
        </motion.p>
      </div>
    </motion.div>
  );
}
