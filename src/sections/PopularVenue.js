// PopularVenue.js
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating'; // Import your StarRating component
import { PopularVenueGallery } from '../constants'; // Import your venue data

export default function PopularVenue() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Venue</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {PopularVenueGallery.filter((venue) => venue.id < 5).map((venue) => (
                        <div key={venue.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <Link to={`/venues/${venue.id}`}>
                                    <img
                                        src={venue.imageSrc}
                                        alt={venue.imageAlt}
                                        className="h-full img1 w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </Link>
                            </div>
                            <div className="mt-4 flex justify-center items-center">
                                <div>
                                    <h3 className="text-lg text-gray-700">
                                        <Link to={`/venues/${venue.id}`}>{venue.name}</Link>
                                    </h3>
                                    <ul className="mt-1 text-sm text-gray-500">
                                        <li><StarRating rating={venue.rating} maxRating={5} /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
