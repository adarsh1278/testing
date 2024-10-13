import React from 'react'
import { Trash2 } from 'lucide-react';
export const customButton = () => {
  return (
    <div className=" w-full h-full flex flex-row   justify-evenly px-3">
     <Trash2/>
     <div>Delete</div>


    </div>
  )
}
