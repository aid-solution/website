"use client"

import { useEffect } from "react";
import { useMainContext } from "@/app/_contexts/MainContext";
import ContactBanner from "./ContactBanner";
import ContactContent from "./ContactContent";

const ContactPage = () => {
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
      <ContactBanner />
      <ContactContent />
    </>
  )
}

export default ContactPage