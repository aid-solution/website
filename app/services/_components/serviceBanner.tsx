import React from 'react'
import Image from 'next/image'

const ServiceBanner = () => {
  return (
    <div className=" relative z-0 h-[calc(100vh-158px)] mt-[-38px]">
      {/* Image d'arrière-plan */}
      <Image
        src={"/banner/informatique.webp"}
        alt="Nature Background"
        fill
        style={{ objectFit: "cover" }}
      />

      {/* Overlay dégradé de gauche à droite */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-blue-600 to-white opacity-50"></div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-5 w-full">
        <h1 className="uppercase text-3xl lg:text-5xl text-white font-bold text-center">Nos Produits et services</h1>
      </div>
    </div>

  )
}

export default ServiceBanner