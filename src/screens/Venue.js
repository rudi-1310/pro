import React, { useState } from 'react'
import Nav from '../components/Nav';
import Footer from '../sections/Footer'
import StarRating from '../components/StarRating';
import ScrollFade from '../components/ScrollFade'
import { Link } from 'react-router-dom'
import { PopularVenueGallery } from '../constants/index'
export default function Venue() {
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
    return (
        <main className='relative'>
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b bg-gradient-to-t from-indigo-950 to-black ">
                <div className='w-full flex xl:flex-row flex-col justify-center items-center min-h-content gap-10 max-container  '>
                    <div className='relative xl:w-2/5 flex flex-col justify-center w-full  max-xl:padding-x pt-28'>
                        <h1 className="text-gray-400 mt-5 font-palanquin text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">Explore Our <br /> <span className='text-purple-300'>Unique Venues</span> </h1>
                        <h1 className="text-gray-400 mt-5 font-palanquin text-2xl max-sm:text-[42px] max-sm:leading-[82px] font-bold">Discover the Perfect Setting for Your Next Event</h1>

                    </div>
                </div>
            </section>
            <ScrollFade>
                <section className=''>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Venue</h2>

                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {PopularVenueGallery.filter((product) => product.id < 13).map((product) => (
                                    <div key={product.id} className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <Link to={`/venues/${product.id}`}>
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
                                                    <Link to={`/venues/${product.id}`}>{product.name}</Link>
                                                </h3>
                                                <ul className="mt-1 text-sm text-gray-500">
                                                    <li>{product.subname}</li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollFade>
            <ScrollFade>
                <section className=''>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8">
                            <h2 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900">Popular Venues In India <button className='relative text-lg' onClick={check}>{`${btn ? '(less)' : 'View All(8)'}`}</button> </h2>


                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {PopularVenueGallery.filter((product) => product.id > 12 && product.id < 17).map((product) => (
                                    <div key={product.id} className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <Link to={`/venues/${product.id}`}>
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
                                                    <Link to={`/venues/${product.id}`}>{product.name}</Link>
                                                </h3>
                                                <ul className="mt-1 text-sm text-gray-500">
                                                    <li>{product.subname}</li>
                                                    <li className=''><StarRating rating={product.rating} maxRating={5} /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollFade>
            <ScrollFade>
                <section className={`${hidden ? 'visible' : 'hidden'}`}>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-2  sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                            <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {PopularVenueGallery.filter((product) => product.id > 16 && product.id < 21).map((product) => (
                                    <div key={product.id} className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  lg:h-80">
                                            <Link to={`/venues/${product.id}`}>
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
                                                    <Link to={`/venues/${product.id}`}>{product.name}</Link>
                                                </h3>
                                                <ul className="mt-1 text-sm text-gray-500">
                                                    <li>{product.subname}</li>
                                                    <li className=''><StarRating rating={product.rating} maxRating={5} /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollFade>
            <ScrollFade>
                <section className=''>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8">
                            <h2 className="flex justify-between text-2xl font-bold tracking-tight text-gray-900 ">Popular Venues In Europe<button className='relative text-lg' onClick={check1}>{`${btn1 ? '(less)' : 'View All(8)'}`}</button> </h2>


                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {PopularVenueGallery.filter((product) => product.id > 20 && product.id < 25).map((product) => (
                                    <div key={product.id} className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <Link to={`/venues/${product.id}`}>
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
                                                    <Link to={`/venues/${product.id}`}>{product.name}</Link>
                                                </h3>
                                                <ul className="mt-1 text-sm text-gray-500">
                                                    <li>{product.subname}</li>
                                                    <li className=''><StarRating rating={product.rating} maxRating={5} /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollFade>
            <ScrollFade>
                <section className={`${hidden1 ? 'visible' : 'hidden'}`}>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-2  sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                            <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {PopularVenueGallery.filter((product) => product.id > 24).map((product) => (
                                    <div key={product.id} className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  lg:h-80">
                                            <Link to={`/venues/${product.id}`}>
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
                                                    <Link to={`/venues/${product.id}`}>{product.name}</Link>
                                                </h3>
                                                <ul className="mt-1 text-sm text-gray-500">
                                                    <li>{product.subname}</li>
                                                    <li className=''><StarRating rating={product.rating} maxRating={5} /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollFade>
            <ScrollFade>
                <section className=' bg-black padding-x padding-t pb-8'><Footer /></section>
            </ScrollFade>
        </main>
    )
}
