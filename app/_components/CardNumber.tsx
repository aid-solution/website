import React from "react"

interface Props {
  name: string;
  stat: number;
  unity?: string
}

const CardNumber: React.FC<Props> = ({ name, stat, unity }) => {
  return (
    <div className="flex-1">
      <p className="text-4xl text-[#149150] text-center font-semibold flex justify-center items-center"> 
        <span>+</span>
        <span className="text-7xl">{stat}</span>
        <span>{unity}</span>
      </p>
      <h3 className="text-center font-semibold mt-5"> {name} </h3>
    </div>
  )
}

export default CardNumber