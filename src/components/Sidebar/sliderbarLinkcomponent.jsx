"use client";
import { useState } from 'react';

// Reusable SidebarItem component
export function SidebarItem({ imgSrc, hoverImgSrc, label, link, isSelected, onClick }) {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <div
      className={`ml-[2px] w-[91%] text-lg font-semibold flex flex-row justify-start mt-[13px] h-[40px] items-center px-3 
                  ${isSelected ? "bg-[#1E3A8A] text-white" : "text-[#0A1629]"} 
                  hover:bg-[#1E3A8A] hover:text-white`}
      onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
      onClick={onClick} // Handle click
    >
      {/* Change the image based on hover state */}
      <img
        src={isHovered||isSelected ? hoverImgSrc : imgSrc} // Dynamic image source based on hover state
        className='h-[30px] drop-shadow-4xl'
      />
      <div className="ml-[10%]">{label}</div>
    </div>
  );
}
