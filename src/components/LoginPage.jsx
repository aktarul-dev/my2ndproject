import React from 'react'
import { IoLogoGoogle } from "react-icons/io";
import { FaGitSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";


const LoginPage = () => {
    const buttons = [
        {
            id: 1,
            title: "Google",
            Icon: IoLogoGoogle,
        },
        {
            id: 2,
            title: "Github",
            Icon: FaGitSquare,
        },
        {
            id: 3,
            title: "Facebook",
            Icon: IoLogoFacebook,
        },
    ]
    return (
        <div className='min-h-screen bg-gray-600 flex items-center justify-center shadow-lg '>
            <div className='bg-white max-w-[400px] p-4  w-full rounded-xl'>
                <h1 className='text-center font-bold text-md mb-3'>Login Now</h1>

                {/* From section */}
                <form className='space-y-4'>
                    <div>
                        <label className='inline-block text-gray-800 font-semibold'>Email:</label>
                        <input type="email" placeholder='write your email' className={`
                             w-full px-4 py-1.5 rounded-md focus:outline-none focus:ring-1 text-sm`} />

                    </div>
                    <div>
                        <label className='text-black text-gray-800 font-semibold'>Password</label>
                        <input type="password" placeholder='write your password' className={`
                            text-sm focus:ring-none focus:ring-1 rounded-md w-full px-4 py-1.5 `} />
                    </div>

                    <button className='bg-blue-600 hover:bg-blue-700 transition px-2 py-1.5 w-full rounded-md text-white mt-2'>
                        Login
                    </button>
                    <p className='text-center'>or Log-in with</p>

                    {/* socal Icon */}
                    <div className='flex gap-2'>
                        {
                            buttons.map((btn, index) => (
                                <button key={btn.id} className='flex gap-1 items-center justify-center px-4 py-2 mx-auto border border-blue-600
                                rounded shadow-xl text-sm hover:bg-gray-600 transition cursor-pointer duration-300 hover:text-white'>
                                    <btn.Icon size={20} className='text-blue-600 text-xl' />
                                    {btn.title}
                                </button>
                            ))
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage












// import React from 'react'
// import { Link } from 'react-router'
// import { FaGoogle } from "react-Icons/fa6";
// import { FaFacebookSquare } from "react-Icons/fa";
// import { FaSquareGithub } from "react-Icons/fa6";

// const RegisterPage = () => {
//     return (
//         <div className='min-h-screen bg-gray-600 flex items-center justify-center px-4'>
//             <div className='bg-white p-4 rounded-xl max-w-[400px] shadow-md w-full space-y-2  pb-6 '>
//                 <h1 className='font-bold text-md text-center '>Register Now</h1>


//                 {/* Email section */}
//                 <form className='space-y-4'>
//                     <div>
//                         <label className='inline-block text-base font-semibold text-gray-800 '>Email:</label>
//                         <input type="email" placeholder='Write your e-mail' className={`w-full px-4 py-1.5
//                         focus:outline-none focus:ring-2 ring-blue-500 border rounded-md`} />
//                     </div>
//                     <div>
//                         <label className='inline-block text-base font-semibold text-gray-800 '>passward:</label>
//                         <input type="email" placeholder='Write your Password' className={`w-full px-4 py-1.5
//                         focus:outline-none focus:ring-2 ring-blue-500 border rounded-md text-sm `} />
//                     </div>

//                     {/* button section */}
//                     <button className='bg-blue-600 w-full px-4 py-1.5 rounded-md text-white font-normal
//                     hover:bg-blue-700 transition mt-2'>
//                         Sign up
//                     </button>
//                 </form>

//                 {/* social login */}
//                 <h1 className='text-black text-sm text-center mt-4'>Or-Sign up with</h1>
//                 <section className='flex items-center gap-2 mt-6 cursor-pointer'>
//                     <button className='cursor-pointer hover:text-white hover:bg-gray-600 transition w-full bg-white px-4 py-2 rounded text-base font-semibold text-black opacity-70 shadow-xl border border-blue-400 hover:border-none'>
//                         <span className='flex items-center justify-center gap-1'>
//                             <FaGoogle className='text-blue-600 text-xl' />
//                             Google
//                         </span>
//                     </button>
//                     <button className=' cursor-pointer cursor-pointer hover:text-white hover:bg-gray-600 transition w-full bg-white px-4 py-2 rounded text-base font-semibold text-black opacity-70 shadow-xl border border-blue-400 hover:border-none'>
//                         <span className='flex items-center justify-center gap-1'>
//                             <FaSquareGithub className='text-blue-600 text-xl' />
//                             GitHub
//                         </span>
//                     </button>
//                     <button className='cursor-pointer hover:text-white hover:bg-gray-600 transition w-full bg-white px-4 py-2 rounded text-base font-semibold text-black opacity-70 shadow-xl border border-blue-400 hover:border-none'>
//                         <span className='flex items-center justify-center gap-1'>
//                             <FaFacebookSquare className='text-blue-800 text-xl' />
//                             Facebook
//                         </span>
//                     </button>
//                 </section>

//                 <p className='p-2 text-center font-semibold'>Have an account? <Link className='text-blue-600
//                 hover:underline transition ' to='/logIN'> Please LogIn</Link></p>

//             </div>
//         </div>
//     )
// }

// export default RegisterPage

