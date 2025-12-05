import React from 'react'

const TabButton = ({ selectTab, active, children }) => {
  const styleTab = active 
    ? "border-b-2 border-primary-500 text-white" 
    : "text-secondary-500"

  return (
    <span  
      className={`cursor-pointer mx-4 lg:text-lg hover:text-white transition-all duration-200 ${styleTab}`}
      onClick={selectTab}
    >
      {children}
    </span>
  )
}

export default TabButton
