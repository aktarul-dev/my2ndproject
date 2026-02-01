import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 ">
            <div className="max-w-7xl mx-auto px-6 py-14">

                {/* Top Grid */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <Link to="/" className="text-3xl font-bold">
                            web<span className="text-blue-600">Code</span>
                        </Link>

                        <p className="text-sm mt-4 leading-relaxed">
                            Explore the world with comfort and confidence.
                            Discover amazing places and unforgettable journeys.
                        </p>

                        {/* Social */}
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="hover:text-blue-600">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="hover:text-blue-600">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-blue-600">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-blue-600">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-600">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
                            <li className="hover:text-blue-600 cursor-pointer">Careers</li>
                            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
                            <li className="hover:text-blue-600 cursor-pointer">Press</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-600">Support</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
                            <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
                            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-blue-600 cursor-pointer">Terms of Service</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-600">Contact</h3>

                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <p className="text-sm">📧 info@mtrip.com</p>
                            <p className="text-sm">📞 +880 1234-567890</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom */}
            <div className="border-t py-5 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} MTrip. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
