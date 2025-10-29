import Image from "next/image";

const Company = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 lg:px-[100px] py-[50px] gap-10">
      <div className="flex-1 relative">
        <Image 
          src={"/images/company.png"}
          alt="Company"
          fill
          className="rounded-lg scale-x-[-1]"
        />
      </div>
      <div className="relative flex-1 bg-[#F2F2F2] rounded-b-lg p-4 border-t border-stone-400">
        <div className="flex gap-10 justify-between mb-5 scale-75 lg:scale-100">
          <div className="flex-1 flex flex-col items-center">
            <div className="relative">
              <Image 
                src={"/icons/star.png"}
                alt="Icon start"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-center text-2xl font-semibold">Vision</h3>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="relative">
              <Image 
                src={"/icons/medal.png"}
                alt="Icon medal"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-center text-2xl font-semibold">Mission</h3>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="relative">
                <Image 
                src={"/icons/objetif.png"}
                alt="Icon objectif"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-center text-2xl font-semibold">Objetif</h3>
          </div>
        </div>
        <div className="relative md:mb-2">
          <h1 className="uppercase text-4xl font-extrabold text-center pb-4">Au sujet de notre entreprise</h1>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md "></span>
        </div>
        <div className="relative">
          <p className="text-justify bottom-2 pe-4">
          Chez <span className="uppercase text-green-600 font-semibold">Gamma Informatique</span>, nous nous engageons à offrir des solutions informatiques de pointe qui propulsent votre entreprise vers le succès. En tant que leader de l&apos;industrie, nous combinons expertise technique, innovation et service client exceptionnel pour répondre à vos besoins uniques.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Company