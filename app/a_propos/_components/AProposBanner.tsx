import React from "react";
import Image from "next/image";

const AProposBanner = () => {
  return (
    <div className=" relative h-[calc(100vh-172px)] md:h-[calc(100vh-148px)] lg:h-[calc(100vh-158px)] mt-[-38px]">
      <div className="absolute inset-0 bg-[#0063d4] opacity-80"></div>
      <div>
        <Image
          src={"/banner/bg.png"}
          alt="bg"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute inset-0 bg-[#0063d4] opacity-60"></div>
      <div className="absolute w-[calc(100vw-40px)] px-5">
        <div className="relative flex w-full items-center">
          <div className="flex-1 absolute top-40 lg:static lg:ps-20 z-2 bg-[#8ec5ffc7] md:bg-transparent px-10 pt-7 rounded-2xl">
            <h3 className="mb-10 text-3xl lg:text-5xl font-bold text-white uppercase">A propos de Gamma Informatique</h3>
          </div>
          <div className="flex-1 pt-10 relative h-[calc(100vh-100px)]">
            <Image
              src={"/banner/assistance.png"}
              alt="Illustration cloud computing"
              fill
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default AProposBanner