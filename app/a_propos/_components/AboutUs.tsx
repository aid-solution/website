import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center px-2 py-[50px] lg:px-[100px]">
      <div className="flex-1 relative h-[350px]">
        <Image
          src={"/banner/apropos_banner.jpg"}
          alt="CEO"
          fill
          style={{ width: "100%" }}
          className="rounded-md"
        />
      </div>
      <div className="flex-1">
        <div className="relative">
          <h1 className="uppercase text-3xl lg:text-4xl font-extrabold text-center pb-4">Qui sommes-nous ?</h1>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
        </div>
        <p className="text-justify font-semibold pt-5">
          Gamma Informatique est une société de fournitures d&apos;équipement Informatique.
          Pour la satisfaction des exigences de la Clientèle, Gamma Informatique s&apos;est doté d&apos;unsystème de management de la qualité conformément au reférentiel ISO 9001:2008.
          A travers nos activités, nous mettons à la disposition de nos clients nos compétences afin de les aider à prendre des décisions judicieuses dans le choix de l&apos;équipement, dans le choix d&apos;un nouveau système d&apos;information et dans l&apos;amélioration de la productivité de leurs ressources.
        </p>
      </div>
    </div>
  )
}

export default AboutUs