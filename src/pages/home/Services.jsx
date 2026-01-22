import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { FaFileAlt } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { SiWesternunion } from "react-icons/si";
import { LuGitPullRequestClosed } from "react-icons/lu";

const Services = () => {
  const services = [
    {
      icon: FaFileAlt,
      title: "Customizable Settings",
      description:
        "Easily configure tools to fit your project requirements with flexible and scalable options.",
    },
    {
      icon: TbBus,
      title: "Developer Friendly",
      description:
        "Clean APIs and simple integration make development faster and more efficient.",
    },
    {
      icon: SiWesternunion,
      title: "Responsive Design",
      description:
        "Fully responsive layouts that work perfectly on mobile, tablet, and desktop devices.",
    },
    {
      icon: LuGitPullRequestClosed,
      title: "Cloud Integration",
      description:
        "Seamlessly integrate cloud services to improve scalability and performance.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16">

        {/* Heading */}
        <HeadingSection
          heading="Explore our range of professional services tailored to meet your business needs."
          subheading="Services"
          description="We provide modern, scalable, and efficient solutions designed to help your business grow with confidence."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 mb-14">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 shadow-md
              hover:shadow-xl transition duration-300 cursor-pointer bg-white"
            >
              <service.icon className="text-4xl sm:text-5xl text-blue-600 mb-4" />

              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-md
            hover:bg-blue-700 transition text-sm sm:text-base">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
