import React from 'react'

const NavigateButton = () => {
    const category = ['Wetsuits', 'Masks', 'Fins', 'Spearguns', 'Buoys', 'Flashlight', 'Daggers']
    return (

        <>
            <div className='flex justify-center items-center'>
                {category.map((article, idx) => (
                    <button
                        key={idx}
                        className='border-2 border-gray-300 text-blue-gray-600 rounded py-2 px-3 m-1 hover:bg-blue-gray-100'>
                        {article}
                    </button>
                ))}
            </div>
            <div className='flex justify-center my-4'>
                <p className='w-[400px] bg-blue-800 text-white rounded p-2 text-center'>Sale Up to 50%s</p>
            </div>
        </>
    )
}

export default NavigateButton