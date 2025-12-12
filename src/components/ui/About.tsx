import { motion } from 'framer-motion';

export function About() {
  const skills = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'],
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Three.js', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'Flask', 'Lambda', 'REST APIs'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'Supabase'],
    cloud: ['AWS (Bedrock, Lambda, S3, Cognito)', 'Azure', 'Heroku', 'Apache'],
    mlai: ['Machine Learning', 'NLP', 'TensorFlow', 'LangChain', 'RandomForest', 'OpenAI', 'Perplexity AI'],
    tools: ['Git', 'Docker', 'VS Code', 'Winsock2', 'TCP/IP', 'HTTP/1.1']
  };

  const stats = [
    { label: 'Projects Completed', value: '30+' },
    { label: 'GitHub Contributions', value: '350+' },
    { label: 'Technologies', value: '30+' },
    { label: 'Research Papers', value: '1' }
  ];

  return (
    <div className="fixed inset-0 overflow-y-auto z-30 pointer-events-none">
      <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl w-full pointer-events-auto"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-glow mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* About Content */}
          <div
            className="glass-effect p-8 rounded-2xl mb-8"
          >
            <h2 className="text-3xl font-bold text-glow mb-6">About Me</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hi! I'm Kartik Bhat, a passionate Full-Stack Developer pursuing B.Tech in Computer Science 
                at Bennett University. I specialize in building scalable web applications, serverless architectures, 
                and AI-powered solutions.
              </p>
              <p>
                With expertise in modern web technologies and cloud platforms, I've developed innovative projects 
                ranging from serverless document chat applications to AI-powered farming assistants. My work combines 
                cutting-edge technology with practical problem-solving.
              </p>
              <p>
                I'm particularly interested in cloud-native development, machine learning integration, and creating 
                intuitive user experiences. My research contribution in adversarial stability of fake news classifiers 
                was accepted at the IEEE ICAFT 2025 Conference.
              </p>
              <p>
                When I'm not coding, I contribute to open-source projects, explore new technologies, and mentor 
                aspiring developers. I'm always open to collaborating on innovative projects and learning opportunities.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className="glass-effect p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-glow mb-6">Technical Skills</h2>
            
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-blue-300 mb-3 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm border border-white/10 hover:border-white/30 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
