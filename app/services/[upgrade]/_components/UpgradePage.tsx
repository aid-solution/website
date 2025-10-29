"use client";

import { useEffect } from "react";
import { useMainContext } from "@/app/_contexts/MainContext";
import Image from "next/image";

const UpgradePage = () => {
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
    <div className="bg-gray-100 px-2 py-[23px] lg:px-[100px] relative mt-[-40px]">
      <div className="h-[calc(100vh - 60px)] flex flex-col justify-center items-center">
        <Image 
          width={500}
          height={500}
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg" 
          alt="page en création" 
          className="mb-8 h-[50%]" 
        />
        <div className="absolute">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-4">Cette page est en maintenance</h1>
          <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">Nous travaillons d'arrache-pied pour améliorer l'expérience utilisateur. Restez à l'écoute !</p>
        </div>
      </div>
    </div>
  )
}

export default UpgradePage