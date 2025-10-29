"use client"

import { useEffect } from "react";
import { useMainContext } from "@/app/_contexts/MainContext";
import Services from "@/app/_components/Services";
import Statistique from "@/app/_components/Statistique";
import WhyChooseUs from "@/app/_components/WhyChooseUs";
import BrandMarketed from "./BrandMarketed";
import MarqueeCards from "./MarqueeCards";
import ServiceBanner from "./serviceBanner";

const ServicePage = () => {
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
      <ServiceBanner />
      <MarqueeCards />
      <Services />
      <BrandMarketed />
      <Statistique />
      <WhyChooseUs />
    </>
  )
}

export default ServicePage