import React from "react";
import Image from "next/image";

interface Props {
  source: string;
  message: string
}

const TestimonialCard: React.FC<Props> = ({ source, message }) => {
  return (
    <div className="flex-1 flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 text-center md:max-w-xs">
      <div className="relative w-24 h-24">
        <Image
          src={"/images/avis_client.jpg"}
          alt={source}
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="font-bold text-lg mt-4"> {"Anonyme"} </h3>
      <p className="text-gray-600 mt-2 text-justify"> {message} </p>
    </div>
  );
};

export default TestimonialCard;
