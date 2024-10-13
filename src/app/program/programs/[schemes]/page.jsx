'use client'
import React from 'react'
import { StatsBar } from '@/components/Statsbar'
 import { useState } from 'react'
import { useParams } from 'next/navigation'
import { RevieStartupTable } from '@/components/ActivityTable/reviewStartup'
export  default  function page (){

  const data1 = [
    {
      id: 100001,
      startupName: "Tech Innovators",
      addedBy: "John Doe",
      evaluationDate: "12/09",
      status: "New",
    },
    {
      id: 100002,
      startupName: "Green Energy Solutions",
      addedBy: "Jane Smith",
      evaluationDate: "05/10",
      status: "Reviewed",
    },
    {
      id: 100003,
      startupName: "AI Revolution",
      addedBy: "Alex Brown",
      evaluationDate: "21/08",
      status: "Old",
    },
    {
      id: 100004,
      startupName: "MedTech Heroes",
      addedBy: "Sara Lee",
      evaluationDate: "15/09",
      status: "Reviewed",
    },
    {
      id: 100005,
      startupName: "Quantum Tech",
      addedBy: "Tom Green",
      evaluationDate: "17/07",
      status: "New",
    },
    {
      id: 100006,
      startupName: "Sustainable Energy Co.",
      addedBy: "Nancy Thomas",
      evaluationDate: "22/06",
      status: "Reviewed",
    },
    {
      id: 100007,
      startupName: "Deep Learning Hub",
      addedBy: "Peter Brown",
      evaluationDate: "08/09",
      status: "Old",
    },
    {
      id: 100008,
      startupName: "SmartCity Builders",
      addedBy: "Emma Wilson",
      evaluationDate: "10/08",
      status: "New",
    },
    {
      id: 100009,
      startupName: "BioTech Labs",
      addedBy: "Olivia Harris",
      evaluationDate: "18/07",
      status: "Reviewed",
    },
    {
      id: 100010,
      startupName: "Autonomous Systems",
      addedBy: "Mason Wright",
      evaluationDate: "24/09",
      status: "Old",
    },
    {
      id: 100011,
      startupName: "CleanTech Innovations",
      addedBy: "Sophia Adams",
      evaluationDate: "09/11",
      status: "New",
    },
    {
      id: 100012,
      startupName: "Robotics Research",
      addedBy: "James Turner",
      evaluationDate: "03/10",
      status: "Reviewed",
    },
    {
      id: 100013,
      startupName: "CloudTech Solutions",
      addedBy: "Amelia Miller",
      evaluationDate: "25/08",
      status: "Old",
    },
  ];
  
  const data2 = [
    {
      id: 200001,
      startupName: "NextGen Technologies",
      addedBy: "Michael Green",
      evaluationDate: "03/11",
      status: "New",
    },
    {
      id: 200002,
      startupName: "Blockchain Labs",
      addedBy: "Emily Davis",
      evaluationDate: "07/10",
      status: "Reviewed",
    },
    {
      id: 200003,
      startupName: "CyberSecurity Pros",
      addedBy: "Daniel Lee",
      evaluationDate: "18/09",
      status: "Old",
    },
    {
      id: 200004,
      startupName: "AgriTech Solutions",
      addedBy: "Lisa Johnson",
      evaluationDate: "25/09",
      status: "New",
    },
    {
      id: 200005,
      startupName: "HealthTech Revolution",
      addedBy: "Sarah Black",
      evaluationDate: "14/08",
      status: "Reviewed",
    },
    {
      id: 200006,
      startupName: "EdTech Disruptors",
      addedBy: "Laura White",
      evaluationDate: "09/10",
      status: "Old",
    },
    {
      id: 200007,
      startupName: "AI Pioneers",
      addedBy: "Robert Brown",
      evaluationDate: "22/09",
      status: "New",
    },
    {
      id: 200008,
      startupName: "SmartFarm Innovations",
      addedBy: "Catherine Wilson",
      evaluationDate: "15/08",
      status: "Reviewed",
    },
    {
      id: 200009,
      startupName: "Tech4Good",
      addedBy: "George Walker",
      evaluationDate: "13/07",
      status: "Old",
    },
    {
      id: 200010,
      startupName: "SolarCity Innovations",
      addedBy: "David Anderson",
      evaluationDate: "11/10",
      status: "New",
    },
    {
      id: 200011,
      startupName: "CleanWater Solutions",
      addedBy: "Lucas Carter",
      evaluationDate: "18/09",
      status: "Reviewed",
    },
    {
      id: 200012,
      startupName: "FinTech Wizards",
      addedBy: "Olivia Gray",
      evaluationDate: "05/10",
      status: "Old",
    },
    {
      id: 200013,
      startupName: "GreenHouse Labs",
      addedBy: "Benjamin Harris",
      evaluationDate: "21/09",
      status: "New",
    },
  ];
  
  const data3 = [
    {
      id: 300001,
      startupName: "HealthCare Innovators",
      addedBy: "Chris White",
      evaluationDate: "13/08",
      status: "Reviewed",
    },
    {
      id: 300002,
      startupName: "FinTech Leaders",
      addedBy: "Sophia Martinez",
      evaluationDate: "19/10",
      status: "Old",
    },
    {
      id: 300003,
      startupName: "EduTech Pioneers",
      addedBy: "Michael Green",
      evaluationDate: "03/11",
      status: "New",
    },
    {
      id: 300004,
      startupName: "AI Disruptors",
      addedBy: "Olivia Martin",
      evaluationDate: "15/09",
      status: "Reviewed",
    },
    {
      id: 300005,
      startupName: "Quantum AI",
      addedBy: "James Clark",
      evaluationDate: "12/09",
      status: "Old",
    },
    {
      id: 300006,
      startupName: "CleanTech Innovators",
      addedBy: "Emma Lewis",
      evaluationDate: "05/10",
      status: "New",
    },
    {
      id: 300007,
      startupName: "Sustainable Labs",
      addedBy: "Lucas Martin",
      evaluationDate: "23/08",
      status: "Reviewed",
    },
    {
      id: 300008,
      startupName: "DeepMind AI",
      addedBy: "Grace Evans",
      evaluationDate: "11/07",
      status: "Old",
    },
    {
      id: 300009,
      startupName: "AgriTech Innovations",
      addedBy: "Daniel Turner",
      evaluationDate: "27/09",
      status: "New",
    },
    {
      id: 300010,
      startupName: "Smart Energy Solutions",
      addedBy: "Hannah Baker",
      evaluationDate: "22/09",
      status: "Reviewed",
    },
    {
      id: 300011,
      startupName: "GreenWorld Technologies",
      addedBy: "Oliver Foster",
      evaluationDate: "09/11",
      status: "Old",
    },
    {
      id: 300012,
      startupName: "AI Healthcare",
      addedBy: "Mia Walker",
      evaluationDate: "03/10",
      status: "New",
    },
    {
      id: 300013,
      startupName: "EdTech Global",
      addedBy: "Benjamin Adams",
      evaluationDate: "25/08",
      status: "Reviewed",
    },
  ];
  
  const data4 = [
    {
      id: 400001,
      startupName: "NextGen Tech Hub",
      addedBy: "Andrew Scott",
      evaluationDate: "14/08",
      status: "Reviewed",
    },
    {
      id: 400002,
      startupName: "Innovative FinTech",
      addedBy: "Jessica Brown",
      evaluationDate: "19/10",
      status: "Old",
    },
    {
      id: 400003,
      startupName: "Tech4Good Solutions",
      addedBy: "David Young",
      evaluationDate: "10/09",
      status: "New",
    },
    {
      id: 400004,
      startupName: "Solar Power Innovations",
      addedBy: "Sophia Garcia",
      evaluationDate: "23/07",
      status: "Reviewed",
    },
    {
      id: 400005,
      startupName: "AI Revolutionaries",
      addedBy: "Henry Collins",
      evaluationDate: "04/09",
      status: "Old",
    },
    {
      id: 400006,
      startupName: "Green Energy Labs",
      addedBy: "Amelia Nelson",
      evaluationDate: "30/09",
      status: "New",
    },
    {
      id: 400007,
      startupName: "Quantum Computing",
      addedBy: "John Kelly",
      evaluationDate: "15/08",
      status: "Reviewed",
    },
    {
      id: 400008,
      startupName: "SmartFarm Tech",
      addedBy: "Emma Moore",
      evaluationDate: "21/09",
      status: "Old",
    },
    {
      id: 400009,
      startupName: "BioTech Innovators",
      addedBy: "George Allen",
      evaluationDate: "19/07",
      status: "New",
    },
    {
      id: 400010,
      startupName: "CyberTech Labs",
      addedBy: "Isabella Howard",
      evaluationDate: "28/08",
      status: "Reviewed",
    },
    {
      id: 400011,
      startupName: "Autonomous Driving",
      addedBy: "Noah Carter",
      evaluationDate: "11/09",
      status: "Old",
    },
    {
      id: 400012,
      startupName: "Clean Water Solutions",
      addedBy: "Ava Bennett",
      evaluationDate: "02/10",
      status: "New",
    },
    {
      id: 400013,
      startupName: "Tech Innovators Global",
      addedBy: "Daniel Wright",
      evaluationDate: "17/09",
      status: "Reviewed",
    },
  ];
  
    const params = useParams()
    const [nav ,setNav]= useState(1);
    const [data , setData] = useState(data1)

  return (
    <div className=" w-full h-fit flex flex-col justify-start  items-start">
      <StatsBar/>
     <div  className=" w-full   h-fit p-7 pt-3">
     <button className=" h-full   text-center w-[148px]   hover:bg-[#1E3A8A] border border-gray-300 shadow-sm  hover:text-white  text-lg  py-1 mr-[2%] rounded-2xl">Activites</button>
      <button className=" h-full   text-center w-[148px]   hover:bg-[#1E3A8A] border border-gray-300 shadow-sm  hover:text-white  text-lg py-1  mr-[2%] rounded-2xl">Anouncement</button>
      <button  className=" h-full   text-center  w-fit px-3   hover:bg-[#1E3A8A] border border-gray-300 shadow-sm  hover:text-white  text-lg py-1  mr-[4%] rounded-2xl truncate">Evalutation Questions</button>
     </div>
     {/* table  */}
     <div className=" w-full h-fit  p-7 pt-3">
      {/* navigation  */}
      <div className=" w-full  h-[50px] flex flex-row justify-start">
      <button onClick={() => {setNav(1) , setData(data1)}}className={`py-1 px-2 mr-2 truncate ${nav === 1 ? "border-b-4  pb-0  border-blue-900" : "border-0"}`}> New Application</button>

      <button onClick={() => {setNav(2) , setData(data2)}}className={`py-1 px-2 mr-2 truncate ${nav === 2 ? "border-b-4  pb-0 border-blue-900" : "border-0"}`}> Review Required</button>
      <button onClick={() => {setNav(3) , setData(data3)}}className={`py-1 px-2 mr-2 truncate ${nav === 3 ? "border-b-4  pb-0 border-blue-900" : "border-0"}`}>    Panel Verified </button>
      <button onClick={() => {setNav(4) ,setData(data4)}}className={`py-1 px-2 mr-2 truncate ${nav === 4 ? "border-b-4  pb-0 border-blue-900" : "border-0"}`}> Onboarded</button>
      </div>
       {/* table  */}
      <div>
        <RevieStartupTable data={data} params={params.schemes}/>
      </div>


     </div>
    
    </div>
  )
}
