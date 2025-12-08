import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface TabButtonProps {
  selectTab: () => void;
  active: boolean;
  children: ReactNode;
}

const TabButton = ({ selectTab, active, children }: TabButtonProps) => {
  const styleTab = active 
    ? "border-b-2 border-primary-500 text-white" 
    : "text-secondary-500 hover:text-white"

  return (
    <motion.button
      onClick={selectTab}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`cursor-pointer px-4 py-2 transition-all duration-200 font-semibold ${styleTab}`}
    >
      {children}
    </motion.button>
  )
}

export default TabButton
