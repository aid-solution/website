
import React from "react"
import Link from "next/link";

interface Props {
  nameFile: string
}

const HowToRegister: React.FC<Props> = ({ nameFile }) => {
  return (
    <>
      <div className="relative mt-10">
        <h1 className="text-2xl lg:text-3xl font-extrabold pb-4">
          Comment s&apos;inscrire ?
        </h1>
      </div>
      <ul className="flex flex-col gap-2 formation-list">
        <li>
          Il vous suffit de télécharger et de remplir le formulaire
          d&apos;inscription ci-dessous, puis de l&apos;envoyer par mail à l&apos;adresse
          suivante :{" "}
          <strong>
            <a href="mailto:delog@gammaniger.com">delog@gammaniger.com</a>
          </strong>
          .
        </li>
        <li>
          <Link
            href={`/docs/${nameFile}`}
            download
            className="inline-block w-fit ms-2 px-4 py-2 rounded-md bg-green-600 text-white border-2 border-green-600 hover:bg-white hover:text-green-700 font-semibold transition"
          >
            Télécharger le formulaire
          </Link>
        </li>
      </ul>
    </>
  )
}

export default HowToRegister