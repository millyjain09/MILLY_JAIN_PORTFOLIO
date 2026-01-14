import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AvatarScene from "./canvas/AvatarScene"; // 👈 Import Avatar

import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 min-h-screen selection:bg-blue-500 selection:text-white">
      
      <Navbar />

      {/* --- HERO WRAPPER --- */}
      <div className="relative h-screen w-full overflow-hidden">
        
        {/* Layer 1: Avatar (Background) */}
        {/* inset-0 makes it cover full screen, z-0 puts it behind */}
        <div className="absolute inset-0 z-0">
          <AvatarScene />
        </div>

        {/* Layer 2: Hero Text (Foreground) */}
        {/* pointer-events-none allows clicking on avatar if needed, but we re-enable pointer-events-auto for buttons */}
        <div className="relative z-10 h-full pointer-events-none">
           <Hero />
        </div>
        
        {/* Gradient Overlay for bottom blending */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white dark:from-black to-transparent z-10" />
      </div>

      {/* --- OTHER SECTIONS --- */}
      <main className="relative z-20 bg-white dark:bg-black">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}

export default App;