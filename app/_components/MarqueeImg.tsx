import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  partener: string;
  index: number;
  link?: string;
}

const MarqueeImg: React.FC<Props> = ({ partener, index, link = "#!" }) => {
  return (
    <Link href={link} target="_blank" key={index}>
      <Image
        src={`/partenaires/${partener}`}
        alt={`Partenaire ${index}`}
        width={120}
        height={60}
        style={{ width: "auto", height: "60px", margin: "0 40px" }}
      />
    </Link>
  );
};

export default MarqueeImg;
