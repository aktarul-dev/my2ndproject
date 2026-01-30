import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-white text-gray-800">
            <div className="container mx-auto px-6 py-16 md:px-20">

                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">

                    {/* Brand */}
                    <div>
                        <h2 to="/" className="btn btn-ghost text-3xl font-bold hidden md:flex tex mb-8 mr-35">
                            web<span className="text-blue-600">Code</span>
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Explore the world with comfort and confidence.
                            Discover amazing places and unforgettable journeys.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            <a className="hover:text-black cursor-pointer">
                                <FaFacebookF size={20} />
                            </a>
                            <a className="hover:text-black cursor-pointer">
                                <FaTwitter size={20} />
                            </a>
                            <a className="hover:text-black cursor-pointer">
                                <FaInstagram size={20} />
                            </a>
                            <a className="hover:text-black cursor-pointer">
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-black cursor-pointer">About Us</li>
                            <li className="hover:text-black cursor-pointer">Careers</li>
                            <li className="hover:text-black cursor-pointer">Blog</li>
                            <li className="hover:text-black cursor-pointer">Press</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-black cursor-pointer">Help Center</li>
                            <li className="hover:text-black cursor-pointer">Contact Us</li>
                            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-black cursor-pointer">Terms of Service</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>📍 30 Great Peter St, London</li>
                            <li>📧 info@mtrip.com</li>
                            <li>📞 +880 1234-567890</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-5 text-center text-sm">
                © {/* {new Date().getFullYear()} */} 2026 MTrip. All rights reserved.
            </div>
        </footer>
    );
};


export default Footer