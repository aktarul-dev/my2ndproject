import React from 'react'
import { Link } from 'react-router'
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const RegisterPage = () => {
    return (
        <div className='min-h-screen bg-gray-600 flex items-center justify-center px-4'>
            <div className='bg-white p-4 rounded-xl max-w-[400px] shadow-md w-full space-y-2  pb-6 mx-4'>
                <h1 className='font-bold text-md text-center '>Register Now</h1>


                {/* Email section */}
                <form className='space-y-4'>
                    <div>
                        <label className='inline-block text-base font-semibold text-gray-800 '>Email:</label>
                        <input type="email" placeholder='Write your e-mail' className={`w-full px-4 py-1.5 
                        focus:outline-none focus:ring-2 ring-blue-500 border rounded-md`} />
                    </div>
                    <div>
                        <label className='inline-block text-base font-semibold text-gray-800 '>passward:</label>
                        <input type="email" placeholder='Write your Password' className={`w-full px-4 py-1.5 
                        focus:outline-none focus:ring-2 ring-blue-500 border rounded-md text-sm `} />
                    </div>

                    {/* button section */}
                    <button className='bg-blue-600 w-full px-4 py-1.5 rounded-md text-white font-normal
                    hover:bg-blue-700 transition mt-2'>
                        Sign up
                    </button>
                </form>

                {/* social login */}
                <h1 className='text-black text-sm text-center mt-4'>Or-Sign up with</h1>
                <section className='flex items-center gap-2 mt-6 cursor-pointer'>
                    <button className='cursor-pointer hover:text-white hover:bg-gray-600 transition w-full bg-white px-4 py-2 rounded text-base font-semibold text-black opacity-70 shadow-xl border border-blue-400 hover:border-none'>
                        <span className='flex items-center justify-center gap-1'>
                            <FaGoogle className='text-blue-600 text-xl' />
                            Google
                        </span>
                    </button>
                    <button className=' cursor-pointer cursor-pointer hover:text-white hover:bg-gray-600 transition w-full bg-white px-4 py-2 rounded text-base font-semibold text-black opacity-70 shadow-xl border border-blue-400 hover:border-none'>
                        <span className='flex items-center justify-center gap-1'>
                            <FaSquareGithub className='text-blue-600 text-xl' />
                            GitHub
                        </span>
                    </button>
                    <button className='cursor-pointer hover:text-white hover:bg-gray-600 transition w-full bg-white px-4 py-2 rounded text-base font-semibold text-black opacity-70 shadow-xl border border-blue-400 hover:border-none'>
                        <span className='flex items-center justify-center gap-1'>
                            <FaFacebookSquare className='text-blue-800 text-xl' />
                            Facebook
                        </span>
                    </button>
                </section>

                <p className='p-2 text-center font-semibold'>Have an account? <Link className='text-blue-600
                hover:underline transition ' to='/logIN'> Please LogIn</Link></p>

            </div>
        </div>
    )
}

export default RegisterPage

