import React from 'react'
import { useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import NavigateButton from './NavigateButton'

const FiltredProducts = () => {
  const filterState = useSelector(state => state.product.filtredProduct)
  const {type} = useParams()
  console.log(type)

  return (
    <div>
      <NavigateButton/>
      <div className='flex justify-center items-center m-2 p-2 flex-wrap gap-3'>
        {filterState?.filter(prod => prod.type === type).map(product => (
          
            <ProductCard key={product.id} img={product.img} title={product.name} description={product.text} price={product.price} id={product.id} type={product.type} />
        ))}
      </div>

    </div>
  )
}

export default FiltredProducts