import React from 'react'
import HeadingSection from '../../components/HeadingSection';
import { IoLogoApple } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

const CompanyLogo = () => {

    const logos = [
        {
            icon: IoLogoApple,
            name: "Apple",
        },
        {
            icon: FaGoogle,
            name: "Google",
        },
        {
            icon: FaAmazon,
            name: "Amazon",
        },
        {
            icon: FaMicrosoft,
            name: "Mircrosoft",
        },
        {
            icon: MdFacebook,
            name: "Facebook",
        },
    ]

    return (
       <div className="bg-[#F5F0F0]">
  <div className="max-w-screen-2xl mx-auto py-16 px-4 sm:px-6 lg:px-12">
    
    <HeadingSection
      subheading="Our Trusted Partners"
      heading="Companies We've Worked With"
      description="We've partnered with some of the most innovative and leading companies to bring the best solutions to you."
    />

    {/* Logo Container */}
    <div className="mt-12">
      <div
        className="
          flex items-center justify-center
          flex-wrap md:flex-nowrap
          gap-6 md:gap-10
          bg-white py-8 px-6
          rounded-2xl  hover:shadow-xl transition
          md:overflow-x-auto
        "
      >
        {logos.map((Logo, i) => (
          <div
            key={i}
              
            className="
              flex items-center justify-center
              bg-white rounded-full
              w-16 h-16 sm:w-20 sm:h-20
              p-4
              hover:scale-110 hover:bg-gray-200
              transition-transform
            "
          >
            <Logo.icon
              className="text-blue-600 text-3xl sm:text-4xl md:text-5xl"
              title={Logo.name}
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

    )
}

export default CompanyLogo


