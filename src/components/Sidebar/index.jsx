"use client";
import { SidebarItem } from "./sliderbarLinkcomponent";
import { AdditionSidebarItem } from "./sidebaraddiitonallink";
import Link from "next/link";
import { useState } from "react";

export function Sidebar() {
  const [selectedItem, setSelectedItem] = useState("dashboard");

  const handleAdditionSidebarItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="min-h-screen h-full justify-start mx-[1%] items-start flex flex-col overflow-x-hidden bg-[#FDFDFD]">
      <div className="w-full flex justify-center items-center flex-row mt-[50px]">
        <img src="/kiet.svg" className="h-[57px] mr-3" />
        <img src="/tbi.svg" className="h-[57px]" />
      </div>
      <div className="w-full flex justify-center mt-[20px]">
        <hr className="w-[200px] h-[2.3px] bg-[#EAECF0]" />
      </div>
      <div className="mt-[13px] w-full">
        <Link href="/program/dashboard">
          <SidebarItem
            imgSrc="/projects1.svg"
            hoverImgSrc="/projects.svg"
            label="Manage Dashboard"
            link="/program/dashboard"
            isSelected={selectedItem === "dashboard"}
            onClick={() => handleAdditionSidebarItemClick("dashboard")}
          />
        </Link>
      </div>
      <div className="mt-[10px] w-full">
        <SidebarItem
          imgSrc="/projects1.svg"
          hoverImgSrc="/projects.svg"
          label="Program"
          link="/program/programs"
        />
        <div className="w-full flex flex-col justify-center">
          <AdditionSidebarItem
            imgSrc="/inactive.svg"
            hoverImgSrc="/projects.svg"
            label="Nidhi EIR"
            link="/program/programs/nidhi"
            isSelected={selectedItem === "nidhi"}
            onClick={() => handleAdditionSidebarItemClick("nidhi")}
          />
          <AdditionSidebarItem
            imgSrc="/inactive.svg"
            hoverImgSrc="/projects.svg"
            label="Twaran"
            link="/program/programs/space"
            isSelected={selectedItem === "twaran"}
            onClick={() => handleAdditionSidebarItemClick("twaran")}
          />
          <AdditionSidebarItem
            imgSrc="/inactive.svg"
            hoverImgSrc="/projects.svg"
            label="Nidhi Prayas"
            link="/program/programs/nidhiprayas"
            isSelected={selectedItem === "nidhiprayas"}
            onClick={() => handleAdditionSidebarItemClick("nidhiprayas")}
          />
          <AdditionSidebarItem
            imgSrc="/inactive.svg"
            hoverImgSrc="/projects.svg"
            label="Twaran"
            link="/program/programs/infrastructure"
            isSelected={selectedItem === "infrastructure"}
            onClick={() => handleAdditionSidebarItemClick("infrastructure")}
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-[30px]">
        <hr className="w-[200px] h-[2.3px] bg-[#EAECF0]" />
      </div>
      <div className="ml-[20%] mt-[20px] text-xl text-[#92929D] drop-shadow-md font-bold text-stroke">
        Quick link
      </div>
      <div className="flex flex-col justify-start w-full pt-[20px] text-[#0A1629]">
        <Link href="/review-startups" className="text-lg ml-[23%] hover:underline">
          Review Startup
        </Link>
        <Link href="/startup-facilities" className="text-lg ml-[23%] mt-[15px] hover:underline">
          Startup Facilities
        </Link>
        <Link href="/evaluation-questions" className="text-lg ml-[23%] mt-[15px] hover:underline">
          Evaluation Questions
        </Link>
        <Link href="/startup-profiles" className="text-lg ml-[23%] mt-[15px] hover:underline">
          Startup Profile
        </Link>
        <Link href="/investment-records" className="text-lg ml-[23%] mt-[15px] hover:underline">
          Investment Records
        </Link>
      </div>
    </div>
  );
}
