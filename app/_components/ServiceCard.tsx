import React, { JSX } from "react";
import Link from "next/link";

interface Props {
  title: string;
  icon: JSX.Element;
  description: string;
  url: string;
}

const ServiceCard: React.FC<Props> = ({ title, icon, description, url }) => {
  return (
    <div className="px-2 md:px-8 py-4 w-full">
      <div className="flex flex-col gap-5 rounded-md border hover:bg-white hover:border-green-600 border-[#d9f1f6] transition-all duration-300 hover:shadow-lg hover:scale-105 px-2 md:px-4 py-3">
        <div className="flex justify-center">
          {icon}
        </div>
        <div className="md:h-[60px] flex justify-center items-center relative">
          <h3 className="text-center text-2xl font-bold mb-2 md:mb-0">{title}</h3>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
        </div>
        <div className="md:h-[150px] lg:h-[100px]">
          <p className="text-justify py-3">{description}</p>
        </div>
        <div className="flex justify-center">
          <Link href={`${url === 'formations' ? '/formations' : 'services/'+url.toLowerCase()}`} className="w-fit px-3 py-2 border-2 border-green-600 rounded-md bg-green-600 text-white hover:text-green-700 hover:bg-white font-semibold uppercase">Voir plus</Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard