import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import MarqueeImg from "./MarqueeImg";

const Parteners = () => {

  const [images, setImages] = useState<string[]>([]);
  const folder = "partenaires";
  
  useEffect(() => {
    fetch(`/api/images/${folder}`)
    .then((res) => res.json())
    .then((data) => setImages(data))
    .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="p-5 bg-white">
      <div className="relative mb-5">
        <h1 className="uppercase text-2xl font-extrabold text-center pb-4 text-green-600">Nos partenaires</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <div>
      <Marquee pauseOnHover={true} speed={50}>
        {images.map((image, i) => <MarqueeImg partener={image} index={i} key={i} />)}
      </Marquee>
      </div>
    </div>
  )
}

export default Parteners