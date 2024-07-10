import React, { useState } from 'react';
import { IoLogoIonic, IoMenu, IoClose } from 'react-icons/io5';
import Button from './Button';

export default function Nav() {
    let links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "CONTACT", link: "/" },
        { name: "FAQ", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    let [selected, setSelected] = useState("");

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <IoLogoIonic />
                    </span>
                    Designer
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <IoClose /> : <IoMenu />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px] opacity-0"}`}>
                    {links.map((link, index) => (
                        <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
                            <a
                                href={link.link}
                                className={`text-gray-800 hover:text-gray-400 duration-500 ${selected === link.name ? "underline-thick" : ""}`}
                                onClick={() => setSelected(link.name)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Button className=''>
                            Get started
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

// Add the following styles in your global CSS or inside a <style> tag
<style>
{`
  .underline-thick {
    position: relative;
  }
  .underline-thick::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 4px;
    width: 100%;
    background-color: #4F46E5; /* Customize the color as needed */
    border-radius: 2px;
  }
`}
</style>
