import React from 'react'
import Nav from './NavBar/Nav'
import Slider from './Slider/Slider'
import NavigateButton from './NavigateButton'
import { storeData } from '../assets/data';
import ProductCard from './ProductCard';

const Main = () => {
    return (
        <div>
            <Slider />
            <NavigateButton />
            <div className='flex justify-center items-center m-2 p-2 flex-wrap gap-3'>
                {storeData.map(product  => (
                    <ProductCard key={product.id} img={product.img} title={product.name} description={product.text} price={product.price} />
                ))}
            </div>
        </div>
    )
}

export default Main