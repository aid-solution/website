import React from 'react'
import Image from 'next/image'

const ContentFormationExcel = () => {
  return (
    <>
      <div className="flex items-end gap-3 pb-10 flex-wrap">
        <div className="w-fit">
          <Image
            src={"/images/excel.jpg"}
            height={100}
            width={100}
            alt={"PowerBI image"}
          />
        </div>
        <div className="w-fit">
          <h3 className="uppercase text-3xl lg:text-4xl font-extrabold">
            Formation Excel
          </h3>
        </div>
        <div className="w-fit">
          <label htmlFor="niveau" className="sr-only">
            Niveau de formation
          </label>
          <select
            id="niveau"
            className="pb-1 text-[#024089] bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 font-bold px-2"
          >
            <option value="">Niveau débutant</option>
            <option value="">Niveau intermédiaire</option>
            <option value="">Niveau avancé</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-justify">
        <p>
          Cette formation complète en Microsoft Excel s'adresse à tous les professionnels souhaitant acquérir ou renforcer leurs compétences en analyse de données, calculs automatisés, tableaux croisés dynamiques et visualisation de données.
        </p>
        <p>
          Répartie sur cinq jours, elle commence par les fondamentaux : découverte de l'interface, création de tableaux simples, saisie et mise en forme, calculs de base (somme, moyenne, pourcentage), gestion des feuilles, tris et filtres. Dès le deuxième jour, vous découvrirez les fonctions logiques (SI, ET, OU), les références relatives et absolues, les noms de plages, la validation de données et la mise en forme conditionnelle.
        </p>
        <p>
          La suite du programme vous plonge dans les fonctions avancées : recherche (RECHERCHEV, INDEX/EQUIV), consolidation, tableaux croisés dynamiques, graphiques évolués, filtres automatiques, calculs matriciels, et outils d'analyse. Une initiation aux macros et à l'enregistreur de macro est prévue en fin de formation, pour automatiser certaines tâches répétitives.
        </p>
        <p>
          Cette formation alterne théorie, démonstrations et mises en application concrètes, permettant de travailler sur des données proches de votre activité. À la fin du stage, vous serez capable de construire des tableaux puissants, interpréter les résultats, et produire des documents Excel professionnels et fiables.
        </p>
      </div>
    </>
  )
}

export default ContentFormationExcel