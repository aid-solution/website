"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    title: "Logiciels",
    description:
      "Nous disposons des logiciels: Logiciel de comptabilité Oda compta, Logiciel de Paie, Logiciel Carpa... Développement à la demande",
    image: "/images/software.jpg",
  },
  {
    title: "Ventes de materiels informatique",
    description:
      "PROCUREZ-VOUS DES MATÉRIELS DE DERNIÈRE GÉNÉRATION. NOUS METTONS À VOTRE DISPOSITION DES MATÉRIELS DE QUALITÉ ET UNE GARANTIE PENDANT 1 AN.",
    image: "/images/ventes.jpg",
  },
  {
    title: "Réseaux et Télécoms",
    description:
      "Téléphonie IP, Vidéo surveillance, Sécurité incendie, Système de pointage, Fibre optique, Boucle Radio, VSAT",
    image: "/images/reseau.jpg",
  },
  {
    title: "Maintenance",
    description:
      "Maintenance matériels informatiques: Imprimante, Traceur, scanner, PC, Desktop, Serveur, Onduleur",
    image: "/images/maintenance.jpg",
  },
  {
    title: "Formation",
    description:
      "FACILITER LE TRAVAIL DE VOS SALARIÉS. NOUS FAISONS DES FORMATIONS POUR AMÉLIORER L'EFFICACITÉ DE VOS EMPLOYÉS.",
    image: "/images/formation.png",
  },
  {
    title: "Sit Web",
    description:
      "Conception et réalisation du Site web pour votre structure",
    image: "/images/website.jpg",
  },
];

const MarqueeCards = () => {
  const [card, setCard] = useState<ServiceCard[]>([...services].slice(3));
  useEffect(() => {
    setTimeout(() => {
      const last = services.pop() as ServiceCard;
      services.splice(0, 0, last);
      const copy = [...services].slice(3);
      setCard(copy);
    }, 4000);
  }, [card])
  return (
    <div className="px-2 py-10 lg:px-20">
      <div className="hidden md:flex items-center">
        {card.map(({ title, description, image }, index) => (
          <div
            className={`relative shadow-lg flex-1 h-[300px] ${
              index % 2 !== 0 ? "md:scale-120 lg:scale-105 animate-fade-in" : "md:scale-70 lg:scale-90"
            }`}
            key={index}
          >
            <Image
              src={image}
              alt="Formation"
              className="w-full h-64 rounded-lg"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-blue-900/80 p-6 flex flex-col justify-end rounded-lg">
              <h3 className="text-white text-xl font-bold"> {title} </h3>
              <p className="text-white text-sm mt-2"> {description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeCards
