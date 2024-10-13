// AdditionSidebarItem.jsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { SheetClose } from '@/components/ui/sheet';// Import SheetClose

// Reusable AdditionSidebarItem component
export function AdditionSidebarItem({ imgSrc, hoverImgSrc, label, link }) {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <SheetClose asChild>
      <Link href={link}>
        <div
          className="ml-[15%] w-[75%] px-[2%] text-[#667085] flex flex-row hover:bg-[#1E3A8A] hover:text-white justify-start mt-[3%] h-[35px] items-center"
          onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
          {/* Change the image based on hover state */}
          <img
            src={isHovered ? hoverImgSrc : imgSrc} // Dynamic image source based on hover state
            className='h-[20px] drop-shadow-4xl'
          />
          <div className="ml-[10%]">{label}</div>
        </div>
      </Link>
    </SheetClose>
  );
}
