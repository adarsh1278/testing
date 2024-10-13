"use client";
import { useState } from 'react';
import Link from 'next/link';


export function AdditionSidebarItem({ imgSrc, hoverImgSrc, label, link, isSelected, onClick }) {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <Link
      className={`ml-[15%] w-[75%] px-[2%] flex flex-row justify-start mt-[3%] h-[35px] items-center 
                  ${isSelected ? "bg-[#1E3A8A] text-white" : "text-[#667085]"} 
                  hover:bg-[#1E3A8A] hover:text-white`}
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
      onClick={onClick} // Handle click
     href={link}

    >
    
      <img
        src={isHovered||isSelected ? hoverImgSrc : imgSrc} 
        className='h-[20px] drop-shadow-4xl'
      />
      <div className="ml-[10%]">{label}</div>
    </Link>
  );
}
