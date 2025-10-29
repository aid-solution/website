import React from "react"
import TestimonialCard from "./TestimonialCard"

const datas: {source: string, message: string}[] = [
  {
    source: "John Doe",
    message: `Service impeccable ! Gamma Informatique m'a aidé à trouver le matériel idéal pour mon entreprise. Équipe professionnelle et à l'écoute. Je recommande vivement.`
  },
  {
    source: "Jhon Wick",
    message: `J'ai achété un ordinateur portable chez Gamma Informatique et je suis très satisfait de la qualité et du service apres-vente. Livraison rapide et conseils au top.`
  },
  {
    source: "Bruce Lee",
    message: `Des produits de qualité à des prix competitifs. Le service client est très réactif et toujours prêt à aider. Une excellente expérience d'achat.`
  },
  {
    source: "Jacky Chan",
    message: `Large choix de produits informatiques et un personnel compétent qui m'a bien conseillé pour mon achat. Je reviendrai sans hésiter.`
  },
];

const Testimoniales = () => {
  return (
    <div className="px-2 lg:px-[100px] py-[50px]">
      <div className="relative mb-10">
        <h1 className="uppercase text-3xl md:text-4xl font-extrabold text-center pb-4">Témoignages de nos clients</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {
          datas.map(({ source, message }, index) => (
            <TestimonialCard key={index} source={source} message={message} />
          ))
        }
      </div>
    </div>
  )
}

export default Testimoniales