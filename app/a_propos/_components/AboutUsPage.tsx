"use client"

import React, { useEffect } from "react"
import { useMainContext } from "@/app/_contexts/MainContext";
import Customers from "@/app/_components/Customers";
import Statistique from "@/app/_components/Statistique";
import AboutUs from "./AboutUs";
import AProposBanner from "./AProposBanner";
import OurApproach from "./OurApproach";
import OurHistoryVisionMission from "./OurHistoryVisionMission";

const AboutUsPage = () => {
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
      <AProposBanner />
      <AboutUs />
      <OurHistoryVisionMission />
      <OurApproach />
      <Statistique />
      <Customers />
    </>
  )
}

export default AboutUsPage