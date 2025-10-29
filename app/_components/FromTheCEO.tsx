import Image from "next/image";

const FromTheCEO = () => {
  return (
    <div className="px-2 md:px-20 py-[50px]">
      <div className="relative mb-10">
        <h1 className="uppercase text-3xl md:text-4xl font-extrabold text-center pb-4">Le mot du PDG</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 px-2 md:px-0">
        <div className="flex-1">
          <div className="flex justify-center">
            <Image 
              src={"/gamma.jpg"}
              alt="Logo"
              width={300}
              height={80}
            />
          </div>
          <p className="text-justify font-semibold pt-5">
            Les Technologies de l&apos;Information et de la Communication (TIC) font partie intégrante de notre quotidien. C&apos;est pour vous accompagner dans des processus optimisés que Gamma Informatique s&apos;est donnée pour vocation de devenir le partenaire unique et dédié. Nous avons fait le pari de satisfaire la majorité de vos besoins en matériels, logiciels, maintenance, réseaux, VSAT, solutions et accessoires en mettant à profit notre expérience de plus de 30 ans de métier. Nous avons su bâtir un réseau de partenaires dont la notoriété est internationalement reconnue et cela nous a permis de capitaliser des relations pérennes avec nos clients. <br/>C&apos;est le lieu pour moi, d&apos;affirmer que si vous nous faites confiance, votre satisfaction et vos succès seront au Rendez-vous. Nous prenons cet Engagement !
          </p>
        </div>
        <div className="flex-1">
          <div className="relative h-[200px] md:h-[350px]">
            <Image 
              src={"/images/PDG.jpg"}
              alt="CEO"
              fill
              className="rounded-lg scale-x-[-1]"
            />
            <h3 className="text-center text-xl font-bold">Monsieur Ibrah Mahaman Kabo</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FromTheCEO