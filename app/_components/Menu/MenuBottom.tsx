"use client"

import React, { useEffect, useState } from 'react'
import { Handshake, Users, BriefcaseBusiness, Cpu, PanelTopOpen, PanelTopClose, CircleChevronUp, Mail } from "lucide-react";
import Link from 'next/link'
import Card from './Card';
import FacebookIframe from './FacebookIframe';
import NavBar from './NavBar';

interface Card {
  title: string;
  Icon: any;
  description: string
}

interface SocialSwich {
  facebook: boolean;
  twitter: boolean;
  linkedin: boolean;
}

const items: Card[] = [
  {
    title: "Nos objectifs et ceux de nos clients",
    Icon: Handshake,
    description: 'De réaliser au moins une revue de direction annuelle afin de revoir l’adéquation de notre SMQ avec nos objectifs et ceux de nos clients.'
  }, 
  {
    title: "La Conquête Des Marchés Internationaux",
    Icon: Users,
    description: 'Aller à la conquête des marchés internationaux grâce au nouveau positionnement que nous donne la certification ISO 9001 : 2008.'
  }, 
  {
    title: "Système De Communication",
    Icon: BriefcaseBusiness,
    description: 'Elaborer un système de communication interne et externe approprié de manière à rester en permanence à l’écoute de nos clients.'
  }, 
  {
    title: "Processus Continue",
    Icon: Cpu,
    description: 'Intégrer un processus d’amélioration continue.'
  }, 
];

const navigation = {
  "accueil": {
    "title": "Accueil",
    "url": "/"
  },
  "apropos" : {
    "title": "A propos de nous",
    "url": "/a_propos"
  },
  "services" : {
    "title": "Nos services",
    "url": "/services"
  },
  "formations": {
    "title": "Formations",
    "url": "/formations"
  },
  "contact": {
    "title": "Contact",
    "url": "/contact"
  },
};

const MenuBottom: React.FC = () => {

  const [isFixed, setIsFixed] = useState(false);
  const [isOpenPanel, setIsOpenPanel] = useState(false);
  const [social, setSocial] = useState<SocialSwich>({facebook: false, twitter: false, linkedin: false});


  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 115) setIsFixed(true);
      else {
        setIsFixed(false);
        setIsOpenPanel(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const handleCloseTopPanel = () => {
    setIsOpenPanel(!isOpenPanel)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showSocialMedia = (data: string) => {
    const copy = {...social}
    if (!copy[data as keyof SocialSwich]) {
      copy.facebook = false;
      copy.twitter = false;
      copy.facebook = false;
      copy[data as keyof SocialSwich] = !copy[data as keyof SocialSwich];
    } else {
      copy[data as keyof SocialSwich] = false;
    }
    setSocial(copy);
  }
  return (
    <>
      <div className={`flex w-full w-ful justify-center z-10 ${isFixed ? "fixed top-0 w-full" : "absolute pt-2 mb-2"} transition-all duration-300`}>
        <NavBar navigation={navigation} isFixed={isFixed} showSocialMedia={showSocialMedia} />
      </div>
      <div className={`py-3 ps-3 pe-8 z-10 md:gap-5 flex flex-wrap justify-center ${isOpenPanel ? "fixed top-12 w-full" : "hidden"} transition-all duration-300`}>
        {
          items.map(({ title, Icon, description }, index) => (
            <Card key={index} title={title} icon={<Icon size={60} className="text-[#024089]" />} description={description} />
          ))
        }
      </div>
      <div className={`p-3 flex gap-5 me-[-15px] z-10 justify-center ${isFixed && !isOpenPanel ? "fixed top-38 right-1 rotate-90" : "hidden"}`}>
        <button className="cursor-pointer" onClick={handleCloseTopPanel}>
          <PanelTopOpen size={30} className="text-[#024089]" />
        </button>
      </div>
      <div className={`p-3 flex gap-5 me-[-15px] z-10 justify-center ${isOpenPanel ? "fixed right-1 top-38 rotate-270" : "hidden"}`}>
        <button className="cursor-pointer" onClick={handleCloseTopPanel}>
          <PanelTopClose size={30} className="text-red-600" />
        </button>
      </div>
      <div className={`p-3 flex gap-5 me-[-15px] z-10 justify-center ${isFixed ? "fixed right-5 bottom-0" : "hidden"}`}>
        <button onClick={scrollToTop} className="cursor-pointer bg-white rounded-full">
          <CircleChevronUp size={40} className="text-[#024089]" />
        </button>
      </div>
      <div className={`p-3 flex gap-5 me-[-15px] z-10 justify-center fixed left-2 md:left-20 bottom-0 `}>
        <Link href={"#"} className="cursor-pointer bg-[#024089] rounded-full p-3 border-white border-2">
          <Mail size={40} className="text-white" />
        </Link>
      </div>

      {
        social.facebook 
          ? (
            <div className={`flex gap-5 me-[-15px] z-10 justify-center fixed md:right-20 ps-5 md:ps-0 bottom-0`}>
              <FacebookIframe social={social} showSocialMedia={showSocialMedia} />
            </div>
          )
          : <></>
      }
    </>
  )
}

export default MenuBottom