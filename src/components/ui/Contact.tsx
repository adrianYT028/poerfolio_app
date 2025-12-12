import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mqarwlzy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('sent');
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'kartikbhat028@gmail.com',
      link: 'mailto:kartikbhat028@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'kartik-bhat-',
      link: 'https://www.linkedin.com/in/kartik-bhat-/'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'adrianYT028',
      link: 'https://github.com/adrianYT028'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Greater Noida, India',
      link: null
    }
  ];

  return (
    <div className="fixed inset-0 overflow-y-auto z-30 pointer-events-none">
      <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pointer-events-auto"
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="glass-effect p-4 md:p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-glow mb-3 md:mb-4">Get In Touch</h2>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through any of these channels!
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {method.link ? (
                      <a
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
                      >
                        <span className="text-2xl md:text-3xl">{method.icon}</span>
                        <div>
                          <div className="text-xs md:text-sm text-gray-400">{method.title}</div>
                          <div className="text-sm md:text-base text-white group-hover:text-blue-300 transition-colors break-all">
                            {method.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl">
                        <span className="text-2xl md:text-3xl">{method.icon}</span>
                        <div>
                          <div className="text-xs md:text-sm text-gray-400">{method.title}</div>
                          <div className="text-sm md:text-base text-white">{method.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-effect p-4 md:p-8 rounded-2xl"
          >
            <h2 className="text-xl md:text-2xl font-bold text-glow mb-4 md:mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm text-gray-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-500"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  status === 'sent'
                    ? 'bg-green-500/20 text-green-300 border-green-400/30'
                    : status === 'error'
                    ? 'bg-red-500/20 text-red-300 border-red-400/30'
                    : status === 'sending'
                    ? 'bg-blue-500/20 text-blue-300 border-blue-400/30 cursor-wait'
                    : 'bg-blue-500/20 hover:bg-blue-500/40 text-white border-blue-400/30 hover:border-blue-400/50'
                } border backdrop-blur-sm`}
              >
                {status === 'sent' 
                  ? '✓ Message Sent!' 
                  : status === 'error'
                  ? '✗ Error! Try again'
                  : status === 'sending' 
                  ? 'Sending...' 
                  : 'Send Message'}
              </button>
            </form>

            {status === 'sent' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-green-300 text-sm"
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-red-300 text-sm"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
