// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import AvatarScene from "../canvas/AvatarScene";

// export default function Hero() {

//   const goToContact = () => {
//     const el = document.getElementById("contact");
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen w-full pt-20
//                  bg-white text-gray-900
//                  dark:bg-black dark:text-white
//                  overflow-hidden relative"
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12
//                       grid grid-cols-1 md:grid-cols-2
//                       items-center gap-10 min-h-[80vh]">

//         {/* ================= LEFT CONTENT ================= */}
//         <div className="relative z-10 pointer-events-auto">

//           <motion.span
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="block font-mono mb-4 text-sm md:text-base
//                        text-blue-600 dark:text-blue-500"
//           >
//             Hi, I am
//           </motion.span>

//           <motion.h1
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl lg:text-7xl
//                        font-bold mb-6 leading-tight"
//           >
//             Milly{" "}
//             <span className="text-transparent bg-clip-text
//                              bg-gradient-to-r
//                              from-blue-500 via-purple-500 to-pink-500">
//               Jain
//             </span>
//           </motion.h1>

//           <motion.h2
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-lg md:text-2xl mb-6
//                        text-gray-700 dark:text-gray-300 max-w-xl"
//           >
//             I build{" "}
//             <span className="font-semibold text-gray-900 dark:text-white">
//               Full Stack Apps
//             </span>{" "}
//             infused with{" "}
//             <span className="font-semibold text-gray-900 dark:text-white">
//               Generative AI
//             </span>.
//           </motion.h2>

//           <p className="italic mb-8 text-gray-600 dark:text-gray-400">
//             "Turning Logic into Magic with Code."
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-wrap gap-4">
//             <a
//               href="/resume/Milly_Jain_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-3 bg-blue-600 hover:bg-blue-700
//                          text-white rounded-full flex items-center gap-2
//                          transition-all shadow-lg
//                          hover:scale-105 active:scale-95"
//             >
//               View Resume <ArrowRight className="w-4 h-4" />
//             </a>

//             <button
//               onClick={goToContact}
//               className="px-6 py-3 rounded-full border
//                          border-gray-300 dark:border-white/20
//                          text-gray-900 dark:text-white
//                          hover:bg-gray-100 dark:hover:bg-white/10
//                          transition-all hover:scale-105 active:scale-95"
//             >
//               Contact Me
//             </button>
//           </div>
//         </div>

//         {/* ================= RIGHT AVATAR ================= */}
//         <div className="relative w-full h-[350px] md:h-[500px]
//                         pointer-events-none">
//           <AvatarScene />
//         </div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AvatarScene from "../canvas/AvatarScene";

export default function Hero() {

  const goToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full pt-20
                 bg-white text-gray-900
                 dark:bg-black dark:text-white
                 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12
                      grid grid-cols-1 md:grid-cols-2
                      items-center gap-10 min-h-[80vh]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-10 pointer-events-auto">

          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="block font-mono mb-4 text-sm md:text-base
                       text-blue-600 dark:text-blue-500"
          >
            Hi, I am
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl
                       font-bold mb-6 leading-tight"
          >
            Milly{" "}
            <span className="text-transparent bg-clip-text
                             bg-gradient-to-r
                             from-blue-500 via-purple-500 to-pink-500">
              Jain
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl mb-6
                       text-gray-700 dark:text-gray-300 max-w-xl"
          >
            I build{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Full Stack Apps
            </span>{" "}
            infused with{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Generative AI
            </span>.
          </motion.h2>

          <p className="italic mb-8 text-gray-600 dark:text-gray-400">
            "Turning Logic into Magic with Code."
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume/Milly_Jain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700
                         text-white rounded-full flex items-center gap-2
                         transition-all shadow-lg
                         hover:scale-105 active:scale-95"
            >
              View Resume <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={goToContact}
              className="px-6 py-3 rounded-full border
                         border-gray-300 dark:border-white/20
                         text-gray-900 dark:text-white
                         hover:bg-gray-100 dark:hover:bg-white/10
                         transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* ================= RIGHT AVATAR ================= */}
        <div className=" relative w-full
    h-[350px] md:h-[500px]
    -mt-24 sm:-mt-24 md:mt-0
    pointer-events-none">
          <AvatarScene />
        </div>

      </div>
    </section>
  );
}
