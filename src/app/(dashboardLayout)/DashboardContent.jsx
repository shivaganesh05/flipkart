"use client";

import Image from "next/image";
import React from "react";

const images = [
  { src: "/banner2.webp", alt: "Banner 1" },
  { src: "/samsung.png", alt: "Samsung Ad" },
  { src: "/oneplus.jpg", alt: "OnePlus Promo" },
  { src: "/banner4.webp", alt: "Banner 4" },
];

const DashboardContent = () => {
  return (
    <div className="w-full max-w-[1620px] mx-auto grid grid-cols-1 gap-4 px-4">
      {images.map((img, index) => (
        <div key={index} className="relative w-full h-[200px] md:h-[390px]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover rounded-md"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardContent;
