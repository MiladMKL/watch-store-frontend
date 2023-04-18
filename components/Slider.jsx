import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const Slider = () => {
  return (
    <div className="relative text-white text-[20px] w-full mx-auto">
      <div className="w-full flex justify-between items-center max-w-screen-2xl px-5 md:px-10 mx-auto">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={9000}
          showThumbs={false}
          showIndicators={true}
          showStatus={false}

          // Render Methods
          // renderArrowPrev={(clickHandler, hasPrev) => (
          //   <div
          //     onClick={clickHandler}
          //     className="absolute right-[31px] md:right-[50px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          //   >
          //     <BiArrowBack className="text-sm md:text-lg" />
          //   </div>
          // )}
          // renderArrowNext={(clickHandler, hasNext) => (
          //   <div
          //     onClick={clickHandler}
          //     className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          //   >
          //     <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          //   </div>
          // )}
        >
          <div>
            <img
              src="/slider_watch1.jpg"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
            {/* <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div> */}
          </div>

          <div>
            <img
              src="/slider_watch2.jpg"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
            {/* <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div> */}
          </div>

          <div>
            <img
              src="/slider_watch3.jpg"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
            {/* <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div> */}
          </div>
          <div>
            <img
              src="/slider_watch4.jpg"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />

            {/* <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
