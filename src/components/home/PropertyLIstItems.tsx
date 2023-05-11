import React from "react";
import Image from "next/image";



interface PropertyListItems {
    title: string; 
    numbers: number; 
    image?: string | any; 
    href?: string;  

}

const PropertyLIstItems: React.FC<PropertyListItems> = ({
    title,
    numbers,
    image,
}) => {
  return (
    <div className=" cursor-pointer overflow-hidden rounded-md">
      <Image
        src={image}
        alt="Property list image"
        width="200"
        height="200"
      />
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h2 className="text-2xl">{numbers} hotels</h2>
    </div>
  );
};

export default PropertyLIstItems;
