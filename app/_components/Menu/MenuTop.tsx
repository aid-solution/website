import React from "react";
import Image from "next/image";
import Link from "next/link"

const MenuTop = () => {
  const datas = [
    {
      source: "place.png",
      title: "Adresse",
      content: "Niamey, Face SONARA 1 -184, Rue du souvenir.",
    },
    {
      source: "mail.png",
      title: "E-mail",
      content: "ventes@gammaniger.com",
    }
  ];
  return (
    <div className="w-full md:flex justify-between p-2 lg:p-8 transition-all duration-300 items-center">
      <div className="hidden md:block">
        <Image
          className="dark:invert"
          src="/gamma.jpg"
          alt="Gamma logo"
          width={180}
          height={38}
          priority
        />
      </div>
      <div className="flex md:gap-8">
        <div className="flex flex-col md:flex-row md:gap-6">
          {
            datas.map(({ source, title, content }, index)=> (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={`/icons/${source}`}
                  height={50}
                  width={50}
                  alt={"PowerBI image"}
                />
                <div className="w-8/10 md:w-full">
                  <h3 className="font-bold text-green-700"> {title} </h3>
                  {
                    title === "E-mail" 
                      ? <Link href={`mailto:${content}`} className="hover:text-green-600">{content}</Link>
                      : <h3> {content} </h3>
                  }
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex items-center">
          <Link href="#consulting">
            <button className="cursor-pointer px-3 py-2 border-2 border-green-600 rounded-md hover:bg-green-600 hover:text-white text-green-700 font-semibold">Obtenir un devis</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default MenuTop