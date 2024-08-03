import React from 'react'
import {filterproducts} from '../features/products.js'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import FiltredProducts from './FiltredProducts.jsx'

const NavigateButton = () => {
    const category = ['Wetsuits', 'Masks', 'Fins', 'Spearguns', 'Buoys', 'Flashlight', 'Daggers']
    const filterState = useSelector(state => state.product)
    const dispatch = useDispatch()
    console.log(filterState)

    return (

        <>
            <div className='flex justify-center items-center'>
                {category.map((article, idx) => (
                    <Link key={idx} to={`/filtredProduct/${article}`}>
                        <button
                            key={idx}
                            onClick={()=> dispatch(filterproducts(article))}
                            className='border-2 border-gray-300 text-blue-gray-600 rounded py-2 px-3 m-1 hover:bg-blue-gray-100'>
                            {article}
                        </button>
                    </Link>
                ))}
            </div>
            <div className='flex justify-center my-4'>
                <p className='w-[400px] bg-blue-800 text-white rounded p-2 text-center'>Sale Up to 50%s</p>
            </div>
            
        </>
    )
}

export default NavigateButton