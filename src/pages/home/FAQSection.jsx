import React, { useState } from 'react'
import HeadingSection from '../../components/HeadingSection'

const FAQSection = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    const Faqs = [
        {
            id: 1,
            question: "What is Tripco?",
            answer: "Tripco is a travel booking platform that helps you find and book amazing experiences around the world."
        },
        {
            id: 2,
            question: "What is Tripco?",
            answer: "Tripco is a travel booking platform that helps you find and book amazing experiences around the world."
        },
        {
            id: 3,
            question: "What is Tripco?",
            answer: "Tripco is a travel booking platform that helps you find and book amazing experiences around the world."
        },
        {
            id: 4,
            question: "What is Tripco?",
            answer: "Tripco is a travel booking platform that helps you find and book amazing experiences around the world."
        },
    ]
    return (
        <section className='max-w-3xl px-4 py-20 mx-auto'>
            {/* heading section */}

            < HeadingSection heading="Frequently Asked Quesiton" subheading="faqas" />

            {/* content section */}
            <div className='space-y-4'>
                {
                    Faqs.map((faq, index) => (
                        <div key={faq.id} onClick={() => toggleFAQ(index)} className='bg-white border border-gray-200 p-4 shadow-sm rounded transition-all duration-300 '>
                            <div className='flex flex-row justify-between'>
                                <h1 className='text-base text-blue-500 font-semibold cursor-pointer'>{faq.question}</h1>
                                <span className='text-xl font-bold cursor-pointer'>{activeIndex === index ? "-" : "+"}</span>
                            </div>

                            {activeIndex === index && (
                                <p className='text-gray-600 mt-4'>
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default FAQSection