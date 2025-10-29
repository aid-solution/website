import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const HomeBanner = () => {
  return (
    <div className=" relative z-0 h-[calc(100vh-172px)] md:h-[calc(100vh-148px)] lg:h-[calc(100vh-158px)] mt-[-38px]">
      {/* Image d'arrière-plan */}
      <Image
        src={"/banner/home_banner1.png"}
        alt="home banner"
        fill
        style={{ objectFit: "cover" }}
      />

      {/* Overlay dégradé de gauche à droite */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-blue-600 to-white opacity-50"></div>

      {/* Texte en bas à gauche */}
      <div className="absolute uppercase bottom-1/7 left-5 text-white text-lg font-semibold">
        <h1 className="mb-10 text-4xl lg:text-5xl font-bold w-2/3">Nous AMÉLIORONS VOTRE EFFICACITÉ COMMERCIALE</h1>
        <Link href="#consulting">
          <button className="cursor-pointer px-3 py-2 border-2 border-white bg-white rounded-md hover:bg-green-600 hover:text-white hover:border-green-600 text-green-700 uppercase">Obtenir un devis</button>
        </Link>
      </div>
    </div>

  )
}

export default HomeBanner