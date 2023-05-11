import React from 'react'
import PropertyList from './PropertyList'

const Property = () => {
  return (
    <div className="flex flex-col gap-4">

    <h1 className="text-2xl font-semibold">
      Browse by Property Type

    </h1>
    <PropertyList />
    </div>
  )
}

export default Property