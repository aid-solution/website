import React from "react"

const WhyChooseOurCourse = () => {
  const contenuFormations = [
    {
      titre: "Adaptées à tous les niveaux",
      description:
        "Que vous soyez novice dans l'utilisation de ces outils ou que vous cherchiez à perfectionner vos compétences existantes, nos formations sont conçues pour répondre à vos besoins spécifiques.",
    },
    {
      titre: "Formateurs expérimentés",
      description:
        "Bénéficiez des conseils d'experts qui vous guideront à travers chaque étape, fournissant des astuces et des techniques pour maximiser votre productivité.",
    },
    {
      titre: "Contenu personnalisé",
      description:
        "Chaque cours est soigneusement élaboré pour garantir une expérience d'apprentissage interactive et adaptée à votre rythme, avec des exercices pratiques pour renforcer vos connaissances.",
    },
    {
      titre: "Sessions pratiques",
      description:
        "Basées sur des cas d'utilisation réels en fonction du profil des participants.",
    },
    {
      titre: "Support de cours",
      description:
        "Support complet en format électronique fourni à chaque participant.",
    },
    {
      titre: "Sessions de questions-réponses",
      description:
        "Des moments interactifs pour poser vos questions aux formateurs.",
    },
    {
      titre: "Salle équipée",
      description:
        "Salle de formation équipée d'ordinateurs avec le logiciel installé.",
    },
    {
      titre: "Attestation de fin de formation",
      description:
        "À la fin de chaque niveau de formation, obtenez une attestation qui témoigne de vos compétences nouvellement acquises, renforçant ainsi votre profil professionnel.",
    },
  ];

  return (
    <>
      <div className="relative mt-10">
        <h1 className="text-2xl lg:text-3xl font-extrabold pb-4">
          Pourquoi choisir nos formations ?
        </h1>
      </div>
      <ul className="flex flex-col gap-2 formation-list">
        {contenuFormations.map(({ titre, description }, index) => (
          <li key={index}>
            <strong>{titre} : </strong> {description}
          </li>
        ))}
      </ul>
    </>
  )
}

export default WhyChooseOurCourse