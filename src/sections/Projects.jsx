import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, FolderGit2 } from 'lucide-react';

const majorProjects = [
  {
    title: "Chit Chat",
    subtitle: "Real-Time Communication Platform",
    description: "A secure MERN Stack chat application featuring instantaneous messaging, WebRTC Video/Voice calling, and multi-user group chats. Supports real-time file sharing and dynamic status tracking.",
    tech: ["MERN Stack", "Socket.io", "WebRTC", "Chakra UI"],
    github: "https://github.com/millyjain09/ChitChat",
    live: "https://chit-chat-nine-omega.vercel.app/",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Shop Verse",
    subtitle: "AI-Powered E-commerce",
    description: "A full-stack e-commerce solution integrating Google AI API for 24/7 customer support and natural language navigation. Includes a secure Admin Panel and JWT authentication.",
    tech: ["MERN", "Google Gemini API", "JWT", "Tailwind"],
    github: "https://github.com/millyjain09/Shopverse",
    live: "https://shopverse-pi.vercel.app/",
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "NewsHub",
    subtitle: "Smart News Aggregator",
    description: "A responsive news application leveraging News API for real-time global headlines. Features infinite scrolling, date-based search, and category filtering for seamless UX.",
    tech: ["React.js", "News API", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/millyjain09/NewHub",
    live: "https://new-hub-nine.vercel.app/",
    color: "from-orange-400 to-amber-500"
  }
];

const minorProjects = [
  {
    title: "Quiz Management System",
    desc: "A Quiz Management System that allows admins to manage quizzes and users to attempt tests online.",
    tech: ["HTML/CSS", "JavaScript", "PHP"]
  },
  {
    title: "Spotify Clone",
    desc: "Music streaming UI with playback controls.",
    tech: ["HTML/CSS", "JavaScript"]
  },
  {
    title: "Ai Image Generator",
    desc: "Generate Image from text prompt",
    tech: ["React", "Rapid Api"]
  },
  {
    title: "Ai MockMate",
    desc: "AI MockMate helps students prepare for interviews using AI-driven mock interviews and instant feedback.",
    tech: ["GenAi"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Projects
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Showcasing my journey in Full Stack Development and Generative AI.
        </p>
      </motion.div>

      {/* MAJOR PROJECTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {majorProjects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => window.open(project.live, "_blank")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg dark:shadow-none hover:shadow-xl dark:hover:border-white/20 transition-all duration-300 flex flex-col h-full cursor-pointer"
          >
            {/* Gradient Top Line */}
            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10`}>
                  <Code2 className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all">
                {project.title}
              </h3>

              <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                {project.subtitle}
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 rounded border border-gray-200 dark:border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MINOR PROJECTS */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <FolderGit2 className="text-blue-500 dark:text-blue-400" />
          Other Noteworthy Projects
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {minorProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 transition-all flex justify-between items-center group"
            >
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm">{project.desc}</p>
              </div>
              <div className="text-xs text-gray-400 text-right">
                {project.tech.join(" • ")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
