"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Page = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const images = [
    "/watches.jpg",
    "/shoes.jpg",
    "/wiomen.jpg",
    "/goldchain.jpg",
    "/dressses.jpg",
  ];

  return (
    <div className="w-full max-w-[1620px] mx-auto overflow-hidden">
       <Image
        src="/banner2.webp"
        alt="Flipkart Logo"
        width={1620}
        height={390}
      />
      <Image
        src="/topDeals.jpg"
        alt="Flipkart Logo"
        width={1620}
        height={390}
      />
      <Carousel
        plugins={[plugin.current]}
        className="relative"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((img, index) => (
           <CarouselItem key={index}>
  <div className="relative w-full h-[200px] mx-2 sm:h-[300px] md:h-[390px] lg:h-[480px]">
    <Image
      src={img}
      alt={`Slide ${index + 1}`}
      fill
      className="object-cover rounded"
      priority={index === 0}
    />
  </div>
</CarouselItem>

          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
};

export default Page;
