import React, { useState } from 'react';

import { faqData } from '../constants';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-white ">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h1>
                <div className="space-y-4 border-t-2">
                    {faqData.map((item, index) => (
                        <div key={index} className="bg-white border-b-2   overflow-hidden">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-6 "
                            >
                                <h2 className="text-lg font-medium">{item.question}</h2>
                                <svg
                                    className={`w-6 h-6 transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <div className="p-6 border-t">
                                    <p className="text-gray-600">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
