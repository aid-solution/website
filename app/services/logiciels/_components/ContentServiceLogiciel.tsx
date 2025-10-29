import React from "react"
import Image from "next/image"

const ContentServiceLogiciel = () => {

  const featuresCompta = [
  {
    categorie: "Saisie comptable",
    detail: "Saisie multi-journaux : général, caisse, banque, achats, ventes"
  },
  {
    categorie: "Plan comptable",
    detail: "Gestion automatique du plan comptable (SYSCOHADA, PCG, etc.)"
  },
  {
    categorie: "États financiers",
    detail: "Édition instantanée des états financiers : grand livre, balance, compte de résultat, bilan"
  },
  {
    categorie: "Suivi des actifs",
    detail: "Suivi des immobilisations, amortissements, provisions"
  },
  {
    categorie: "Export et contrôle",
    detail: "Export des données pour contrôle fiscal ou audits"
  }
];

  return (
    <>
      <div className="relative mb-10 mt-20">
        <h1 className="uppercase text-4xl font-extrabold text-center pb-4">Nos Logiciels Professionnels</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <div className="md:flex md:justify-center mb-10">
        <p className="md:w-3/4">Nous proposons une gamme de logiciels métiers conçus pour améliorer la productivité, automatiser les processus et garantir la conformité réglementaire. Nos solutions sont fiables, évolutives et adaptées au contexte local et régional.</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-centesr gap-10">
        <div className="flex-1">
          <Image
            src={"/images/odacompta.jpg"}
            alt="logiciel oda compta"
            className="rounded-lg"
            width={500}
            height={700}
          />
        </div>
        <div className="flex-1">
          <div className="relative">
            <h1 className="text-2xl lg:text-3xl font-extrabold pb-4">
              Oda Compta – Logiciel de Comptabilité Professionnelle
            </h1>
          </div>
          <div>
            <p>
              Oda Compta est une solution complète de gestion comptable, idéale pour les entreprises, cabinets comptables, ONG et institutions publiques.
            </p>
          </div>
          <div>
            <h1 className="text-1xl lg:text-2xl font-extrabold">
              Fonctionnalités principales
            </h1>
            <ul>
              {featuresCompta.map((item, index) => (
                <li key={index}>
                  <h3><strong className="">{item.categorie}</strong> : {item.detail}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentServiceLogiciel