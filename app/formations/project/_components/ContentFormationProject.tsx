import React from 'react'
import Image from 'next/image'

const ContentFormationProject = () => {
  return (
    <>
      <div className="flex items-end gap-3 pb-10 flex-wrap">
        <div className="w-fit">
          <Image
            src={"/images/msproject.png"}
            height={100}
            width={100}
            alt={"PowerBI image"}
          />
        </div>
        <div className="w-fit">
          <h3 className="uppercase text-3xl lg:text-4xl font-extrabold">
            Formation MS Project
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
          Microsoft Project est l'outil de référence pour planifier, suivre et maîtriser l'avancement d'un projet. Cette formation approfondie s'adresse à toute personne impliquée dans la gestion ou la coordination de projets, quels que soient leur taille ou leur domaine.
        </p>
        <p>
          En cinq jours, vous apprendrez à construire un planning cohérent, définir des tâches, estimer des durées, affecter des ressources et établir des dépendances. Vous apprendrez à ajuster les contraintes, suivre l'avancement en temps réel, et identifier les dérives.
        </p>
        <p>
          Le programme comprend également la gestion des charges, des coûts, l'analyse du chemin critique, les jalons, les vues personnalisées, et la génération de rapports clairs à destination des décideurs. Des cas pratiques adaptés à différents contextes (projets informatiques, travaux publics, formation, etc.) seront proposés.
        </p>
        <p>
          L'approche pédagogique vous permettra de modéliser vos projets existants dans Project, et d'appliquer directement les outils à votre environnement. À la fin de la formation, vous serez capable de maîtriser les délais, les ressources et les budgets, tout en gardant une vision globale et actualisée de vos projets.
        </p>
      </div>
    </>
  )
}

export default ContentFormationProject