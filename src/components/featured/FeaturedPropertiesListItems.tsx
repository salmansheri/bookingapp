"use client";

import Image from "next/image";
import React, { useMemo } from "react";

interface FeaturedPropertiesListItemsProps {
  title: string;
  image?: string | any;
  city?: string;
  price?: number;
  rating: number;
  href?: string; 
}

const FeaturedPropertiesListItems: React.FC<
  FeaturedPropertiesListItemsProps
> = ({ title, image, city, price, rating }) => {
  const credits = useMemo(() => {
    if (rating >= 8) {
      return "Excellent";
    } else if (rating >= 6) {
      return "good";
    }
  }, [rating]);

  return (
    <div className="flex flex-col gap-2  rounded-md cursor-pointer">
      <div>

      <Image src={image} alt={title} height="300" width="300" />
      </div>
      <div className="p-3 flex flex-col gap-2">

      <span className="text-2xl">{title}</span>
      <span className="text-xl">{city}</span>
      <span className="text-lg">Starting from $ {price} </span>
      <div className="flex gap-2 text-sm items-center">
        <button className="bg-[#003580] px-2 py-1">{rating}</button>
        <span>{credits}</span>
      </div>
      </div>
    </div>
  );
};

export default FeaturedPropertiesListItems;
