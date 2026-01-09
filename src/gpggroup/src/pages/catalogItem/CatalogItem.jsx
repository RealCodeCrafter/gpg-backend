import React, { useEffect } from 'react'
import Catalog from '../../companents/catalog/Catalog'

const CatalogItem = () => {

  useEffect(() => {
    scrollTo(0,0)
  },[])

  return (
    <div style={{padding: "85px 0px"}}>
        <Catalog hide={true}  />
    </div>
  )
}

export default CatalogItem