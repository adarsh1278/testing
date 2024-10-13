"use client";
import { useState } from 'react';
import Link from 'next/link';
import { SheetClose } from '../../ui/sheet';


export function SidebarItem({ imgSrc, hoverImgSrc, label, link, isSelected, onClick }) {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <SheetClose asChild>
      <h1>
        <div
          className={`ml-[2px] w-[91%] text-lg font-semibold flex flex-row justify-start mt-[13px] h-[40px] items-center px-3 
                      ${isSelected ? "bg-[#1E3A8A] text-white" : "text-[#0A1629]"} 
                      hover:bg-[#1E3A8A] hover:text-white`}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          onClick={onClick} 
        >
        
          <img
            src={isHovered ? hoverImgSrc : imgSrc} 
            className='h-[30px] drop-shadow-4xl'
          />
          <div className="ml-[10%]">{label}</div>
        </div>
      </h1>
    </SheetClose>
  );
}
