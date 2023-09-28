import React, { useState } from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
export default function Nav() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex text-gray-400 text-2xl justify-between items-center max-container'>
                <div className='text-purple-300'>
                    Evento
                </div>
                <ul className='flex-1 flex justify-center items-center gap-12 max-lg:hidden'>
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <Link to={item.href}
                                    className='leading-normal text-lg text-gray-400 '>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div onClick={handleNav} className='block lg:hidden '>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={nav ? 'lg:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black z-10 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-purple-300 m-4'>Evento</h1>
                    {
                        navLinks.map((item) => (
                            <li key={item.label} className='p-4 border-b border-gray-600'>
                                <Link to={item.href}
                                >{item.label}</Link>
                            </li>
                        ))
                    }

                </ul>
                <ul className='flex justify-center items-center gap-6 max-lg:hidden'>
                    <li className='leading-normal text-lg text-gray-400'>
                        <Link to='/'><AiOutlineLogout size={20} /></Link>
                    </li>

                </ul>

            </nav>
        </div>
    )
}
