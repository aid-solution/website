import React from "react"
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const FooterTop = () => {
  const menuServices : {name: string, url: string}[] = [
    {name: "Ventes", url: "services/ventes"},
    {name: "Logiciels", url: "services/Logiciels"},
    {name: "Réseaux et Télécoms", url: "services/Reseaux_telecoms"},
    {name: "Formation", url: "services/formation"},
    {name: "Site Web", url: "services/site_web"},
    {name: "Maintenance", url: "services/maintenance"}
  ];
  return (
    <div className="bg-[#024089] text-white flex flex-col md:flex-row gap-5 p-4 md:p-15">
      <div className="flex-1 flex flex-col gap-5 justify-center">
        <h3 className="text-xl uppercase">A propos de notre conseil</h3>
        <p className="text-justify"> Que vous soyez une startup en pleine croissance, une PME établie ou une grande entreprise, notre équipe d'experts chevronnés est là pour vous aider à naviguer dans le paysage technologique en constante évolution. </p>
        <div>
          <div className="flex items-center gap-2 pb-2">
            <PhoneCall size={30} className="text-white" />
            <p>Toutes les requêtes</p>
          </div>
          <div className="ps-10">
            <p>
              <Link href="+22720722015" className="hover:ps-2 hover:text-green-600">+227 20 72 20 15</Link>
            </p>
            <p>
              <Link href="+22720732443" className="hover:ps-2 hover:text-green-600">+227 20 73 24 43</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 md:hidden lg:block">
      </div>
      <div className="flex-1">
        <h3 className="text-xl uppercase">Solutions</h3>
        <ul className="pt-4 ps-4 flex gap-3 flex-col">
          {
            menuServices.map((service, index)=> (
            <li key={index}>
              <Link href={service.url} className="hover:ps-2 hover:text-green-600 relative before:ml-0.5 before:text-white before:content-['\00BB'] before:pe-2 before:text-semibold hover:before:text-green-600">
                {service.name}
              </Link>
            </li>
            ))
          }
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="text-xl uppercase">Bulletin</h3>
        <form action="" className="mt-5">
          <div className="form-group relative">
            <input
              type="text"
              placeholder=" "
              id="bulletinNomPrenom"
              className="block py-2 px-0 w-full text-white bg-transparent border-0 border-b-1 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-950 peer"
            />
            <label
              htmlFor="bulletinNomPrenom"
              className="absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-white"
            >
              Nom & Prénom
            </label>
          </div>
          <div className="form-group relative mt-4">
            <input
              type="email"
              placeholder=""
              id="bulletinEmail"
              className="block py-2 px-0 w-full text-white bg-transparent border-0 border-b-1 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-950 peer"
            />
            <label
              htmlFor="bulletinEmail"
              className="absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-white"
            >
              E-mail
            </label>
          </div>
          <div className="form-group mt-4">
            <input
              type="submit"
              value="S'abonner"
              className="px-3 py-2 uppercase border-2 border-white bg-white rounded-md hover:bg-green-600 hover:text-white hover:border-green-600 text-green-700"
            />
          </div>

        </form>

      </div>
    </div>
  )
}

export default FooterTop