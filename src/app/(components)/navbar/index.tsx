"use client"
import Link from "next/link";
import { FC, useState } from "react";
import ButtonText from "../button-text";
import Modal from "../modal/modal";
import ModalRegister from "../modal/modal-regis";

interface NavbarProps {
    menuList: any
}
 
const Navbar: FC<NavbarProps> = () => {

    const [click, setClick] = useState(false)
    return (  
        <>
            <ModalRegister show={click} close={() => setClick(prevState => !prevState)} />
            
            <nav className="content flex md:flex-row flex-col items-end md:justify-between md:items-center">

                {/* nav link */}
                <ul className="hidden list-none font-semibold text-[--color] text-center items-center md:flex gap-x-8">
                    <li className="text-3xl mr-16 hidden xl:block">
                        <Link href={'/'}>
                            Setyawan Blog
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/blog'}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about'}>
                            About
                        </Link>
                    </li>
                </ul>

                {/* button auth */}
                <div className="hidden md:flex gap-x-5 items-center">
                    <ButtonText to="/">
                        Log In
                    </ButtonText>
                    <button onClick={() => setClick(prevState => !prevState)} className="font-semibold text-white bg-black hover:bg-transparent hover:text-black transition-all duration-700 px-6 py-2 rounded-full">
                        Sign Up
                    </button>
                </div>
                <div className="md:hidden block space-y-2 cursor-pointer">
                    <span className="h-1 w-10 bg-black rounded-full block"></span>
                    <span className="h-1 w-10 bg-black rounded-full block"></span>
                    <span className="h-1 w-10 bg-black rounded-full block"></span>
                </div>
            </nav>
            
        </>
    );
}
 
export default Navbar;