import React from 'react'
import Nav from './NavBar/Nav'
import Slider from './Slider/Slider'
import NavigateButton from './NavigateButton'
import { storeData } from '../assets/data';
import ProductCard from './ProductCard';
import ProductSection from './ProductSection/ProductSection';

const Main = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto'>
            <Slider />
            <NavigateButton />
            <ProductSection/>
        </div>
    )
}

export default Main