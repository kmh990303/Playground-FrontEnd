"use client";

import React, { useEffect, useState } from "react";

import flowerImg from "@/assets/flower.jpg";
import frogImg from "@/assets/frog.jpg";
import whaleImg from "@/assets/whale.jpg";
import zebraImg from "@/assets/zebra.jpg";
import Image from "next/image";

const images = [
  { image: flowerImg, alt: "A wonderful flower." },
  { image: frogImg, alt: "A bizzare frog." },
  { image: whaleImg, alt: "A huge whale." },
  { image: zebraImg, alt: "A big zebra." },
];

const Slide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>it's Slide show page...</h1>
      <div>
        <Image
          src={images[currentIndex].image}
          alt={images[currentIndex].alt}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Slide;
