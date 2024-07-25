import logo from '../../assets/logo.png'

const Nav = () => {
    return (
        <>
            <div className='w-full bg-black text-white text-center p-2 font-extralight'>Welcome To ShopOG</div>
            <div className=' py-2 px-4 flex justify-around items-center my-1'>
                <div>
                    <img src={logo} className='w-[100px]' />
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <button>Logout</button>
                    </div>
                    <div className='flex flex-row justify-center cursor-pointer ml-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000000" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </div>
                    <div className='flex flex-row justify-center cursor-pointer ml-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>
                </div>

            </div>
            <div className='w-full bg-black text-white text-center p-2 font-thin flex justify-around'>
                <p>Today 50% Sold!</p>
                <p>Free Shpping and Returns</p>
                <p>Payements Methods</p>
            </div>
        </>
    )
}

export default Nav