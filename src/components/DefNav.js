import React from 'react'
import { Link } from 'react-router-dom'
import evento from '../assets/icons/evento.png'
export default function Nav() {
    return (
        <div className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex text-gray-400 text-2xl justify-between items-center max-container'>

                <div className='text-purple-300 flex flex-row justify-center items-center gap-4'>
                    <img src={evento} alt="" width={10} height={10} className='m-0 w-[50px] h-[50px]' />
                    Evento
                </div>

                <ul className='flex justify-center items-center gap-6 max-md:hidden'>
                    <li className='leading-normal text-lg text-gray-400'>
                        <Link to='/signin'>SignIn</Link>
                    </li>
                    <li className='leading-normal text-lg text-gray-400'>
                        <Link to='/signup'>SignUp</Link></li>
                </ul>

            </nav>
        </div>
    )
}
