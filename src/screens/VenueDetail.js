// VenueDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { PopularVenueGallery } from '../constants';
import VenueMap from '../components/VenueMap'
export default function VenueDetail() {

    const { id } = useParams(); // Get the venue ID from the URL

    const numericId = parseInt(id, 10);

    let venue = null;

    // Use a loop to find the matching venue
    for (let i = 0; i < PopularVenueGallery.length; i++) {
        if (PopularVenueGallery[i].id === numericId) {
            venue = PopularVenueGallery[i];
            break; // Exit the loop when a match is found
        }
    }


    console.log('ID from URL:', id);
    console.log('Venue:', venue);
    if (!venue) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <main className={`relative bg-cover bg-center bg-no-repeat rounded-b-[52px]`} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80')` }}>

                <section className='w-full flex xl:flex-row flex-col justify-center h-[45em]  gap-10 max-container rounded-b-md'>
                    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 '>
                        <p className='text-xl  text-white'>
                            Our Website's
                        </p>
                        <h1 className='mt-5 font-palanquin text-6xl max-sm:text-[52px] max-sm:leading-[62px] font-bold'>
                            <span className=' xl:whitespace-nowrap relative z-10 pr-10 text-white'>
                                Ultimate Wedding  <br /> Venue
                            </span>
                            <span className='text-purple-300 inline-block mt-3'>{venue.name}</span>
                        </h1>
                        <p className='font-montserrat  text-lg text-white leading-6 mt-6 mb-14 sm:max-w-sm'>
                            Our event management website is your ultimate destination for planning exceptional events on a budget.  we help you create unforgettable experiences without breaking the bank.
                            <div>
                                <StarRating rating={venue.rating} maxRating={5} />
                            </div>
                        </p>

                        <button className='bg-white rounded-full w-32 h-12'>Go back</button>
                    </div>
                </section>
            </main>
            <section className='card1 p-6 '>

                <div className="flex flex-col md:flex-row-reverse justify-center items-center">
                    <div className="md:w-1/2 p-4">
                        <VenueMap lat={venue.latitude} lon={venue.longitude} />
                    </div>
                    <div className="md:w-1/2 p-4">
                        <h1 className='text-6xl max-sm:text-3xl text-indigo-900 mb-4'>{venue.name}</h1>
                        <h2 className="text-3xl max-sm:text-xl font-semibold text-indigo-900 mb-4">{venue.subname}</h2>
                        <p className="text-lg mb-8 text-black">
                            {venue.description}
                        </p>
                    </div>
                </div>

            </section>
            <section>

            </section>
        </>
    );
}
