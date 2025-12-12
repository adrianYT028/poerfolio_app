import { motion } from 'framer-motion';

export function Experience() {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Medoc Health IT Pvt Ltd',
      period: 'Jan 2025 - Apr 2025',
      type: 'Internship',
      description: 'Developed React.js analytics dashboard and optimized backend APIs for healthcare IT solutions in a remote collaborative environment.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
      achievements: [
        'Built analytics dashboard that accelerated reporting by 35%',
        'Empowered 5+ client teams with faster insights',
        'Refactored backend APIs, cutting latency by 40%',
        'Reduced server costs by 15% through optimization'
      ]
    },
    {
      title: 'Freelance Full-Stack Developer',
      company: 'SrajanVastu',
      period: 'Oct 2024 - Nov 2024',
      type: 'Freelancing',
      description: 'Developed mobile-responsive web platform for architecture and interior design services with Apache-compatible deployment.',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Apache'],
      achievements: [
        'Built fully responsive architecture portfolio',
        'Implemented mobile-first design principles',
        'Deployed production-ready application'
      ]
    },
    {
      title: 'Research Contributor',
      company: 'IEEE ICAFT 2025 Conference',
      period: 'Jan 2025 - Present',
      type: 'Research',
      description: 'Co-authored research paper on adversarial stability of fake news classifiers using transformer embeddings.',
      technologies: ['Machine Learning', 'NLP', 'Transformers', 'Research'],
      achievements: [
        'Paper accepted at ICAFT 2025 (Paper ID: ICAFT2026-394)',
        'Evaluated classical ML models against adversarial attacks',
        'Applied modern transformer-based embeddings'
      ]
    }
  ];

  const education = {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Bennett University',
    location: 'Greater Noida, India',
    period: '2022 - 2026',
    highlights: [
      'Specializing in Computer Science',
      'Focus on Full-Stack Development and Cloud Technologies',
      'Active contributor to technical projects'
    ]
  };

  return (
    <div className="fixed inset-0 overflow-y-auto z-30 pointer-events-none">
      <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl w-full space-y-8 pointer-events-auto"
        >
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect p-4 md:p-8 rounded-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-glow mb-6">Education</h2>
            
            <div className="border-l-2 border-blue-400/30 pl-4 md:pl-6">
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <div className="text-3xl md:text-4xl">🎓</div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">{education.degree}</h3>
                  <div className="text-blue-300 font-medium mb-1 text-sm md:text-base">{education.institution}</div>
                  <div className="text-xs md:text-sm text-gray-400 mb-3">
                    {education.location} • {education.period}
                  </div>
                  <ul className="space-y-2">
                    {education.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-effect p-4 md:p-8 rounded-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-glow mb-6">Experience & Research</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="border-l-2 border-purple-400/30 pl-4 md:pl-6 relative"
                >
                  <div className="absolute -left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full"></div>
                  
                  <div className="mb-2">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <h3 className="text-lg md:text-xl font-bold text-white">{exp.title}</h3>
                      <span className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-blue-300 font-medium mb-1 text-sm md:text-base">{exp.company}</div>
                    <div className="text-xs md:text-sm text-gray-400 mb-3">{exp.period}</div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm md:text-base">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect p-4 md:p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-glow mb-4">Contributions</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-gray-300 mb-2 text-sm md:text-base">
                  Active contributor with <span className="text-blue-300 font-bold">350+</span> contributions in the last year
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  <span className="text-green-400">44 repositories</span> • Focus on web development, ML, and system design
                </p>
              </div>
              <a
                href="https://github.com/adrianYT028"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all text-sm whitespace-nowrap"
              >
                View GitHub →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
