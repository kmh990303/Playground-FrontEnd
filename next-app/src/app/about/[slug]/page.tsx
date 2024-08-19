"use client";

import React, { useState } from "react";
import Img from "@/assets/whale.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface PropsType {
  params: { slug: string };
}

const aboutDetail: React.FC<PropsType> = ({ params }) => {
  const [str, setStr] = useState<string>();
  const path = usePathname();

  const clickHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    setStr("good image");
  };

  return (
    <>
      <div className="flex flex-col">
        <div>{params.slug} about Detail page...</div>
        <p>{str}</p>
        <p>{path}</p>
        <p>
          {path.startsWith("/about") ? "start with about" : "not start about"}
        </p>
        <Image onClick={clickHandler} src={Img} alt="Img" />
      </div>
    </>
  );
};

export default aboutDetail;
