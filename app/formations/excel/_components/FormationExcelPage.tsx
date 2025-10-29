"use client";

import { useEffect } from "react";
import { useMainContext } from "@/app/_contexts/MainContext";
import ExcelBanner from "./ExcelBanner";
import HowToRegister from "../../_components/HowToRegister";
import TrainningAgenda from "../../_components/TrainningAgenda";
import WhyChooseOurCourse from "../../_components/WhyChooseOurCourse";
import ContentFormationExcel from "./ContentFormationExcel";

const FormationExcelPage = () => {
  const { setLoading, changePage } = useMainContext();
  useEffect(() => {
    window.scrollTo(0, 0);
    const onPageLoad = () => {
      setLoading(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [changePage, setLoading]);
  return (
    <>
      <ExcelBanner />
      <div className="p-2 lg:px-[100px] py-[50px]">
        <ContentFormationExcel />
        <WhyChooseOurCourse />
        <HowToRegister nameFile="Formulaire-dinscription-Power-BI-2024_Gamma-Informatique-1.docx" />      
        <TrainningAgenda 
          source={"Agenda-formation-Power-BI-Gamma-Informatique.pdf"} 
          fileName={"Formation Excel"} 
        />
      </div>
    </>
  )
}

export default FormationExcelPage