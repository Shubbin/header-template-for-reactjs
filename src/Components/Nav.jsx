import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import JimiLogo from "../Images/jimi_logo.png";

const Nav = () => {
    const links = [
        { name: "Home", link: "/" },
        { name: "Gallery", link: "/gallery" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(window.location.pathname); // Set initial selected state based on current path

    const toggleMenu = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <div className='shadow-md w-full fixed top-0 left-0 '>
            <div className='md:flex items-center justify-between py-1 md:px-10 px-7'>
                <div className='font-light text-small cursor-pointer flex items-center text-[#f0f0f0] font-[Poppins]'>
                    <img src={JimiLogo} alt="Jimi Logo" className="h-auto max-h-12 w-auto mr-2"  />

                </div>
                {/* Conditionally render the menu icon based on screen size */}
                <div className='md:hidden'> {/* Show only on small and medium screens */}
                    <div onClick={toggleMenu} className='text-3xl absolute right-8 top-6 cursor-pointer'>
                        {open ? <IoClose className='text-[#f0f0f0]' /> : <IoMenu className='text-[#f0f0f0]' />}
                    </div>
                </div>
                {/* Navigation links */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "hidden md:flex"}`}>
                    {links.map((link, index) => (
                        <li key={index} className='md:ml-8 text-small font-light md:my-0 my-7'>
                            <a
                                href={link.link}
                                className={`text-[#f0f0f0] md:font-light hover:text-[#f0f0f0] hover:underline duration-500 ${selected === link.link ? "underline" : ""}`}
                                onClick={() => { setSelected(link.link); closeMenu(); }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Nav;
