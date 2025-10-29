"use client";

import React from "react";
import Image from "next/image";

const ContentFormationPowerBI = () => {
  return (
    <>
      <div className="flex items-end gap-3 pb-10 flex-wrap">
        <div className="w-fit">
          <Image
            src={"/images/powerbi.png"}
            height={100}
            width={100}
            alt={"PowerBI image"}
          />
        </div>
        <div className="w-fit">
          <h3 className="uppercase text-3xl lg:text-4xl font-extrabold">
            Formation Power BI
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
          Chez <strong>Gamma Informatique SA</strong>, nous comprenons l'importance des
          compétences en analyse de données dans le monde professionnel
          d'aujourd'hui. C'est pourquoi nous sommes ravis de vous présenter
          notre formation spécialisée en <strong>Microsoft Power BI</strong>.
        </p>
        <p>
          L'analyste de données Power BI travaille avec tous les acteurs clés
          de l'entreprise, quel que soit son secteur d'activité. Il identifie
          les besoins, trie et transforme les données, puis développe et crée
          des modèles de données avec Microsoft Power BI. Power BI crée de la
          valeur ajoutée grâce à des visualisations de données faciles à
          comprendre.
        </p>
        <p>
          Dans ce programme de formation, vous acquerrez toutes les
          connaissances pratiques nécessaires pour avoir les compétences
          essentielles en analyse de données. Cette formation se déroule sur 5
          jours. Pendant les 2 premières journées, vous vous familiariserez avec
          les fondamentaux de Power Platform. Ils vous permettront de découvrir
          toutes ses fonctionnalités et de créer des solutions professionnelles
          reposant sur le traitement des données.
        </p>
        <p>
          Ensuite, pendant 3 jours, vous aborderez la partie la plus avancée de
          cette formation. Vous découvrirez les différentes méthodes et bonnes
          pratiques pour modéliser, visualiser et analyser les données avec
          Power BI, en fonction des besoins opérationnels et techniques.
        </p>
      </div>
    </>
  );
};

export default ContentFormationPowerBI;
