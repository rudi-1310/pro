import React from 'react'
import Nav from '../components/Nav';
import Footer from '../sections/Footer'
import con from '../assets/images/con.jpg'
import ScrollFade from '../components/ScrollFade'
import about2 from '../assets/images/about2.jpg'
import about3 from '../assets/images/about3.jpg'
import about4 from '../assets/images/about4.jpg'
import about5 from '../assets/images/about5.jpg'
export default function AboutUs() {
    return (

        <main className='relative'>
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b bg-gradient-to-t from-indigo-950 to-black ">
                <div className='w-full flex xl:flex-row flex-col justify-center items-center min-h-content gap-10 max-container  '>
                    <div className='relative xl:w-2/5 flex flex-col justify-center w-full  max-xl:padding-x pt-28'>
                        <h1 className="text-gray-400 mt-5 font-palanquin text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">Discover Our Story</h1>
                        <h1 className="text-gray-400 mt-5 font-palanquin text-2xl max-sm:text-[42px] max-sm:leading-[82px] font-bold">Crafting Extraordinary Events, Within Your Reach.</h1>

                    </div>
                </div>
            </section>
            <ScrollFade>
                <section className='card1  p-6'>

                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="md:w-1/2 p-4">
                            <img src={con} alt="helo" className="rounded-xl w-full" />
                        </div>
                        <div className="md:w-1/2 p-4">
                            <h1 className='text-6xl max-sm:text-3xl text-indigo-900 mb-4'>Our Vision</h1>
                            <h2 className="text-3xl max-sm:text-xl font-semibold text-indigo-900 mb-4">Crafting Unforgettable Events</h2>
                            <p className="text-lg text-black mb-8">
                                At Evento, our vision is to help you transform your event dreams into extraordinary realities. We believe in the power of creativity and affordability, ensuring that every event you plan, whether big or small, becomes a cherished memory for a lifetime. Join us on this journey of making remarkable events accessible to all.

                            </p>
                        </div>
                    </div>

                </section>
            </ScrollFade>
            <ScrollFade>
                <section className='card1 HeroImg  p-6 '>

                    <div className="flex flex-col md:flex-row-reverse justify-center items-center">
                        <div className="md:w-1/2 p-4">
                            <img src={about5} alt="helo" className="rounded-xl w-full" />
                        </div>
                        <div className="md:w-1/2 p-4">
                            <h1 className='text-6xl max-sm:text-3xl text-indigo-900 mb-4'>Why Choose Us</h1>
                            <h2 className="text-3xl max-sm:text-xl font-semibold text-indigo-900 mb-4">What Sets Us Apart</h2>
                            <p className="text-lg mb-8 text-black">
                                We stand out in the world of event management because we prioritize quality without compromising on your budget. Our handpicked vendors, meticulous planning tools, and a commitment to excellence ensure that your event exceeds expectations. We're here to empower you with the resources and expertise you need for event success.

                            </p>
                        </div>
                    </div>

                </section>
            </ScrollFade>

            <ScrollFade>

                <section className='card1 p-6 '>

                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="md:w-1/2 p-4">
                            <img src={about2} alt="helo" className="rounded-xl w-full" />
                        </div>
                        <div className="md:w-1/2 p-4">
                            <h1 className='text-6xl max-sm:text-3xl text-indigo-900 mb-4'>Our Team</h1>
                            <h2 className="text-3xl max-sm:text-xl font-semibold text-indigo-900 mb-4">Meet Our Passionate Team</h2>
                            <p className="text-lg mb-8 text-black">
                                At Evento, we're more than just a platform; we're a team of dedicated event enthusiasts. Our diverse backgrounds and shared passion for creating unforgettable experiences drive us forward. With expertise in event planning, design, and technology, we're here to guide you every step of the way. Meet the faces behind your event success!

                            </p>
                        </div>
                    </div>

                </section>
            </ScrollFade>
            <ScrollFade>
                <section className='HeroImg card1 p-6 '>

                    <div className="flex flex-col md:flex-row-reverse justify-center items-center">
                        <div className="md:w-1/2 p-4">
                            <img src={about3} alt="helo" className="rounded-xl w-full" />
                        </div>
                        <div className="md:w-1/2 p-4">
                            <h1 className='text-6xl max-sm:text-3xl text-indigo-900 mb-4'>Our Commitment</h1>
                            <h2 className="text-3xl max-sm:text-xl font-semibold text-indigo-900 mb-4">Committed to Your Event's Success</h2>
                            <p className="text-lg text-black mb-8">
                                At Evento, we are committed to delivering exceptional value to our clients. Our commitment extends to offering a wide range of budget-friendly options, ensuring your event receives the attention it deserves. We take pride in our dedication to making your event memorable and hassle-free, providing you with the support and resources needed to achieve your vision.
                            </p>
                        </div>
                    </div>

                </section>
            </ScrollFade>
            <ScrollFade>
                <section className="bg-indigo-950 text-white py-16">
                    <div className="container mx-auto">
                        <div className=" card p-6 rounded-lg ">
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <div className="md:w-1/2 p-4">
                                    <img src={about4} alt="helo" className="rounded-xl w-full" />
                                </div>
                                <div className="md:w-1/2 p-4">
                                    <h2 className="text-3xl text-white  font-semibold mb-4">Our Mission</h2>
                                    <p className="text-lg mb-8">
                                        Our mission is to empower event organizers with the tools and resources they need to craft remarkable events without breaking the bank. We believe that every event, no matter the budget, can be extraordinary.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollFade>
            <ScrollFade >
                <section className=' bg-black padding-x padding-t pb-8'><Footer /></section>
            </ScrollFade>
        </main>
    )
}
