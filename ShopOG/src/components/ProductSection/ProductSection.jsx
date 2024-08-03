import React from 'react'
import { storeData } from '../../assets/data'
import ProductCard from '../ProductCard'

const ProductSection = () => {

  return (
    <div className='flex justify-center items-center m-2 p-2 flex-wrap gap-3 lg:w-[90%]'>
        {storeData.slice(0,6).map((item,idx) => (
            <ProductCard key={item.id} img={item.img} title={item.name} description={item.text} price={item.price} id={item.id} />
            ))}
    </div>
  )
}

export default ProductSection