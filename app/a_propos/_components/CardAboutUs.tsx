import React from 'react'
interface Props {
  name: string;
  text: string;
}

const CardAboutUs: React.FC<Props> = ({ name, text }) => {
  return (
    <div className=" bg-white shadow-lg p-2 border-t-4 border-green-800 cursor-pointer hover:border-[#024089]">
      <div className="relative">
        <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-4 uppercase pb-4"> Notre {name} </h3>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <p className="text-gray-600 text-justify">
        {text}
      </p>
    </div>
  )
}

export default CardAboutUs