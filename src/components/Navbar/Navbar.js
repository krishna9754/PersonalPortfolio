import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Social from './socialmedia/Social';

function NavbarTop() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='App shadow-md shadow-blue-50'>
            <nav className=' bg-gray-800'>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <RxCross2 className="text-white" /> : <GiHamburgerMenu className="text-white" />}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center md:justify-between justify-center sm:items-stretch">
                            <div className="flex flex-shrink-0 items-center">
                                <h1 className='text-white text-4xl font-serif px-2'>Krishna</h1>
                            </div>
                            <div className='hidden sm:ml-6 sm:block'>
                                <Social />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Skills</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`sm:hidden ${isMenuOpen ? 'open' : ''}`} id="mobile-menu">
                    <Social />
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Skills</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarTop;
