import React from "react"
import CardApproach from "./CardApproach"

const datas = [
  {
    title: "service de qualité",
    description: `Améliorer la qualité de nos prestations
à travers la mise en place des
procédures simples, claires et efficaces.`
  },
  {
    title: "Système de communication",
    description: `Elaborer un système de communication interne
et externe approprié de manière à rester en
permanence à l'écoute de nos clients.`
  },
  {
    title: "Des personnels à jour",
    description: `Actualiser la connaissance de notre personnel
travers la formation continue.`
  },
  {
    title: "La conquête des marchés internationaux",
    description: `Aller à la conquête des marchés
internationaux grâce au nouveau
positionnement que nous donne la certification
ISO 9001 : 2008.`
  },
  {
    title: "Processus continue",
    description: `Intégrer un processus d'amélioration
continue.`
  },
  {
    title: "Nos objectifs et ceux de nos clients",
    description: `De réaliser au moins une revue de direction
annuelle afin de revoir l'adéquation de notre
SMQ avec nos objectifs et ceux de nos clients`
  },
]

const OurApproach = () => {
  return (
    <div className="px-2 lg:px-[100px] py-[50px]">
      <div className="relative mb-10">
        <h1 className="uppercase text-4xl font-extrabold text-center pb-4"> Notre demarche </h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <div className="flex justify-center">
        <div className="md:w-3/4">
          <p className="text-justify">
            En vue d&apos;une meilleure satisfaction des exigences dde sa clientèle la Direction Générale de Gamma a décidé de mettre en place un système de management de la qualité conforme au référenciel ISO 9001:2008.<br />
            L&apos;entrée de Gamma Informatique dans cette demarche doit nous permettre de :
          </p>
        </div>
      </div>
      <div className="flex flex-wrap pt-15">
        {
          datas.map(({ title, description }, index) => (
            <CardApproach key={index} position={`0${index+1}`} title={title} description={description} />
          ))
        }
      </div>
    </div>
  )
}

export default OurApproach