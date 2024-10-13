"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function PopoverDemo() {
  const [open, setOpen] = useState(false);

  // Declaring startups
  const startups = [
    { name: "Review", detailUrl: "#alpha" },
    { name: "Review startup", detailUrl: "#beta" },
    { name: "Startup Gamma", detailUrl: "#gamma" },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <img
          src="/notifications.svg"
          alt="Notifications"
          className="group-hover:bg-[#1E3A8A] w-[90%] h-[35px]"
        />
      </PopoverTrigger>
      <PopoverContent className="w-full  flex flex-col items-start     justify-center">
        <div className="w-full flex flex-row justify-between  text-black">
          <span className="text-xl">Notifications</span>
          <X className="cursor-pointer" onClick={() => setOpen(false)} /> {/* Close on click */}
        </div>

        {/* Mapping over the startups array */}
        {startups.map((startup, index) => (
          <div key={index} className="w-full flex flex-col mt-6 justify-between items-start">
            <div className=" text-black">{startup.name}</div>
            <Link className="text-sm text-blue-600" href={startup.detailUrl}>
              View detail
            </Link>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
