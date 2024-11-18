import React from "react";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FaRegFileWord } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa";
import { FaRegFilePowerpoint } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
   
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMicrosoftoutlook className="text-7xl text-red-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
        
          <FaRegFileWord  className="text-7xl text-green-400"/>
        
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
      
          <FaRegFileExcel className="text-7xl text-yellow-400" />
          
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
         
          <FaRegFilePowerpoint className="text-7xl text-pink-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
