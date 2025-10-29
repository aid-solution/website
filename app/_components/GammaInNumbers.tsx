import React from "react";
import Image from "next/image";
import CardNumber from "./CardNumber";

interface Stats {
  name: string;
  stat: number;
  unity?: string
}

const GammaInNumbers = () => {
  const datas: Stats[] = [
    {
      name: "Années d'excellence",
      stat: 33
    },
    {
      name: "Interventions techniques",
      stat: 2000
    },
    {
      name: "Projets Internationaux",
      stat: 74
    },
    {
      name: "Taux de satisfaction",
      stat: 94,
      unity: "%"
    },
  ]
  return (
    <div className="relative z-0 h-fit md:h-[400px]">
      <Image
        src={"/images/map_dot.jpg"}
        alt="Nature Background"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-white opacity-70"></div>
      <div className="relative md:absolute w-full lg:px-[200px] md:left-1/2 md:-translate-x-1/2 ">
        <div className="relative mt-10">
          <h1 className="uppercase text-[#149150] text-3xl md:text-4xl font-extrabold text-center pb-4">Gamma en chiffres</h1>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-green-200 rounded-md"></span>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-20">
          {
            datas.map(({ name, stat, unity }, index)=> (
              <CardNumber key={index} name={name} stat={stat} unity={unity ? unity : ""} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default GammaInNumbers