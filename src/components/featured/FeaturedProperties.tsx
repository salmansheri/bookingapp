import React from 'react'
import FeaturedPropertiesListItems from './FeaturedPropertiesListItems'

const FeaturedProperties = () => {
    const featuredProperties = [
        {
            title: "Hotel Stare Miastro",
            city: "Madrid",
            price: 1,

            image: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            rating: 7
        }, 
        {
            title: "Stare Miastro",
            city: "Madrid",
            price: 1,

            image: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            rating: 8
        }, 
        {
            title: "five Stare Miastro",
            city: "Madrid",
            price: 1,

            image: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            rating: 8.9
        }, 

    ]
  return (
    <div className="">
        <h1>Property Users Love</h1>
        <div className="flex flex-row gap-3 mt-5 justify-between">


        {featuredProperties.map((property) => (
            
            <FeaturedPropertiesListItems key={property.title} title={property.title} city={property.city} price={property.price} image={property.image} rating={property.rating} />
            ))}

            </div>

    </div>
  )
}

export default FeaturedProperties