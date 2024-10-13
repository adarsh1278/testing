"use client";
import { usePathname } from "next/navigation";

import { Sidebar } from "@/components/Sidebar";
import { Nav } from "@/components/Navbar";
import { SheetDemo } from "@/components/Sidebar/mobilescreen/sidebarSheet";
// Load local fonts




export default function Layout({ children }) {


  return (
   
          <div className="flex flex-row w-full h-full   bg-[#FDFDFD]">
            {/* Sidebar - fixed on larger screens */}
            <div className="h-[900px] w-[20%]    hidden lg:block lg:fixed overflow-y-auto no-scrollbar  drop-shadow-md rounded-md mx-[.5%]">
              <Sidebar />
            </div>

            {/* Main content area */}
            <div className="flex flex-col min-h-screen w-full lg:w-[80%] lg:ml-[20%]  overflow-hidden ">
              {/* Navbar */}
              <div className=" w-full lg:w-[81%]  h-[12%] fixed bg-white flex items-center  justify-start  z-10">
                <div className=" lg:hidden mt-0   mb-[12px] lg:mb-8 "><SheetDemo/></div>
                <Nav />
              </div>

              {/* Content area with background */}
              <div className="mt-[12vh] w-full bg-[#FDFDFD]   min-h-[87%] max-h-fit flex justify-start    ">
                {children}
              </div>
            </div>
          </div>
  );
}
