import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Let's <span className="text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-300">Connect</span>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
          Open to <strong>Internships</strong> and <strong>Full-time opportunities</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <ContactCard href="mailto:millyjain88@gmail.com" icon={<Mail />} title="Email Me" sub="millyjain88@gmail.com" />
          <ContactCard href="https://linkedin.com/in/milly-jain" icon={<Linkedin />} title="LinkedIn" sub="Let's Connect" />
          <ContactCard href="https://github.com/millyjain09" icon={<Github />} title="GitHub" sub="Check my Code" />
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-gray-200 dark:border-white/10 pt-8">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" /> <span>Jind, Haryana</span>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Milly Jain.</p>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ href, icon, title, sub }) {
  return (
    <motion.a 
      href={href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}
      // 👇 FIXED: White background + Shadow for Light Mode
      className="flex flex-col items-center justify-center p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-md dark:shadow-none hover:border-blue-500 transition-all duration-300 group"
    >
      <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-full mb-4 text-blue-600 dark:text-white group-hover:bg-blue-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{sub}</p>
    </motion.a>
  );
}