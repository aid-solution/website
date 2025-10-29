"use client";

import React from "react";
import Image from "next/image";

const ContentFormationWord = () => {
  return (
    <>
      <div className="flex items-end gap-3 pb-10 flex-wrap">
        <div className="w-fit">
          <Image
            src={"/images/word.png"}
            height={100}
            width={100}
            alt={"PowerBI image"}
          />
        </div>
        <div className="w-fit">
          <h3 className="uppercase text-3xl lg:text-4xl font-extrabold">
            Formation Word
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
          La formation <strong>Microsoft Word</strong> vous permet d'acquérir une maîtrise complète de l'outil de traitement de texte le plus utilisé en entreprise. Elle s'adresse à toute personne amenée à rédiger, structurer ou finaliser des documents administratifs, commerciaux ou techniques.
        </p>
        <p>
          Durant cette formation, vous apprendrez à concevoir des documents de qualité professionnelle. Les premières séquences vous familiariseront avec les fonctions de base : saisie et mise en forme du texte, gestion des paragraphes, insertion d'images et tableaux, utilisation des tabulations et des puces.
        </p>
        <p>
          Dans les sessions suivantes, vous approfondirez l'usage des styles pour une mise en forme automatisée, la création de modèles personnalisés, la construction de sommaires dynamiques, la gestion des en-têtes et pieds de page, la numérotation hiérarchique, ainsi que les techniques de révision collaborative. Le publipostage, les formulaires Word et la protection de documents seront également abordés.
        </p>
        <p>
          La formation inclut de nombreux exercices pratiques issus de situations professionnelles réelles. Elle vous permettra de gagner du temps, d'augmenter votre efficacité, et de produire des documents homogènes, clairs et structurés. Un support de cours électronique vous sera remis, et une attestation de formation vous sera délivrée à l'issue du programme.
        </p>
      </div>
    </>
  );
};

export default ContentFormationWord;
