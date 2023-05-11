import Image from "next/image";
import React from "react";
import PropertyLIstItems from "./PropertyLIstItems";

const PropertyList = () => {
    const properties = [
        {
            title: "hotels",
            numbers: 233 ,
            image: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",

        },
        {
            title: "Apartments",
            numbers:233 ,
            image: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",

        },
        {
            title: "Resorts",
            numbers:2331 ,
            image: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",

        },
        {
            title: "Villas",
            numbers:2331 ,
            image: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",

        },
        {
            title: "Cabins",
            numbers:2331 ,
            image: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",

        },
    ]
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-between w-full">
        {properties.map((property) => (

      <PropertyLIstItems key={property.title} title={property.title} numbers={property.numbers} image={property.image}  />
        ))}
      
    </div>
  );
};

export default PropertyList;
