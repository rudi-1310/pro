import Nav from "../components/Nav"
import Contact from '../assets/images/Contact.jpg'
import { Footer } from "../sections"
export default function Example() {
    return (
        <main className="relative">
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b bg-gradient-to-t from-indigo-950 to-black ">
                <div className='w-full flex xl:flex-row flex-col justify-center items-center min-h-content gap-10 max-container  '>
                    <div className='relative xl:w-2/5 flex flex-col justify-center w-full  max-xl:padding-x pt-28'>
                        <h1 className="text-gray-400 mt-5 font-palanquin text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">Let's Get in Touch</h1>
                        <h1 className="text-gray-400 mt-5 font-palanquin text-2xl max-sm:text-[42px] max-sm:leading-[82px] font-bold">We're here to answer your questions and assist you every step of the way.</h1>

                    </div>
                </div>
            </section>
            <section className=" relative padding flex xl:flex-row flex-col ">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678]  max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className=" bg-white px-2 mx-6   sm:py-32 lg:px-8">

                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Please provide the following details to get in touch with us. We look forward to hearing from you!
                        </p>
                    </div>
                    <form action="#" method="POST" className=" mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Phone number
                                </label>
                                <div className="relative mt-2.5">

                                    <input
                                        type="number"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-2 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>
                <div className="relative text-gray-600  rounded-lg flex-1 flex flex-col  items-start ">
                    <h1 className="text-3xl mt-28 max-sm:text-[32px] max-sm:leading-[52px] font-bold items-center">Vendors</h1>
                    <p className="py-4  flex justify-start items-start">If you are a registered vendor or a business looking to promote your brand on our portal, please send in your queries at vendors@comany.com
                    </p>
                    <h1 className="text-3xl py-2 max-sm:text-[32px] max-sm:leading-[52px] font-bold items-center">Marketing Collaborations</h1>
                    <p className=" py-4 flex justify-start items-start ">For brand collaborations - sponsored content, social media activations etc., please write into partnerships@comany.com
                    </p>
                    <h1 className="text-3xl py-2 max-sm:text-[32px] max-sm:leading-[52px] font-bold items-center">Wedding Submissions
                    </h1>
                    <p className="py-4 flex justify-start items-start  ">
                        Evnto features wedding across cultures, styles and budgets. To submit your wedding, kindly email us 15-20 photos at submissions@comany.com

                    </p>
                    <h1 className="text-3xl py-2 max-sm:text-[32px] max-sm:leading-[52px] font-bold items-center">Careers
                    </h1><p className="py-4 flex justify-start items-start">We are a team of passionate young minds looking to reinvent the wedding space. Please check our careers page for current openings and email us at hr@comany.com
                    </p>
                    <h1 className="text-3xl py-2 max-sm:text-[32px] max-sm:leading-[52px] font-bold items-center">Customers</h1>
                    <p className="py-4 flex justify-start items-start">We love to hear from our precious users. For any feedback or queries simply write in to info@comany.com</p>
                </div>
            </section>
            <section className="bg-indigo-950 text-white py-16">
                <div className="container mx-auto">
                    <div className=" card p-6 rounded-lg ">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div className="md:w-1/2 p-4">
                                <img src={Contact} alt="helo" className="w-full" />
                            </div>
                            <div className="md:w-1/2 p-4">
                                <h2 className="text-3xl font-semibold mb-4">Contact Us Today</h2>
                                <p className="text-lg mb-8">
                                    We greatly appreciate hearing from you. Welcome any feedback, questions or opportunities, for collaboration. Please don't hesitate to reach out to us at your convenience. Our team is committed to providing assistance with any queries or requests you may have. Whether you're interested in our offerings need help, with our services or have inquiries we're here to support you. Feel free to contact us using the provided information. We'll make every effort to respond quickly as possible.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-black padding-x padding-t pb-8">
                <Footer />
            </section>
        </main>
    )
}
