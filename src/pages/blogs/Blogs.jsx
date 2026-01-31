import React from "react";
import HeadingSection from "../../components/HeadingSection";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image: "/blog1.jpg",
      category: "Technology",
      title: "How AI is Shaping the Future of Web Development",
      description:
        "Discover how artificial intelligence is transforming the way we build and design websites.",
    },
    {
      id: 2,
      image: "/blog.png",
      category: "Technology",
      title: "How AI is Shaping the Future of Web Development",
      description:
        "Discover how artificial intelligence is transforming the way we build and design websites.",
    },
    {
      id: 3,
      image: "/blog2.png",
      category: "Technology",
      title: "How AI is Shaping the Future of Web Development",
      description:
        "Discover how artificial intelligence is transforming the way we build and design websites.",
    },
    {
      id: 4,
      image: "/blog.jpg",
      category: "Technology",
      title: "How AI is Shaping the Future of Web Development",
      description:
        "Discover how artificial intelligence is transforming the way we build and design websites.",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto mt-12 sm:mt-0 md:mt-0 lg:mt-0
     mb-12 px-4">

      {/* Heading */}
      <HeadingSection
        heading="Latest Articles and Insights"
        subheading="our blogs"
      />

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[180px] sm:h-[200px] object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <span className="text-xs sm:text-sm font-semibold text-primary">
                {blog.category}
              </span>

              <h3 className="text-base sm:text-lg font-bold mt-2 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {blog.description}
              </p>

              <button className="mt-4 text-sm font-semibold text-primary hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Blogs;
