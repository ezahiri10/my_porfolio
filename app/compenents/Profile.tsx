"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* ...existing code... */}

      <motion.div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT SIDE - TEXT */}
        <motion.div className="space-y-8" variants={itemVariants}>
          <div className="space-y-4">
            <motion.div className="inline-block" variants={itemVariants}>
              <span className="text-primary-500 text-sm font-semibold px-4 py-2 bg-primary-500/10 rounded-full">
                👋 Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1 className="text-5xl md:text-7xl font-black text-white leading-tight" variants={itemVariants}>
              I'm <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">Mostapha</span>
            </motion.h1>
            
            <motion.div className="h-20" variants={itemVariants}>
              <p className="text-2xl md:text-4xl font-bold text-secondary-300">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1500,
                    'Problem Solver',
                    1500,
                    'Tech Innovator',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-primary-400"
                />
              </p>
            </motion.div>
          </div>

          <motion.p className="text-lg text-secondary-400 leading-relaxed max-w-2xl" variants={itemVariants}>
            Crafting scalable solutions with modern tech stack. Specialized in full-stack development, 
            system design, and building products that matter.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-xl shadow-2xl shadow-primary-500/50 transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 font-bold rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Download CV
            </motion.button>
          </motion.div>

          <motion.div className="flex gap-6 pt-4" variants={itemVariants}>
            {/* ...existing social links... */}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div className="relative flex justify-center items-center" variants={imageVariants}>
          {/* ...existing image code... */}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDownIcon className="w-8 h-8 text-primary-500" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
