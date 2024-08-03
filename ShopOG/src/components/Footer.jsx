import { Typography } from "@material-tailwind/react";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../features/cart";

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full bg-white p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-around">
                <img src={logo} alt="logo-ct" className="w-20" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Cart
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center font-normal">
                <Link to='https://www.OG93.com'>
                &copy; {year} OG93
                </Link>
            </Typography>
        </footer>
    )
}

export default Footer