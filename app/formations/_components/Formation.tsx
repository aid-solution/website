import React from "react";
import FormationCard from "./FormationCard";

interface Datas {
  image: string;
  firstName: string;
  colorLastName: string;
  lastName: string;
  description: string;
}

const Formation = () => {

  const data: Datas[] = [
    {
      image: "excel.jpg",
      firstName: "Excellez dans vos données avec",
      colorLastName: "text-[#0B6D37] ",
      lastName: "Microsoft Excel",
      description: "Vous souhaitez analyser et organiser vos données efficacement ? Rejoignez notre formation complète sur Microsoft Excel et découvrez comment utiliser ses fonctionnalités avancées pour optimiser votre gestion et prise de décision.",
    },
    {
      image: "word.png",
      firstName: "Mettez des mots sur vos idées avec",
      colorLastName: "text-[#134CAF]",
      lastName: "Microsoft Word",
      description: "Vous souhaitez créer des documents professionnels, clairs et bien organisés ? Rejoignez notre formation complète sur Microsoft Word et découvrez comment exploiter cet outil incontournable pour optimiser votre travail au quotidien.",
    },
    {
      image: "powerpoint.png",
      firstName: "Faites sensation avec",
      colorLastName: "text-[#BF3919]",
      lastName: "Microsoft PowerPoint",
      description: "Vous souhaitez captiver votre audience avec des présentations dynamiques et percutantes ? Rejoignez notre formation complète sur Microsoft PowerPoint et apprenez à créer des diapositives professionnelles qui marquent les esprits.",
    },
    {
      image: "powerbi.png",
      firstName: "Prenez le pouvoir sur vos données avec",
      colorLastName: "text-[#CC7A15] ",
      lastName: "Power BI",
      description: "Vous souhaitez transformer vos données en analyses visuelles claires et interactives ? Rejoignez notre formation complète sur Microsoft Power BI et découvrez comment créer des tableaux de bord et des rapports percutants pour une meilleure prise de décision.",
    },
    {
      image: "outlook.png",
      firstName: "Gardez un œil sur vos mails avec",
      colorLastName: "text-[#106ED1] ",
      lastName: "Microsoft Outlook",
      description: "Vous souhaitez mieux organiser votre messagerie et optimiser votre gestion du temps ? Rejoignez notre formation complète sur Microsoft Outlook et apprenez à utiliser ses outils de messagerie, de calendrier et de gestion des tâches pour gagner en efficacité.",
    },
    {
      image: "msproject.png",
      firstName: "Menez vos projets à bon port avec",
      colorLastName: "text-[#0E763E] ",
      lastName: "Microsoft Project",
      description: "Vous souhaitez piloter vos projets avec plus de précision et d’efficacité ? Rejoignez notre formation complète sur Microsoft Project et apprenez à planifier, suivre et gérer vos projets de manière structurée et professionnelle.",
    },
  ];
  

  return (
    <div className="p-2 lg:px-[100px] py-[50px]">
      <div className="flex flex-col gap-10">
        {
          data.map(({ image, firstName, colorLastName, lastName, description }, index)=> (
            <FormationCard 
              key={index}
              index={index} 
              link={`formations/${lastName.replace("Microsoft ", "").replaceAll(" ", "_").toLocaleLowerCase()}`} 
              image={`/images/${image}`} 
              firstName={firstName} 
              colorLastName={colorLastName} 
              lastName={lastName} 
              description={description} 
            />
          ))
        }
      </div>
    </div>
  )
}

export default Formation