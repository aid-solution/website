"use client";

import { useEffect } from "react";
import { useMainContext } from "@/app/_contexts/MainContext";
import LogicielBanner from "./LogicielBanner";
import ContentServiceLogiciel from "./ContentServiceLogiciel";

const ServiceLogicelPage = () => {
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
      <LogicielBanner />
      <div className="p-2 lg:px-[100px]">
        <ContentServiceLogiciel />
      </div>
    </>
  )
}

export default ServiceLogicelPage