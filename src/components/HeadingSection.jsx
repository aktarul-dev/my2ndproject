import React from "react";

const HeadingSection = ({ subheading, heading, description }) => {
    return (
        <div className="text-center mb-10 sm:mb-12 px-4">

            {/* Subheading */}
            <p className="text-blue-600 font-bold uppercase text-sm sm:text-base md:text-lg">
                {subheading}
            </p>

            {/* Heading */}
            <h2
                className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-bold
          text-gray-800
          mt-3
          leading-snug
          max-w-3xl
          mx-auto
        "
            >
                {heading}
            </h2>

            {/* Description (optional) */}
            {description && (
                <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto text-center">
                    {description}
                </p>
            )}
        </div>
    );
};

export default HeadingSection;
