import React from "react"

interface Props {
  position: string;
  title: string;
  description: string;
}

const CardApproach: React.FC<Props> = ({ position, title, description }) => {
  return (
    <div className="md:px-8 py-4 bg-white w-full md:w-1/2 lg:w-1/3 hover:scale-105">
      <div className="shadow-lg border-l-15 border-[#024089] p-6 text-gray-700 hover:text-[#024089]">
        <h2 className="text-7xl font-bold ">{position}</h2>
        <h3 className="text-lg font-bold mt-2 h-[50px]">{title}</h3>
        <p className="mt-2 leading-relaxed h-[100px] text-justify font-semibold">{description}</p>
      </div>
    </div>
  )
}

export default CardApproach