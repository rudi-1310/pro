import React from 'react'
import HeroImg from "../assets/images/HeroImg.png";
import CountUp from "react-countup";

export default function Hero() {
    return (
        <div className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  '>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
                <p className='text-xl  text-white'>
                    Our Website  is
                </p>
                <h1 className='mt-5 font-palanquin text-6xl max-sm:text-[52px] max-sm:leading-[62px] font-bold'>
                    <span className=' xl:whitespace-nowrap relative z-10 pr-10 text-white'>
                        Ultimate Platform  <br /> for Planning and
                    </span>
                    <span className='text-purple-300 inline-block mt-3'>Promoting events</span>
                </h1>
                <p className='font-montserrat text-gray-400 text-lg leading-6 mt-6 mb-14 sm:max-w-sm'>
                    Our event management website is your ultimate destination for planning exceptional events on a budget.  we help you create unforgettable experiences without breaking the bank.

                </p>
                <div className='flex justify-start items-start flex-wrap w-full mt-2 gap-16'>
                    <div >
                        <p className='text-4xl font-bold text-gray-300'><CountUp start={9500} end={10000} duration={4} /><span >+</span></p>
                        <p className='leading-7 font-montserrat text-gray-400'>
                            Reviews
                        </p>
                    </div>
                    <div >
                        <p className='text-4xl font-bold text-gray-300'><CountUp start={8500} end={9000} duration={4} /><span>+</span></p>
                        <p className='leading-7 font-montserrat text-gray-400'>
                            Events
                        </p>
                    </div>
                    <div >
                        <p className='text-4xl font-bold text-gray-300'><CountUp start={1900} end={2000} duration={4} /><span>+</span></p>
                        <p className='leading-7 font-montserrat text-gray-400'>
                            Customers
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center blurred-bottom mt-10 max-sm:hidden '>
                <img
                    src={HeroImg}
                    alt='shoe colletion'
                    width={450}
                    height={300}
                    className='object-contain relative z-10  opacity-80'
                />
            </div>
        </div>
    )
}
