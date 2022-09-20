import Image from "next/image";
import React from "react";

function PlaceCard({ name, bgImg, country }) {
  return (
    <div
      className={`bg-red-200 h-[18rem] w-[12rem] lg:h-[24rem] lg:w-[15rem] relative  rounded-xl  ${bgImg} p-3 overflow-hidden
           bg-cover shadow-2xl `}
    >
      <Image
        src={`/assets/${bgImg}`}
        alt="background image tokyo scene slider"
        layout="fill"
        objectFit="cover"
      />
      <p className="absolute font-Aboreto text-white font-bold text-xs">
        {name}
      </p>
    </div>
  );
}

export default PlaceCard;
