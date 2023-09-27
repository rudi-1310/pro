import React, { useState } from 'react'
import { useNavigate, Link, useLocation } from "react-router-dom"
export default function Verify() {
    const navigate = useNavigate();
    const location = useLocation()
    const random = location.state && location.state.id
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState()

    async function submit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            const randomNumber = random.toString()
            if (randomNumber === code) {
                NavigateHome()
            }
            else {
                alert(random)
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred in verification code. Please try again.");
        }

    }
    const NavigateHome = () => {
        navigate("/home", { state: { id: true } });
    }
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Enter your Verification code
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Verification Code
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setCode(e.target.value)}
                                    id="number"
                                    name="code"
                                    type="number"
                                    required
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={submit}
                                disabled={loading}
                            >
                                {loading ? "Signing in..." : "Sign in"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Didnt get code?{' '}
                        <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Click here to go to home
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
