import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className="w-full mx-auto">
      <div className="w-full flex justify-between items-center max-w-screen-2xl px-5 md:px-10 mx-auto">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={6000}
          showThumbs={false}
          showIndicators={true}
          showStatus={false}
        >
          <div>
            <img
              src="/watch-slider1.jpg"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>

          <div>
            <img
              src="/watch-slider2.jpg"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>

          <div>
            <img
              src="/watch-slider3.jpg"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>

          <div>
            <img
              src="/watch-slider4.jpg"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
