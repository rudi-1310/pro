import React from 'react'
import Nav from '../components/Nav';
import ScrollFade from '../components/ScrollFade'
import { About, Footer, Blog, Gallery, PopularVenue, Hero, FAQ } from '../sections'
export default function Main() {
    return (
        <main className='relative'>
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b bg-gradient-to-t from-indigo-950 to-black " >
                <Hero />
            </section>
            <ScrollFade>
                <section id='About' className="padding " >
                    <About />
                </section>
            </ScrollFade>
            <ScrollFade>
                <section id='gallery' className="padding bg-indigo-950" >
                    <Gallery />
                </section>
            </ScrollFade>
            <ScrollFade>
                <section id='blog' className="padding">
                    <Blog />
                </section>
            </ScrollFade>
            <ScrollFade>
                <section id='venue' className="padding bg-indigo-950">
                    <PopularVenue />
                </section>
            </ScrollFade>
            <ScrollFade>
                <section id='FAQ' className="padding">
                    <FAQ />
                </section>
            </ScrollFade>
            <ScrollFade>
                <section className=" bg-black padding-x padding-t pb-8">
                    <Footer />
                </section>
            </ScrollFade>
        </main>
    )
}
