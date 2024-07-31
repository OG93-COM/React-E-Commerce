import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { detailsproducts } from '../features/products'
import { useParams } from 'react-router-dom'
import { Select, Option, Tooltip, Button } from "@material-tailwind/react";

const ProductDetails = () => {
    const product = useSelector(state => state.product.detailsProduct)
    const { id, type } = useParams()
    const productSize = product[0].size.length > 0 ? product[0].size[0] : "No Size with this Product"
    const [sizeProd, setSizeProd] = useState(productSize)
    console.log(sizeProd)

    return (
        <div >
            {product.filter(prod => prod.id === id).map(produc => (
                <div className='flex justify-center items-center gap-3 flex-wrap'>
                    <div>
                        <img src={produc.img} alt={produc.name} className='border rounded-lg h-[450px] m-2 p-2' />
                    </div>
                    <div className='max-w-lg'>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='font-semibold font-inter text-2xl text-center tracking-normal leading-none'>{produc.name}</h1>
                                <p className='text-amber-900 font-inter text-sm pt-1 pb-2'>20% Discount</p>
                            </div>
                            <p className='text-blue-900 font-inter pr-10'>{produc.price} $</p>
                        </div>
                        <p className='pb-4 font-normal'>{produc.text}</p>
                        <Select
                            label="Select Size"
                            value={sizeProd}
                            onChange={(e) => setSizeProd(e.target.value)}
                        >
                            {produc?.size?.map(size => (
                                <Option value={size}>{size}</Option>
                            ))}

                        </Select>
                        <Tooltip content="Add To Card" >
                            <Button className="mt-3" color='blue' size='lg' variant='outlined' ripple={true}>Add To Card</Button>
                        </Tooltip>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ProductDetails