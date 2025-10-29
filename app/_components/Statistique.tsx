import React from "react";

const stats = [
  { value: "+33", label: "Années d'expériences" },
  { value: "+2 000", label: "Interventions techniques" },
  { value: "+74", label: "Projets internationaux" },
  { value: "+94%", label: "Taux de satisfaction" },
];

const Statistique = () => {
  return (
    <div className="px-2">
      <div className="relative">
        <h1 className="uppercase text-3xl lg:text-4xl font-extrabold text-center pb-4">Gamma Informatique SA</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <div className="relative flex justify-center items-center py-10">
        <div className="absolute top-1/2 w-full h-0.5 bg-gray-200"></div>
        <div className="relative z-2 bg-white shadow-xl md:p-10 flex flex-col md:flex-row md:w-3/4 justify-around md:border-b-7 md:border-[#024089] ">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-b-7 border-[#024089] md:border-0 mb-4 md:mb-0">
              <p className="text-[45px] font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistique;
