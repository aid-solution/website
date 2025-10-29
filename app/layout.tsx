"use client";

import { useEffect } from "react";
import "./globals.css";
import Menu from "./_components/Menu";
import Footer from "./_components/Footer";
import Parteners from "./_components/Parteners";
import { MainContextProvider } from "./_contexts/MainContext";
import Spinner from "./_components/Spinner";
import Consulting from "./_components/Consulting";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/cron");
        const data = await res.json();
        console.log("Réponse API :", data);
      } catch (err) {
        console.error(err);
      }
    }, 300000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col" cz-shortcut-listen="true">
        <MainContextProvider>
          <>
            <Spinner />
            <Menu />
            <main className="flex-1">{children}</main>
            <Consulting />
            <Parteners />
            <Footer />
          </>
        </MainContextProvider>
      </body>
    </html>
  );
}
