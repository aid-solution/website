import React from 'react'
import Image from 'next/image';

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Service professionnel",
      text: "Nous mettons un point d'honneur à offrir un service de qualité, basé sur la rigueur, l'écoute et l'efficacité. Nos prestations sont pensées pour répondre aux besoins spécifiques de nos clients, avec un accompagnement personnalisé et des solutions adaptées à chaque situation.",
      image: "service-pro.png",
    },
    {
      title: "Un contrat flexible",
      text: "Parce que chaque client est unique, nous proposons des contrats flexibles qui s'adaptent à vos exigences et à l'évolution de vos besoins. Nos offres sont conçues pour allier simplicité, transparence et souplesse, garantissant ainsi une collaboration sereine et avantageuse.",
      image: "contract.png",
    },
    {
      title: "Des agents compétents à votre service",
      text: "Notre équipe est composée de professionnels qualifiés et expérimentés, prêts à vous accompagner avec expertise et dévouement. Grâce à une formation continue et une maîtrise parfaite de leur domaine, nos agents assurent un service fiable, réactif et à la hauteur de vos attentes.",
      image: "agent-competent.png",
    },
    {
      title: "Plus de 33 ans d'expérience",
      text: "Avec plus de trois décennies d'expérience, nous avons su bâtir une réputation solide et un savoir-faire reconnu. Notre longévité est le fruit d'un engagement constant envers nos clients, d'une adaptation continue aux évolutions du marché et d'une passion pour l'excellence.",
      image: "dure.png",
    },
  ];

  return (
    <div className='px-2 lg:px-[100px] py-[50px]'>
      <div className="relative mb-10">
        <h1 className="uppercase text-4xl font-extrabold text-center pb-4">Pourquoi nous choisir ?</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image
              src={`/images/${card.image}`} 
              alt={card.title} 
              width={500} 
              height={300} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2"> {index+1}/ {card.title}</h3>
              <p className="text-gray-700">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs