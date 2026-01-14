import React from 'react';
import { motion } from 'framer-motion';

// Import Brand Icons
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
// 👇 Removed SiVisualstudiocode from here to fix the error
import { SiMongodb, SiExpress, SiTailwindcss, SiCplusplus, SiJavascript, SiPostman, SiOpenai, SiVite, SiMysql } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc"; // 👈 Added this new import

const skillsData = [
  {
    category: "Full Stack Development",
    items: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    ]
  },
  {
    category: "AI & Data Science",
    items: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "GenAI", icon: <SiOpenai className="text-teal-400" /> },
      { name: "NLP", icon: <FaDatabase className="text-blue-300" /> },
    ]
  },
  {
    category: "Languages & Tools",
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> }, // 👈 Updated this line
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Proficiency</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Categories Loop */}
        <div className="space-y-16">
          {skillsData.map((category, index) => (
            <div key={index}>
              
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 pl-4 border-l-4 border-blue-500">
                {category.category}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.items.map((skill, idx) => (
                  <SkillCard key={idx} name={skill.name} icon={skill.icon} index={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Skill Card Component
function SkillCard({ name, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm hover:shadow-md dark:shadow-none hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 group cursor-default"
    >
      {/* Icon Wrapper */}
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Skill Name */}
      <p className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {name}
      </p>
    </motion.div>
  );
}