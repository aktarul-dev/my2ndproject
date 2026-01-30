import React from 'react'
import HeadingSection from '../../components/HeadingSection'


const NewsLatterSection = () => {
    return (
        <div>

            {/* HeadingSection */}
            <div className='bg-gray-100 pt-12'>
                <div>
                    < HeadingSection heading="Stay Updated with our Newslatter" subheading="" description="At first take my respect 
                    from my heart. I wish that you are well. I am fine too. what do you want to know. I am web developer I Need a job 
                    but i am nothink expart, i hope i will done all work smoothly 
                     newsletter to get the latest news " />
                </div>

                {/* buttonSection */}
                <div className='text-center space-x-8 pb-6'>
                    <button className='cursor-pointer bg-blue-600 py-3 px-6 rounded-xl hover:bg-blue-800 transition '>
                        <span className='text-base text-white font-semibold'>Subscribe Now</span>
                    </button>
                    <button className='cursor-pointer hover:bg-blue-600 transition hover:text-white bg-white py-3 px-6 border border-gray-300 rounded-xl text-blue-600 font-semibold'>
                        <span>Learn More</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsLatterSection