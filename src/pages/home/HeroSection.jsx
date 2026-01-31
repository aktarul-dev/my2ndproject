import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import heroImg from "../../assets/hero.avif";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-[#F5F0F0]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16
        py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mt-10 sm:mt-0">
            <span className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mt-10 sm:mt-0" >Creative Web </span>
            <span className="block text-blue-600">Design For Businesses</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-5 mb-8 max-w-xl mx-auto lg:mx-0">
            Join thousands of businesses already growing with our solutions.
            Let’s help you take your business to the next level!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md
              flex items-center justify-center gap-2 hover:bg-blue-700 transition">
              Get Started
              <FaArrowRightLong />
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md
              hover:bg-blue-600 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="relative group max-w-md w-full">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full rounded-xl shadow-lg object-cover"
            />

            {/* Play Button */}
            <button
              onClick={() => setShowModal(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FaRegPlayCircle
                className="text-5xl sm:text-6xl text-blue-600
                group-hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-xl bg-black text-white
              w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-600 transition"
            >
              ×
            </button>

            <iframe
              className="w-full aspect-video rounded-b-lg"
              src="https://www.youtube.com/embed/JnX7Oc8LqD8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
