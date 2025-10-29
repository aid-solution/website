import React from 'react'
import Image from 'next/image'

const ContentFormationOutlook = () => {
  return (
    <>
      <div className="flex items-end gap-3 pb-10 flex-wrap">
        <div className="w-fit">
          <Image
            src={"/images/outlook.png"}
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
          Cette formation dédiée à Microsoft Outlook vous permettra de mieux gérer votre temps, vos priorités et votre communication professionnelle au quotidien. Elle est essentielle pour les utilisateurs qui souhaitent exploiter pleinement leur messagerie et les outils associés à la productivité.
        </p>
        <p>
          En deux jours, vous apprendrez à organiser efficacement votre boîte de réception, classer vos messages, utiliser les règles et les catégories, et optimiser le moteur de recherche. Vous découvrirez également les fonctionnalités avancées du calendrier pour planifier réunions et rappels, gérer vos tâches et collaborer avec vos collègues grâce aux options de partage.
        </p>
        <p>
          Un accent particulier est mis sur la productivité : gestion de dossiers, gestion des absences, signatures automatiques, délégation d’accès, nettoyage et archivage. Vous apprendrez aussi à gérer les priorités et à intégrer Outlook dans votre organisation personnelle.
        </p>
        <p>
          La formation repose sur des exemples concrets, des ateliers pratiques et des conseils pour adapter Outlook à vos usages. Elle vous aidera à gagner en efficacité, à réduire votre stress numérique, et à mieux maîtriser votre environnement professionnel.
        </p>
      </div>
    </>
  )
}

export default ContentFormationOutlook