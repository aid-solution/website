"use client"

import React, { useEffect } from "react"
import HomeBanner from "./HomeBanner";
import Company from "./Company";
import Customers from "./Customers";
import FromTheCEO from "./FromTheCEO";
import GammaInNumbers from "./GammaInNumbers";
import ServiceProvided from "./ServiceProvided";
import Services from "./Services";
import Testimoniales from "./Testimoniales";
import { useMainContext } from "../_contexts/MainContext";

const HomePage = () => {
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
      <HomeBanner />
      <Company />
      <ServiceProvided />
      <Services />
      <FromTheCEO />
      <GammaInNumbers />
      <Customers />
      <Testimoniales />
    </>
  )
}

export default HomePage