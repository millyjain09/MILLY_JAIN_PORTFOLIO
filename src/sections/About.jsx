import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Me</span>
          </h2>

          {/* Live Typing Effect */}
          <div className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400 h-8 flex items-center">
            <span className="text-gray-900 dark:text-white mr-2">I am a</span>
            <Typewriter
              options={{
                strings: [
                  "Computer Science Student",
                  "GenAI Enthusiast",
                  "MERN Stack Developer",
                  "DSA Enthusiast"
   
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I am a <strong>Computer Science Engineering</strong> student at <strong>Geeta University</strong> with a consistent academic record <strong>(CGPA: 8.68)</strong>. My passion lies at the intersection of Full-Stack Development and Artificial Intelligence.
          </p>

          {/* 👇 UPDATED PARAGRAPH */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Previously, I worked as a <strong>Generative AI Intern at Skilligence</strong>, where I designed <strong>Transformer architectures</strong> and built an AI-powered interview simulator. I also have a strong grasp of data structures, having solved <strong>200+ DSA problems</strong> on LeetCode and CodeChef.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             Beyond code, I am a certified <strong>Design Thinker</strong> and have served as a <strong>Campus Ambassador</strong>.
          </p>
        </div>

        {/* RIGHT: Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <HighlightCard number="02" label="Internships" sub="Skilligence & Geeta Univ" />
          <HighlightCard number="200+" label="DSA Problems" sub="LeetCode & CodeChef" />
          <HighlightCard number="8.68" label="Current CGPA" sub="B.Tech CSE" />
          <HighlightCard number="03" label="Major Projects" sub="MERN & GenAI" />
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ number, label, sub }) {
  return (
    <div className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-md dark:shadow-none hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 group">
      <h3 className="text-3xl font-bold text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-300 mb-1 group-hover:scale-105 transition-transform">
        {number}
      </h3>
      <p className="text-gray-800 dark:text-white font-medium text-sm">{label}</p>
      <p className="text-gray-500 text-xs mt-1">{sub}</p>
    </div>
  );
}