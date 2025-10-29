import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMainContext } from "@/app/_contexts/MainContext";

interface Props {
  index: number;
  link: string;
  image: string;
  firstName: string;
  colorLastName: string;
  lastName: string;
  description: string;
}

const FormationCard: React.FC<Props> = ({ index, link, image, firstName, colorLastName, lastName, description }) => {
  const { setLoading } = useMainContext()
  return (
    <Link href={link} onClick={() => setLoading(false)}>
      <div className="flex flex-col md:flex-row items-center border border-stone-300 rounded-lg p-6 hover:shadow-lg hover:scale-105">
        <div className="flex items-center justify-center p-4 rounded-lg md:w-1/4 lg:w-1/5">
          <Image
            src={image}
            alt={`images formation ${index}`}
            width={100}
            height={100}
            className="w-40 h-30" />
        </div>
        <div className="ml-4 md:w-3/4 lg:w-4/5">
          <h2 className="text-2xl font-extrabold uppercase">
            {firstName} <span className={`${colorLastName}`}>{lastName}</span>
          </h2>
          <p className="text-gray-700 mt-2 text-justify"> {description} </p>
        </div>
      </div>
    </Link>
  )
}

export default FormationCard