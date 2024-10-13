"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DataTableDemo } from "@/components/ActivityTable";
import { StatsBar } from "@/components/Statsbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  // Hardcoded event data
  const events = [
    {
      title: "Presentation of the new department",
      date: "Today",
      time: "5:00 PM",
    },
    {
      title: "Startup Pitch Day",
      date: "July 15th",
      time: "5:00 PM",
    },
    {
      title: "Submission of the Reports",
      date: "July 20th",
      time: "5:00 PM",
    },
    {
      title: "Team Building Workshop",
      date: "July 25th",
      time: "3:00 PM",
    },
    {
      title: "Marketing Strategy Meeting",
      date: "August 1st",
      time: "10:00 AM",
    },
    {
      title: "Quarterly Financial Review",
      date: "August 5th",
      time: "2:00 PM",
    },
    {
      title: "Product Launch Event",
      date: "August 10th",
      time: "11:00 AM",
    },
    {
      title: "Client Feedback Session",
      date: "August 15th",
      time: "4:00 PM",
    },
    {
      title: "Annual General Meeting",
      date: "September 1st",
      time: "9:00 AM",
    },
  ];

  const scheduleData = [
    {
      time: "09:30",
      title: "UI/UX Designer",
      event: "Practical Task Review",
    },
    {
      time: "12:00",
      title: "Magento Developer",
      event: "Resume Review",
    },
    {
      time: "01:30",
      title: "Sales Manager",
      event: "Final HR Round",
    },
  ];

  const [date, setDate] = useState(new Date());

  return (
    <div className=" h-fit w-full flex flex-col">
      {/* StatsBar */}
      <StatsBar />

      {/* Table toggle */}
      <div className="flex w-full h-[40px] mt-4 flex-row justify-start px-[2%] font-semibold mb-[10px]">
        <button className="h-full text-center w-[148px] hover:bg-[#1E3A8A] border border-gray-300 shadow-sm hover:text-white text-lg mr-[2%] rounded-2xl">
          Activities
        </button>
        <button className="h-full text-center w-[148px] hover:bg-[#1E3A8A] border border-gray-300 shadow-sm hover:text-white text-lg mr-[4%] rounded-2xl">
          Announcements
        </button>
      </div>

      {/* Write logic for rendering different tables */}
      <div className="w-full px-[2%]">
        <DataTableDemo />
      </div>

      <div className="w-full mb-6 border border-gray-200  h-fit mt-9 flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start px-2 sm:pl-6">
        {/* Calendar */}
        <div className="p-2 mb-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border text-[#1E3A8A] p-2"
          />
        </div>

        {/* Events List */}
        <div className="w-full mt-2 sm:w-[50%] mb-3">
          <ScrollArea className="w-[90%] h-[300px] rounded-md border sm:ml-3">
            <div className="p-4">
              <h4 className="mb-4 leading-none text-xl font-medium">Upcoming Events</h4>
              {events.map((event, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 mb-6">
                  <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                  <p className="text-gray-500">{event.date} | {event.time}</p>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Schedule Section */}
        <div className="w-full sm:w-[30%] mb-3">
          <div className="max-w-md mx-auto mt-2 p-5 border rounded-lg shadow-md border-blue-400">
            <h3 className="text-center text-lg font-bold mb-4">Wednesday, 06 July 2023</h3>
            {scheduleData.map((item, index) => (
              <div key={index} className="flex items-start mb-4">
                <div className="text-xl font-medium mr-4">{item.time}</div>
                <div className="flex-grow">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-gray-600">{item.event}</div>
                </div>
                <div className="h-full border-l-2 border-l-blue-500 ml-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
