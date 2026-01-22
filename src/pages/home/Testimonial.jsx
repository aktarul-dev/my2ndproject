import React from "react";
import HeadingSection from "../../components/HeadingSection";

const Testimonial = () => {
  return (
    <div className="bg-[#F5F0F0]">
      <div className="max-w-screen-2xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16">

        {/* Heading */}
        <HeadingSection
          subheading="testimonials"
          heading="What Our Clients Say"
          description=""
        />

        {/* Carousel */}
        <div className="mt-10">
          <div className="carousel w-full rounded-xl overflow-hidden">

            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                className="w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                <p className="text-white text-sm sm:text-base md:text-lg max-w-xl">
                  “Amazing service! The team was very professional and helpful.”
                </p>
                <h4 className="text-white font-semibold mt-4">
                  John Doe
                </h4>
              </div>

              {/* Controls */}
              <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 justify-between">
                <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">❮</a>
                <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">❯</a>
              </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                <p className="text-white text-sm sm:text-base md:text-lg max-w-xl">
                  “Very smooth experience and great support system.”
                </p>
                <h4 className="text-white font-semibold mt-4">
                  Sarah Khan
                </h4>
              </div>

              <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 justify-between">
                <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">❮</a>
                <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">❯</a>
              </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                <p className="text-white text-sm sm:text-base md:text-lg max-w-xl">
                  “Highly recommended! Will work again.”
                </p>
                <h4 className="text-white font-semibold mt-4">
                  Ahmed Rahman
                </h4>
              </div>

              <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 justify-between">
                <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">❮</a>
                <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">❯</a>
              </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                <p className="text-white text-sm sm:text-base md:text-lg max-w-xl">
                  “Excellent quality and fast delivery.”
                </p>
                <h4 className="text-white font-semibold mt-4">
                  Maria Lopez
                </h4>
              </div>

              <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 justify-between">
                <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">❮</a>
                <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">❯</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
