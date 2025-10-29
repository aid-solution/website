"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Customers = () => {
  const [images, setImages] = useState<string[]>([]);
    const folder = "clients";
    
    useEffect(() => {
      fetch(`/api/images/${folder}`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
    }, []);

  return (
    <div className="px-2 lg:px-[100px] py-[50px]">
      <div className="relative mb-10">
        <h1 className="uppercase text-3xl md:text-4xl font-extrabold text-center pb-4">Ils nous ont fait confiance</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <div className="flex flex-wrap md:grid md:grid-cols-3 md:justify-center lg:grid-cols-4 md:gap-5 lg:gap-10 lg:p-10 bg-white w-full">
      {images.map((image, index) => (
        <div key={index} className="w-1/2 md:w-full flex justify-center hover:shadow-sm hover:shadow-blue-200 p-5 hover:scale-105">
          <Image 
            src={`/${folder}/${image}`} 
            alt={image} 
            width={120}
            height={60}
            style={{ width: "auto", height: "60px", margin: "0 40px" }}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Customers;
