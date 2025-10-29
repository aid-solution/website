import React, { JSX } from 'react'

interface Props {
  title: string;
  icon: JSX.Element;
  description: string
}

const Card: React.FC<Props> = ({ title, icon, description }) => {
  return (
    <div className="p-4 bg-white w-1/2 md:flex-1 flex flex-col rounded-md shadow-sm shadow-[#024089] hover:shadow-md hover:scale-105 scale-90 md:scale-100">
      <div className="h-[60px] flex justify-center items-center">
        <h3 className="text-center font-semibold text-[15px]">{title}</h3>
      </div>
      <div className="flex justify-center pb-4 relative">
        {icon}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <p className="text-justify pt-3 text-[15px]">{description}</p>
    </div>
  )
}

export default Card