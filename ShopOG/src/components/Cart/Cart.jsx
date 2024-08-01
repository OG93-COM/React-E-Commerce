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
    const oneAmount = useSelector(state => state.cart.amount)
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
                <DialogHeader>Shopping Cart</DialogHeader>
                {cart.length > 0 ? cart.map(item => (
                    <div key={item.id}>

                        <DialogBody className="flex justify-start items-center gap-5">
                            <img src={item.img} className="w-16 hover:shadow-md rounded-lg border mx-2 p-1" />
                            <p className="text-lg font-inter text-black">{item.name}</p>
                            <div>
                            <span className="mx-2 font-inter text-base text-blue-800">{item.price}$</span>
                            <p className="text-sm font-inter text-black">Qte {item.amount}</p>
                            </div>
                            <span className="mx-2 font-inter text-base text-blue-800">{item.price * item.amount}$</span>
                            <Button color="red" className="text-xs right-0">Remove</Button>
                        </DialogBody>
                    </div>
                )) : <DialogHeader>No Product Selected</DialogHeader>}

                {cart.length > 0 && <DialogFooter className="font-inter text-black">Total Price : {totalPrice}$</DialogFooter>}
            </Dialog>
        </>
    )
}

export default Cart