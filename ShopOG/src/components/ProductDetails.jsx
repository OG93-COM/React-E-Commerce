import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { detailsproducts } from '../features/products'
import { useParams } from 'react-router-dom'
import { Select, Option, Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from '../features/cart';

const ProductDetails = () => {
    const product = useSelector(state => state.product.detailsProduct)
    const { id, type } = useParams()
    const productSize = product[0].size.length != 0 ? product[0].size[0] : "No Size with this Product";
    const [value, setValue] = useState(productSize);
    console.log(value)
    const dispatch = useDispatch()
    return (
        <div >
            {product.filter(prod => prod.id === id).map(produc => (
                <div className='flex justify-center items-center gap-3 flex-wrap' key={produc.id}>
                    <div>
                        <img src={produc.img} alt={produc.name} className='border rounded-lg h-[450px] m-2 p-2' />
                    </div>
                    <div className='max-w-lg'>
                        <div className='flex justify-between lg:mb-24'>
                            <div>
                                <h1 className='font-semibold font-inter text-2xl text-center tracking-normal leading-none'>{produc.name}</h1>
                                <p className='text-amber-900 font-inter text-sm pt-1 pb-2'>20% Discount</p>
                            </div>
                            <p className='text-blue-900 font-inter pr-10'>{produc.price} $</p>
                        </div>
                        <p className='pb-4 font-normal'>{produc.text}</p>
                        
                        {produc?.size?.length != 0 &&
                            <Select
                            label="Select Size"
                            value={value}
                            onChange={(val) => setValue(val)}
                        >
                            {produc?.size?.map((size,idx) => (
                                <Option key={idx} value={size}>{size}</Option>
                            ))}

                        </Select>
                        }
                        <Tooltip content="Add To Card" >
                            <Button
                            className="mt-3  w-full" color='gray' size='sm' variant='outlined' 
                            ripple={true}
                            onClick={()=> dispatch(addToCart({
                                id: produc.id,
                                name: produc.name,
                                img: produc.img,
                                text: produc.text,
                                size: produc,
                                color: produc,
                                price: produc.price,
                                amount: 1,
                                totalPrice: produc.price,
                              }))}>Add To Card</Button>
                        </Tooltip>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ProductDetails