import React from 'react'
import { Link } from 'react-router-dom'
export default function JoinUs() {
    return (
        <div>
            <div class="bg-white py-2 HeroImg sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class=" mx-auto max-w-2xl lg:mx-0">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                        <p class="mt-2 text-lg leading-8 text-gray-600">Explore our insightful blog for expert event planning tips, creative ideas, and industry trends. Unlock the secrets to crafting remarkable events that leave a lasting impression.</p>
                    </div>
                    <div class=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <article class="flex max-w-xl flex-col items-start justify-between">
                            <div class="flex items-center gap-x-4 text-xs">
                                <time datetime="2020-03-16" class="text-gray-500">Oct 18, 2022</time>
                                <Link to="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</Link>
                            </div>
                            <div class="group relative">
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link to="#">
                                        <span class="absolute inset-0"></span>
                                        Eventful Insights: Your Guide to Budget-Friendly Extravagance
                                    </Link>
                                </h3>
                                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Discover a treasure trove of event planning wisdom in our blog. From clever cost-saving strategies to design inspirations, delve into a world where creativity meets affordability to create extraordinary events.</p>
                            </div>
                            <div class="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                                <div class="text-sm leading-6">
                                    <p class="font-semibold text-gray-900">
                                        <Link to="#">
                                            <span class="absolute inset-0"></span>
                                            Michael Foster
                                        </Link>
                                    </p>
                                    <p class="text-gray-600">Co-Founder / CTO</p>
                                </div>
                            </div>
                        </article>
                        <article class="flex max-w-xl flex-col items-start justify-between">
                            <div class="flex items-center gap-x-4 text-xs">
                                <time datetime="2020-03-16" class="text-gray-500">Nov 30, 2019</time>
                                <Link to="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</Link>
                            </div>
                            <div class="group relative">
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link to="#">
                                        <span class="absolute inset-0"></span>
                                        Bridging Dreams and Budgets: Event Planning Unveiled
                                    </Link>
                                </h3>
                                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Dive into our blog's treasure trove of event planning tips and inspiration. Uncover the art of crafting spectacular events without compromising on your financial goals.</p>
                            </div>
                            <div class="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                                <div class="text-sm leading-6">
                                    <p class="font-semibold text-gray-900">
                                        <Link to="#">
                                            <span class="absolute inset-0"></span>
                                            Harvey Spector
                                        </Link>
                                    </p>
                                    <p class="text-gray-600">Co-Founder / HFO</p>
                                </div>
                            </div>
                        </article>
                        <article class="flex max-w-xl flex-col items-start justify-between">
                            <div class="flex items-center gap-x-4 text-xs">
                                <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
                                <Link to="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</Link>
                            </div>
                            <div class="group relative">
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link to="#">
                                        <span class="absolute inset-0"></span>
                                        Elevate Every Occasion: The Event Enthusiast's Corner
                                    </Link>
                                </h3>
                                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Explore our blog and uncover the secrets of turning ordinary events into extraordinary memories. From insider insights to imaginative ideas, get ready to transform your gatherings on any budget."</p>
                            </div>
                            <div class="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                                <div class="text-sm leading-6">
                                    <p class="font-semibold text-gray-900">
                                        <Link to="#">
                                            <span class="absolute inset-0"></span>
                                            Mike Ross
                                        </Link>
                                    </p>
                                    <p class="text-gray-600">Co-Founder / CTO</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </div>
    )
}
