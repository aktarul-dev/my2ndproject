import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";
import { IoMdCloudOutline } from "react-icons/io";
import HeadingSection from "../../components/HeadingSection";

const ToolsSection = () => {
  const tools = [
    {
      icon: IoSettingsOutline,
      title: "Customizable Settings",
      description: "Easily configure tools to fit your project requirements.",
    },
    {
      icon: FaCode,
      title: "Developer Friendly",
      description: "Clean and simple APIs designed for fast development.",
    },
    {
      icon: CiMobile4,
      title: "Responsive Design",
      description: "Optimized layouts that work perfectly on all devices.",
    },
    {
      icon: IoMdCloudOutline,
      title: "Cloud Integration",
      description: "Seamlessly connect with cloud services for scalability.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16">

        {/* Heading */}
        <HeadingSection
          subheading="The Tool You Need"
          heading="All-in-One Solution for Your Project"
        />

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-6 sm:gap-8 mt-10 mb-12">

          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white
              rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <tool.icon className="text-blue-600 text-4xl sm:text-5xl mb-4" />

              <h3 className="text-lg font-semibold text-gray-800">
                {tool.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {tool.description}
              </p>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-md
            hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
};

export default ToolsSection;
