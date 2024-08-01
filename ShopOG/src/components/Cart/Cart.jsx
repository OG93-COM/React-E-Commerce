import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from 'react-redux'

const Cart = ({ openModal, setOpen }) => {
    const cart = useSelector(state => state.cart.cartList)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    console.log(cart)
    console.log(totalAmount)
    console.log(totalPrice)
    console.log(cart)

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
                {cart.length > 0 ? cart.map(item => (
                    <div key={item.id}>
                        <DialogHeader>
                            <img src={item.img} className="w-16 hover:shadow-md rounded-lg border mx-2 p-1" />
                            {item.name}
                            <span className="mx-2 font-inter text-base text-blue-800">{item.price}$</span>
                        </DialogHeader>
                        {/* <DialogBody>{item.price}</DialogBody> */}
                    </div>
                )) : <DialogHeader>No Product Selected</DialogHeader>}

                {cart.length > 0 && <DialogFooter className="font-inter text-black">Total Price : {totalPrice}$</DialogFooter>}
            </Dialog>
        </>
    )
}

export default Cart