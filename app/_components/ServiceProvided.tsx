import React from 'react';
import Link from 'next/link';

const ServiceProvided = () => {
  return (
    <div className="px-4 md:px-[100px] py-[75px] bg-[#5b8ac7b1]">
      <h3 className="text-[20px] md:text-4xl font-extrabold uppercase text-white pb-10 lg:w-2/3 text-justify">
        Nous fournissons des services de haute qualité et des solutions innovantes pour une croissance fiable
      </h3>
      <div className="flex items-center">
        <Link href="#consulting">
          <button className="cursor-pointer px-3 py-2 border-2 border-green-600 rounded-md bg-green-600 text-white hover:text-green-700 hover:bg-white font-semibold uppercase ">Obtenir un devis</button>
        </Link>
      </div>
    </div>
  )
}

export default ServiceProvided