"use client";
import * as React from "react";
import { useState } from "react";

import Filetable from "@/components/startup/filetable";

import Evaluation from "@/components/startup/evaluation";


export default function Page() {
  const [selectButton, setSelectButton] = useState(1);



  const handleButtonClick = (buttonId) => {
    setSelectButton(buttonId);
  };

  return (
    <div className="w-full full py-[2%] pl-[2%] pr-[1%] ">
      <div className="w-[97%] h-[96%] border border-gray-300 flex flex-row  max-sm:flex-col max-sm:h-auto justify-start items-start">
        <div className="w-full h-full sm:w-[25%] p-[1%]">
          <div className="w-full h-full border border-gray-300 flex flex-col justify-start gap-y-3 items-start">
            <img src="/Container.png" className="w-[150px] h-[160px] mx-auto mt-5" />
            <button
              onClick={() => handleButtonClick(1)} 
              className={`w-[160px] h-[45px] pl-1 border mx-auto rounded-lg py-2 border-gray-200 
                          ${selectButton === 1 ? "bg-[#1E3A8A] text-white" : "bg-white hover:bg-[#1E3A8A] hover:text-white"}`}
            >
              Overview
            </button>
            <button
              onClick={() => handleButtonClick(2)}  
              className={`w-[160px] h-[45px] pl-1 border  rounded-lg py-2 border-gray-200 mx-2 
                          ${selectButton === 2 ? "bg-[#1E3A8A] text-white" : "bg-white hover:bg-[#1E3A8A] hover:text-white"}`}
            >
              Files/Docs
            </button>
            <button
              onClick={() => handleButtonClick(3)}  
              className={`w-[160px] h-[45px] pl-1 border mx-auto rounded-lg py-2 border-gray-200 
                          ${selectButton === 3 ? "bg-[#1E3A8A] text-white" : "bg-white hover:bg-[#1E3A8A] hover:text-white"}`}
            >
              Evaluation History
            </button>
          </div>
        </div>

        <div className="bg-white  mx-10 my-8  sm:max-xl:w-[600px]  max-sm:w-min max-sm:justify-center max-sm:ml-5">
          <div className="">
            <div className="font-bold  mb-4"><h4>Protut</h4></div>

            <div>
              <p>XYZ Innovations is a FinTech company specializing in AI-powered financial tools for small businesses. Founded in 2018, we focus on automating financial processes like invoicing and cash flow management. With over 500 clients globally, we recently raised $10 million in Series A funding. Our mission is to simplify financial management for businesses using cutting-edge technology...</p>
            </div>
          </div>


          {selectButton == 1 ? (
            <div className="flex flex-col gap-4 mt-8  justify-start  sm:max-xl:w-[600px]  max-sm:w-min max-sm:justify-center   ">

              <div className="flex flex-row gap-14 ">

                <div className=" flex flex-col gap-10 font-bold text-gray-600  ml-10 max-sm:gap-4">
                  <p>Founder</p>
                  <p>Location</p>
                  <p>Industry </p>
                  <p>Current Stage</p>
                  <p>Funding </p>


                </div>
                <div className="flex flex-col gap-10 max-sm:gap-4">
                  <p>John Doe, Jane Smith</p>

                  <p>San Francisco, California, USA</p>
                  <p>FinTech (Financial Technology)</p>
                  <p>Series A (Growth)</p>
                  <p>$10 million raised in Series A, led by XYZ Capital</p>
                </div>

              </div>


            </div>
          ) : selectButton === 2 ? (
            
<Filetable/>
            
          ) : selectButton === 3 ? (
            
<Evaluation/>
            
          ) : (
            <div>
              <h1>DEFAULT CASE</h1>
            </div>
          )}



        </div>
      </div>
    </div>
  );
}
