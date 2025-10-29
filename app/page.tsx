import React from "react"
import type { Metadata } from "next";
import HomePage from "./_components/HomePage";

export const metadata: Metadata = {
  title: "Gamma Informatique",
  description: "Une société de fournitures déquipement Informatique.",
};

const Home = () => {
  return <HomePage />
}

export default Home