import React from "react";
import Image from "next/image";
import CardAboutUs from "./CardAboutUs";

const datas = [
  {
    name: "Histoire",
    text: `Fondée en 1989, GAMMA INFORMATIQUE est une entreprise spécialisée dans le développement de solutions informatiques innovantes. Basée à Niamey au Niger, nous accompagnons les entreprises et organisations dans leur transformation numérique en proposant des outils performants et adaptés à leurs besoins.`
  },
  {
    name: "Mission",
    text: `Pour répondre à vos besoins informatiques, GAMMA INFORMATIQUE vous assure conseils, études et réalisations de projets informatiques.`
  },
  {
    name: "Vision",
    text: `Nous faisons un focus sur les besoins et contraintes des organisations d'affaires et l'organisation informatique accompagne les processus d'affaires afin d'accélérer et de renforcer les résultats d'affaires (accroissement de parts de marché, etc.).`
  }
];

const OurHistoryVisionMission = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row px-2 lg:px-[100px] py-[50px] gap-10">
      <div className="flex-1 flex gap-10 flex-wrap">
        {
          datas.map(({ name, text }, index)=> (
            <CardAboutUs key={index} name={name} text={text} />
          ))
        }
      </div>
      <div className="flex-1 bg-linear-to-b from-blue-900 via-blue-600 to-white opacity-75 rounded-xl md:h-[400px] lg:h-fit">
        <div className="p-8 relative h-[500px]">
        <Image
          src={"/images/nos-atouts.png"}
          alt="nos atouts"
          fill
          style={{ width: "100%" }}
          className="rounded-md"
        />
        </div>
      </div>
    </section>
  );
}

export default OurHistoryVisionMission