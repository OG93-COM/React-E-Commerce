import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from "../../features/cart";
import { Link } from "react-router-dom";

const Cart = ({ openModal, setOpen }) => {
    const cart = useSelector(state => state.cart.cartList)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const oneAmount = useSelector(state => state.cart.amount)
    const dispatch = useDispatch()

    return (
        <>

            <Dialog
                onClick={e => e.stopPropagation()}
                open={openModal}

                handler={() => setOpen(false)}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>🛒 Shopping Cart</DialogHeader>
                {cart?.length > 0 ? cart?.map(item => (
                    <div key={item.id}>

                        <DialogBody className="flex justify-start items-center gap-3 rounded-lg border m-1">
                            <img src={item.img} className="w-16 hover:shadow-md rounded-lg border mx-2 p-1" />
                            <div className="">
                                <p className="text-lg font-inter text-black w-40 lg:w-64">{item.name}</p>
                                <span className="mx-2 font-inter text-xs text-blue-800">Price : {item.price}$</span>
                            </div>
                            <div className="w-full flex justify-between items-center ">
                                <p className="text-xs font-inter text-black">Qty {item.amount}</p>
                                <span className="mx-2 font-inter text-base text-green-800">{item.price * item.amount}$</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:size-7 duration-300 cursor-pointer" onClick={()=> dispatch(removeFromCart(item))}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                            </div>
                        </DialogBody>
                    </div>
                )) : <DialogHeader className="text-md font-thin">No Product Selected Yet, Please add some article to the cart 🛒</DialogHeader>}

                {cart.length > 0 && <DialogFooter className="font-normal text-left text-black">Total Price : {totalPrice}$</DialogFooter>}
            </Dialog>
        </>
    )
}

export default Cart