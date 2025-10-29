import React from 'react'
import Image from 'next/image'

const ContentFormationPowerPoint = () => {
  return (
    <>
      <div className="flex items-end gap-3 pb-10 flex-wrap">
        <div className="w-fit">
          <Image
            src={"/images/powerpoint.png"}
            height={100}
            width={100}
            alt={"PowerBI image"}
          />
        </div>
        <div className="w-fit">
          <h3 className="uppercase text-3xl lg:text-4xl font-extrabold">
            Formation Power Point
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
          La formation PowerPoint a pour objectif de vous rendre autonome dans la création de présentations claires, dynamiques et percutantes. Elle est idéale pour les collaborateurs devant concevoir des supports visuels de réunion, de formation, ou de présentation commerciale.
        </p>
        <p>
          Sur deux jours, vous découvrirez les bases de la création de diapositives : gestion du texte, des images, des formes, insertion de tableaux ou de graphiques, alignements, disposition des objets. Vous apprendrez à harmoniser votre présentation à l'aide de thèmes, de modèles et de masques personnalisés.
        </p>
        <p>
          Une large partie est consacrée à la dynamique de présentation : animations, transitions, enchaînements, minutage et insertion de commentaires pour l'orateur. Vous serez formé à l'art de synthétiser les informations, hiérarchiser le contenu visuel, tout en gardant l'attention de votre auditoire.
        </p>
        <p>
          Vous terminerez par les fonctionnalités avancées telles que les hyperliens, la création de menus interactifs, l'intégration de vidéos et de sons, et les astuces pour convertir vos présentations en PDF ou vidéos.
        </p>
        <p>
          À l'issue de la formation, vous saurez structurer un message, concevoir des diapositives efficaces, et captiver votre public grâce à un support fluide et visuellement cohérent.
        </p>
      </div>
    </>
  )
}

export default ContentFormationPowerPoint