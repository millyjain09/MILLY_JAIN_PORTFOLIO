import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    company: "Skilligence EdTech",
    role: "Generative AI Intern",
    period: "June 2025 - July 2025",
    location: "Rohini, New Delhi",
    description: [
      "Designed and optimized Transformer architectures for sentiment analysis and multilingual translation.",
      "Constructed an AI-powered interview simulator, reducing preparation time for candidates.",
      "Deployed GenAI solutions leveraging NLP and Computer Vision models."
    ],
    tech: ["Python", "Transformers", "NLP", "Prompt Engineering"]
  },
  {
    company: "Geeta University",
    role: "Software Development Intern",
    period: "June 2024 - July 2024",
    location: "Panipat, Haryana",
    description: [
      "Leveraged C++ to optimize algorithms (BFS, Dijkstra), boosting core functionality by over 30%.",
      "Designed quiz management features, improving backend performance and query speed.",
      "Cultivated advanced algorithmic thinking through 200+ competitive coding problems."
    ],
    tech: ["C++", "Data Structures", "Backend Logic", "Algorithms"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto relative">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Professional <span className="text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-300">Experience</span>
        </h2>
      </motion.div>

      <div className="space-y-12 relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-blue-500/30 hidden md:block" />

        {experienceData.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row gap-8 relative ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot (Center) */}
            <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full -translate-x-1/2 md:-translate-x-[9px] shadow-[0_0_10px_rgba(37,99,235,0.5)] hidden md:block" />

            {/* Empty Space for alignment */}
            <div className="flex-1 hidden md:block" />

            {/* Card Content */}
            <div className="flex-1">
              {/* Card Container */}
              <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-2xl shadow-md dark:shadow-none hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 group">
                
                <div className="flex justify-between items-start mb-2">
                  <div>
                    {/* Role Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    {/* Company Name */}
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  {/* Date Badge */}
                  <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded border border-gray-200 dark:border-white/5">
                    {exp.period}
                  </span>
                </div>
                
                {/* Location */}
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 flex items-center gap-1">
                  📍 {exp.location}
                </p>

                {/* Description Bullets */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 text-sm flex gap-2">
                      <span className="text-blue-500 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-500/10 px-2 py-1 rounded border border-cyan-200 dark:border-transparent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}