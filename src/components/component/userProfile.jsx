import React from 'react';

export const Profile = ({ imageurl, name }) => {
  
  return (
    <div className='  cursor-pointer w-full  flex flex-row justify-evenly items-center bg-white  hover:bg-[#1E3A8A]  hover:text-white    rounded-lg  sm:drop-shadow-lg     h-full px-3  py-1'>
      <img src={imageurl} alt="Profile"   />
      <div className=' hidden sm:block w-full h-full font-bold  pl-2 truncate'>{name}</div>
      <img src="/shape.svg" className=' hidden sm:block pl-4 pt-[4%]'/>

      
    </div>
  );
};
