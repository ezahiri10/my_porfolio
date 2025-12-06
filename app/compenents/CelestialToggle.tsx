"use client";
import { motion } from "framer-motion";

interface CelestialToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const CelestialToggle = ({ isDarkMode, setIsDarkMode }: CelestialToggleProps) => {
  return (
    <motion.button
      onClick={() => {
        if (typeof setIsDarkMode === "function") {
          setIsDarkMode(!isDarkMode);
        }
      }}
      className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 backdrop-blur-md border-2 border-white/30 shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      type="button"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 0 : 180, opacity: isDarkMode ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute"
      >
        <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0, opacity: isDarkMode ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute"
      >
        <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.83-2.83a1 1 0 00-1.414 1.414l2.83 2.83a1 1 0 001.414-1.414zM2.05 6.464l2.83 2.83a1 1 0 101.414-1.414L3.464 5.05A1 1 0 102.05 6.464zm9.9-1.414a1 1 0 00-1.414 1.414l2.83 2.83a1 1 0 001.414-1.414l-2.83-2.83zM2.464 16.95l2.83-2.83a1 1 0 001.414 1.414l-2.83 2.83a1 1 0 00-1.414-1.414zM17 11a1 1 0 100-2h-2a1 1 0 100 2h2zm2-4a1 1 0 01-2 0 1 1 0 012 0zM1 11a1 1 0 100-2H0a1 1 0 100 2h1zm16-5a1 1 0 01-2 0 1 1 0 012 0z" clipRule="evenodd" />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default CelestialToggle;
