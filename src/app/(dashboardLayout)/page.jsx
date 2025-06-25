"use client";

import React from 'react'
import CarouselBanner from './carouselBanner'
import Image from 'next/image';
import DashboardContent from './DashboardContent';

const page = () => {
  return (
    <div>
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
            
      <CarouselBanner />
      <DashboardContent />
    </div>
  )
}

export default page
