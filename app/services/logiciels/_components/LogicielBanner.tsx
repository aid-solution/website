import React from 'react'
import Image from 'next/image'

const LogicielBanner = () => {
  return (
    <div className=" relative h-[calc((100vh-158px)/1.5)] mt-[-38px]">
      <Image
        src={"/banner/service_logiciel.png"}
        alt="Excel Background"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-blue-600 to-white opacity-50"></div>
      <div className="absolute bottom-1/7 left-10 w-full md:w-1/2">
        <h1 className="uppercase text-3xl md:text-5xl text-white font-bold"><span>Logiciels</span></h1>
      </div>
    </div>

  )
}

export default LogicielBanner