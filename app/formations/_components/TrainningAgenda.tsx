import React from "react"
import Link from "next/link"
import { Phone, MessageCircleMore } from "lucide-react"
import AdobePdfViewer from "./AdobePdfViewer";
/* import AdobePdfViewer from "./AdobePdfViewer" */
/* const PdfViewer = dynamic(() => import("./PdfViewer"), { ssr: false }); */

interface Props {
  source: string;
  fileName: string;
}

const TrainningAgenda: React.FC<Props> = ({ source, fileName }) => {
  return (
    <>
      <div className="relative mt-10">
        <h1 className="text-2xl lg:text-3xl font-extrabold pb-4">
          Agenda de la formation
        </h1>
      </div>
      
      <p className="text-sm text-gray-500 pb-2">
        Consultez l&apos;agenda complet de la formation ci-dessous :
      </p>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-[60%]">
          <AdobePdfViewer
            source={`/docs/${source}`}
            fileName={fileName}
          />
          {/* <PdfViewer fileUrl={`/docs/${source}`} fileTitle={fileName} /> */}
        </div>

        <div className="w-full md:w-[40%] px-2">
          <h2 className="text-2xl lg:text-3xl font-extrabold pb-4">
            Autres informations utiles
          </h2>

          <div className="flex items-center gap-2 pb-2 text-lg text-gray-600 leading-loose font-semibold">
            <span>Contact :</span>
            <Link href="tel:+22790205050" target="_blank">
              <Phone className="text-[#024089]" size={20} />
            </Link>
            <Link href="https://wa.me/22790205050" target="_blank">
              <MessageCircleMore className="text-[#024089]" size={20} />
            </Link>
            <span className="ml-2">+227 90 20 50 50</span>
          </div>

          <p className="text-lg text-gray-600 leading-loose text-justify">
            Investissez dans votre avenir dès aujourd&apos;hui en perfectionnant vos compétences en bureautique avec <strong>GAMMA INFORMATIQUE</strong> !<br />
            Nous sommes impatients de vous accompagner tout au long de votre parcours d&apos;apprentissage.
          </p>
        </div>
      </div>
    </>
  )
}

export default TrainningAgenda
