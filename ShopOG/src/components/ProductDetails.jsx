import React from 'react'
import { useSelector } from 'react-redux'

import { detailsproducts } from '../features/products'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const product = useSelector(state => state.product.detailsProduct)
    console.log(product)
    const { id, type } = useParams()

    return (
        <div >
            {product.filter(prod => prod.id === id).map(produc => (
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={produc.img}/>
                    </div>
                    <div>
                        {produc.name}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ProductDetails