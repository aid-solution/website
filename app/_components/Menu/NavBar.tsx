"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { Facebook, Linkedin, Menu, Twitter } from "lucide-react";
import { useMainContext } from "@/app/_contexts/MainContext";

interface Props {
  navigation: any;
  isFixed: boolean;
  showSocialMedia: (data: string) => void
}

const NavBar: React.FC<Props> = ({ navigation, isFixed, showSocialMedia }) => {
  const { setLoading } = useMainContext()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname(),
    active = pathName.split("/")[1];

  return (
    <nav className={`bg-[#024089] w-full ${isFixed ? "lg:w-full" : "lg:w-fit"} px-5 z-10`} >
      <div className={`container mx-auto flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-5 ${isFixed ? "" : "py-2"}`}>
        <div className={`flex justify-between items-center gap-5 lg:gap-0 w-full lg:w-fit ${isFixed ? "h-fit py-2 w-auto" : "lg:hidden"}`}>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden block">
            <Menu
              id="menu-button"
              className="h-6 w-6 cursor-pointer text-green-600"
            />
          </button>
          <Link href="/" className={`block ${isFixed ? "lg:-ms-5" : "lg:hidden"}`} >
            <Image
              className="dark:invert"
              src="/gamma.jpg"
              alt="Gamma logo"
              width={150}
              height={38}
              priority
            />
          </Link>
        </div>
        <div
          className={`${mobileMenuOpen ? "" : "hidden"
            } space-x-4 lg:flex lg:items-center lg:w-auto `}
          id="menu"
        >
          <ul
            className="flex flex-col lg:flex-row lg:justify-between lg:pt-0 gap-4 lg:gap-6"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {Object.keys(navigation).map((lien, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={() => setLoading(false)}
                    href={navigation[lien].url}
                    className={`block w-fit  border-b-2 hover:text-green-600 hover:border-white ${"/" + active === navigation[lien].url
                      ? "text-green-600 border-white font-bold" 
                      : "text-white border-[#024089]"
                      }`
                    }
                  >
                    {navigation[lien].title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`w-[200px] lg:flex lg:justify-center ${mobileMenuOpen ? "flex" : "hidden"}`}>
          <button className="cursor-pointer px-3 py-2 border-2 border-white bg-white rounded-md hover:bg-green-600 hover:text-white hover:border-green-600 text-green-700 font-semibold">PROMOTION</button>
        </div>
        <div className={`lg:space-x-4 lg:flex lg:justify-center ${mobileMenuOpen ? "flex" : "hidden"}`}>
          <ul className="flex lg:justify-between lg:pt-0 gap-4">
            <li>
              <div className="text-white cursor-pointer" onClick={() => showSocialMedia("facebook")}>
                <Facebook />
              </div>
            </li>
            <li>
              <div className="text-white cursor-pointer" onClick={() => showSocialMedia("twitter")}>
                <Twitter />
              </div>
            </li>
            <li>
              <div className="text-white cursor-pointer" onClick={() => showSocialMedia("linkedin")}>
                <Linkedin />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default NavBar;
