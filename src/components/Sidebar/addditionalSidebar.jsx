import Link from 'next/link'
import React from 'react'

export const AddditionalSidebar = () => {
  return (
    <div className=' w-full h-full  bg-white  flex flex-col justify-start items-start rounded-md p-1'>
        <Link href="#" className=" text-black my-3  rounded-md  w-full flex flex-row  justify-start px-3 py-2  hover:text-[#1E3A8A]  hover:bg-[#acbff3f6]">
        <img src="inactive.svg" className="mr-2 hover:brightness-0 hover:invert" />
        


        
        </Link>
        <Link href="#" className=" text-black my-3   rounded-md  w-full flex flex-row  justify-start px-3 py-2  hover:text-[#1E3A8A]  hover:bg-[#acbff3f6]">
        <img src="inactive.svg" className=' mr-2'/>
        <div className='  text-xl ml-[3%] '> Activity</div>
        
        </Link>
        <Link href="#" className=" text-black my-3  rounded-md  w-full flex flex-row  justify-start px-3 py-2  hover:text-[#1E3A8A]  hover:bg-[#acbff3f6]">
        <img src="inactive.svg" className=' mr-2'/>
        <div className='  text-xl ml-[3%]'> Activity</div>
        
        </Link>
    </div>
  )
}
