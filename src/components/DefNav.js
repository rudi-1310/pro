import React from 'react'
import { DefnavLinks } from '../constants'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <div className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex text-gray-400 text-2xl justify-between items-center max-container'>
                <Link to='/'>
                    {/* <img src="" alt="" width={129} height={29} className='m-0 w-[129px] h-[29px]' /> */}
                    Event
                </Link>
                <ul className='flex-1 flex justify-center items-center gap-12 max-sm:hidden'>
                    {
                        DefnavLinks.map((item) => (
                            <li key={item.label}>
                                <Link to={item.href}
                                    className='leading-normal text-lg text-gray-400 '>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
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
