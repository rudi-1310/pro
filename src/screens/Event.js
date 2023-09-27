import React, { useState } from 'react'
import Nav from '../components/Nav';
import Footer from '../sections/Footer'
import { Link } from 'react-router-dom'
import { EventGallery } from '../constants/index'
import { EventGallery1 } from '../constants/index'
import { EventGallery2 } from '../constants/index'
import { EventGallery3 } from '../constants/index'
import { EventGallery4 } from '../constants/index'
import { EventInfo } from '../constants/index'
import { EventInfo2 } from '../constants/index'
import { EventInfo3 } from '../constants/index'
import { EventInfo4 } from '../constants/index'
import StarRating from '../components/StarRating';
export default function Event() {
    const [hidden, setHidden] = useState(false)
    const [btn, setBtn] = useState(false)
    const [btn1, setBtn1] = useState(false)
    const [hidden1, setHidden1] = useState(false)
    const check = () => {
        if (hidden === false) {
            setHidden(true)
            setBtn(true)
        }
        else {
            setHidden(false)
            setBtn(false)
        }
    }
    const check1 = () => {
        if (hidden1 === false) {
            setHidden1(true)
            setBtn1(true)
        }
        else {
            setHidden1(false)
            setBtn1(false)
        }
    }
    const [activeContainer, setActiveContainer] = useState(null);

    const handleContainerClick = (containerId) => {
        setActiveContainer(containerId);
    };
    const [location, setLocation] = useState('');

    const filteredEvents = EventInfo.filter(event => {

        return event.location.toLowerCase().includes(location.toLowerCase());
    });
    const filteredEvents2 = EventInfo2.filter(event => {
        return event.location.toLowerCase().includes(location.toLowerCase());
    });
    const filteredEvents3 = EventInfo3.filter(event => {
        return event.location.toLowerCase().includes(location.toLowerCase());
    });
    const filteredEvents4 = EventInfo4.filter(event => {
        return event.location.toLowerCase().includes(location.toLowerCase());
    });

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    return (
        <main className='relative'>
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b bg-gradient-to-t from-indigo-950 to-black ">
                <div className='w-full flex xl:flex-row flex-col justify-center items-center min-h-content gap-10 max-container  '>
                    <div className='relative xl:w-2/5 flex flex-col justify-center w-full  max-xl:padding-x pt-28'>
                        <h1 className="text-gray-400 mt-5 font-palanquin text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">Meet Our
                            <br /><span className='text-purple-300'>Event Partners</span> </h1>
                        <h1 className="text-gray-400 mt-5 font-palanquin text-2xl max-sm:text-[42px] max-sm:leading-[82px] font-bold">Turning Your Vision into Reality with Expert Vendors and Services</h1>

                    </div>
                </div>
            </section>
            <section className=''>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Suppliers Category</h2>


                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {EventGallery.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-auto w-full overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-72">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full img1 w-full object-cover object-center lg:h-full lg:w-full"

                                        />
                                    </div>
                                    <div className="mt-4 flex  justify-center items-center">
                                        <div>
                                            <h3 className="text-lg  text-gray-700">
                                                <a href={product.href}
                                                    onClick={() => handleContainerClick(product.click)}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}

                                                </a>
                                            </h3>
                                            <ul className="mt-1 text-sm text-gray-500">
                                                <li>{product.subname}</li>
                                                <li>{product.rating}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={activeContainer === 'wedding' ? '' : 'hidden'} id='wedding'>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8">
                        <h2 className="flex justify-between text-2xl font-bold tracking-tight max-sm:flex-col text-gray-900">Top Wedding Organizers
                            <input
                                type="text"
                                className='relative block w-13 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2 max-sm:w-13'
                                placeholder="Enter location"
                                value={location}
                                onChange={handleLocationChange}
                            /></h2>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {filteredEvents.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full img1 w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex  justify-start">
                                        <div >
                                            <h3 className="text-lg  text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <ul className="mt-1  text-sm text-gray-500">

                                                <li><StarRating rating={product.rating} maxRating={5} /></li>
                                                <li>{product.location}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={activeContainer === 'party' ? '' : 'hidden'} id='seminars'>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8">
                        <h2 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900 max-sm:flex-col">Top Private Party Organizers <input
                            type="text"
                            className='relative block w-13 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            placeholder="Enter location"
                            value={location}
                            onChange={handleLocationChange}
                        /></h2>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {filteredEvents2.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full img1 object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex  justify-start">
                                        <div>
                                            <h3 className="text-lg  text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <ul className="mt-1 text-sm text-gray-500">

                                                <li><StarRating rating={2} maxRating={5} /></li>
                                                <li>{product.location}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={activeContainer === 'seminars' ? '' : 'hidden'} id='party'>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8">
                        <h2 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900 max-sm:flex-col">Top Seminar Organizers <input
                            type="text"
                            className='relative block w-13 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            placeholder="Enter location"
                            value={location}
                            onChange={handleLocationChange}
                        /></h2>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {filteredEvents3.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex  justify-start">
                                        <div>
                                            <h3 className="text-lg  text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <ul className="mt-1 text-sm text-gray-500">

                                                <li><StarRating rating={product.rating} maxRating={5} /></li>
                                                <li>{product.location}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={activeContainer === 'corporate' ? '' : 'hidden'} id='corporate'>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8">
                        <h2 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900 max-sm:flex-col">Top Corporate party Organizers<input
                            type="text"
                            className='relative block w-13 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            placeholder="Enter location"
                            value={location}
                            onChange={handleLocationChange}
                        /> </h2>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {filteredEvents4.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex  justify-start">
                                        <div>
                                            <h3 className="text-lg  text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <ul className="mt-1 text-sm text-gray-500">

                                                <li><StarRating rating={product.rating} maxRating={5} /></li>
                                                <li>{product.location}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className=''>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8">
                        <h2 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900">Popular Photographers/ Videographers <button className='relative text-lg' onClick={check}>{`${btn ? '(less)' : 'View All(8)'}`}</button> </h2>


                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {EventGallery1.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <Link to='#'>
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full img1 w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-4 flex  justify-center items-center">
                                        <div>
                                            <h3 className="text-lg  text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <ul className="mt-1 text-sm text-gray-500">
                                                <li>{product.subname}</li>
                                                <li>{product.rating}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${hidden ? 'visible' : 'hidden'}`}>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-2  sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {EventGallery2.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex  justify-center items-center">
                                        <div>
                                            <h3 className="text-lg  text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <ul className="mt-1 text-sm text-gray-500">
                                                <li>{product.subname}</li>
                                                <li>{product.rating}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className=''>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8">
                        <h2 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900 ">Trending Choreographers<button className='relative text-lg' onClick={check1}>{`${btn1 ? '(less)' : 'View All(8)'}`}</button> </h2>


                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {EventGallery3.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex  justify-center items-center">
                                        <div>
                                            <h3 className="text-lg  text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <ul className="mt-1 text-sm text-gray-500">
                                                <li>{product.subname}</li>
                                                <li>{product.rating}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${hidden1 ? 'visible' : 'hidden'}`}>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-2  sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {EventGallery4.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex  justify-center items-center">
                                        <div>
                                            <h3 className="text-lg  text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <ul className="mt-1 text-sm text-gray-500">
                                                <li>{product.subname}</li>
                                                <li>{product.rating}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className=' bg-black padding-x padding-t pb-8'><Footer /></section>
        </main>
    )
}
