import React from "react";
import Image from "next/image";

const Skill = ({ src, alt, percentage }) => {
  return (
    <div className="flex justify-center items-center relative rounded-full bg-[#181818] w-[80px] h-[80px] transition-transform duration-300 hover:scale-110">
      {/* Skill Icon */}
      <Image src={src} alt={alt} width={50} height={50} className="absolute" />

      {/* Percentage on Hover */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70 text-white text-sm font-bold rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div>{alt}</div>
        <div>{percentage}%</div>
      </div>
    </div>
  );
};

export default Skill;
