"use client"
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { Profile } from "../component/userProfile";
import { StatsBar } from "../Statsbar";
import Link from 'next/link';  
import { useState } from "react";
import { PopoverDemo } from "@/model/notificationModel";
import { sha256 } from "js-sha256";
import { LogOut } from 'lucide-react';


export const Nav = () => {
  


  const [isOpen, setIsOpen] = useState(false);
  const [greet, setGreet] = useState("Good morning");
  async function  handleLogout(){
    try {
        
       
        const url = process.env.NEXT_PUBLIC_DATABASE_URL;
        console.log(url)
        setButtonDisabled(true);
        const response = await axios.get(`${url}/manager/logout`,
        {withCredentials:true}
    
    )
        console.log("data" , response);
      
        
        
        if(response.data.statusCode==200){
           
            // toast({
            //     title: "LOGOUT",
            //     description: "Succesfully LOGOUT",
            //   })
            setTimeout(() => {
                router.push("/program/dashboard")
            }, 2000);
        }

        
    } catch (error) {
        console.error(error)
const errorMessage = error?.response?.data?.message ||"something went wrong"
       
        // toast({
        //     variant: "destructive",
        //     title: "LOGOUT ERROR",
        //     description: errorMessage,
           
        //   })
    }
  }



  return (
    <div className="w-full  h-full bg-[#FDFDFD] pt-[10px] flex flex-row   justify-between">
      <div className=" pt-[3%]  sm:pt-0 w-[14%]  ml-[3%] h-[50px] ">
        <div className="text-black w-fit font-bold font-lg text-xl  lg:text-2xl gap-0 overflow-hidden">
          Manager
          <div className="text-[#A2A1A8] mt-[0px] gap-0 text-sm w-fit lg:text-lg ml-[2px]  truncate">
            {greet}
          </div>
        </div>



      </div>
      {/* search bar  */}
      <div className=" hidden sm:block w-[30%] lg:w-[45%]  h-[40px] ml-[8%] ">
        <div className="flex justify-between items-center  rounded-md mt-[1%]">
          <div className="relative  w-full rounded-md  drop-shadow-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center rounded-md ">
              <CiSearch className="h-5 w-5 text-gray-500 rounded-md  bg-white" />
            </span>
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 w-full h-[50px] rounded-md  bg-white placeholder:text-black border border-gray-100 focus:border-gray-300"
            />
          </div>

        </div>
      </div>
      <div className="  h-[60px]  w-[50%] sm:w-[30%]   flex  justify-evenly   items-center">
      <div className=" w-[30px]  h-[30px] sm:w-[45px]  mt-[0.5%]  sm:h-[50px]     rounded-lg sm:drop-shadow-md flex justify-center items-center bg-white hover:bg-[#1E3A8A]  hover:text-white cursor-pointer">   <img src="/notifications.svg" alt="Notifications" className='   group-hover:bg-[#1E3A8A] w-[90%] h-[35px] '/></div>
      <div onClick={handleLogout} className="group w-[30px]  cursor-pointer h-[30px] sm:w-[45px] mt-[0.5%] sm:h-[50px] ml-[1.5%] rounded-lg sm:drop-shadow-md flex justify-center items-center bg-white hover:bg-[#1E3A8A]">
    <LogOut className="group-hover:text-white" />
</div>


        {/* profile  */}
        {/* <div className="  w-fit mt-[0.5%]   flex   ml-[1%]    ">
          <Profile imageurl={"/photo.svg"} name={"Evan Ates"} />
        </div> */}
 <Link href="/program/profile">
          <div className="w-fit mt-[0.5%] flex ml-[1%] cursor-pointer">
            <Profile imageurl={"/photo.svg"} name={"Evan Ates"} />
          </div>
        </Link>

      </div>


      {/* Search Bar and Profile */}


    </div>
  );
};
