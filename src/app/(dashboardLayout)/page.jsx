"use client";

import React from "react";
import CarouselBanner from "../../components/common/carouselBanner";
import Image from "next/image";
import DashboardContent from "../../components/DashboardContent";

const page = () => {
  return (
    <div>
      <CarouselBanner />
      <DashboardContent />
    </div>
  );
};

export default page;
