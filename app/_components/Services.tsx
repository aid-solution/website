import React from "react";
import { CodeXml, ShoppingCartIcon, Cloud, Settings, Users, Globe } from "lucide-react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

interface Service {
  title: string;
  Icon: any;
  description: string;
  url: string;
}

const Services = () => {

  const services: Service[] = [
    {
      title: "Logiciels",
      Icon: CodeXml,
      description: "Nous disposons des logiciels: Logiciel de comptabilité Oda compta, Logiciel de Paie, Logiciel Carpa... Développement à la demande.",
      url: "logiciels"
    },
    {
      title: "Ventes",
      Icon: ShoppingCartIcon,
      description: "Du leasing, PC, Desktop, Ondulaire,Stabilisateur de tension, Multiprise pour haute tension, Imprimante PVC, Antivirus.",
      url: "ventes"
    },
    {
      title: "Réseaux et Télécoms",
      Icon: Cloud,
      description: "Téléphonie IP, Vidéo surveillance, Sécurité incendie, Système de pointage, Fibre optique, Boucle Radio, VSAT",
      url: "reseaux_telecoms"
    },
    {
      title: "Maintenance",
      Icon: Settings,
      description: "Maintenance matériels informatiques: Imprimante, Traceur, scanner, PC, Desktop, Serveur, Onduleur",
      url: "maintenance"
    },
    {
      title: "Formation",
      Icon: Users,
      description: "Nous faisons des formations pour améliorer l’efficacité de vos employés.",
      url: "formations"
    },
    {
      title: "Site Web",
      Icon: Globe,
      description: "Conception et réalisation du Site web pour votre structure",
      url: "site_web"
    },
  ];

  return (
    <div className="px-2 md:px-20 py-[100px] bg-[#d9f1f6]">
      <div className="relative">
        <h1 className="uppercase text-4xl font-extrabold text-center pb-4">Nos prestations</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <div className="flex flex-wrap flex-col md:grid md:grid-cols-2 pt-15">
        {
          services.map(({ title, Icon, description, url }, index) => (
            <ServiceCard 
              key={index} 
              title={title} 
              icon={<Icon size={60} className="hover:text-[#024089] text-stone-400" />} 
              description={description}
              url={url} 
            />
          ))
        }
      </div>
      <div className="text-center text-xl mt-5">
        <h3>Vous pouvez également nous envoyer un e-mail et nous vous contacterons sous peu, ou appelez nous</h3>
        <h3 className="text-green-600">
          <Link href="mailto:ventes@gammaniger.com" className="hover:underline">ventes@gammaniger.com</Link>
          {" ou "}
          <Link href="+22720722015" className="hover:underline">+227 20 72 20 15</Link> {" "}
          <Link href="+22720732443" className="hover:underline">+227 20 73 24 43</Link>
        </h3>
      </div>
    </div>
  )
}

export default Services