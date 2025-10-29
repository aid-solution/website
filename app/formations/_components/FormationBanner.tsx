import React from 'react'
import Image from 'next/image'

const FormationBanner = () => {
  return (
    <div className=" relative h-[calc(100vh-158px)] mt-[-38px]">
      <div></div>
      <Image
        src={"/banner/formation.jpg"}
        alt="Formation Background"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-blue-600 to-white opacity-50"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="uppercase text-5xl text-white font-bold text-center w-full">Formation</h1>
      </div>
    </div>

  )
}

export default FormationBanner