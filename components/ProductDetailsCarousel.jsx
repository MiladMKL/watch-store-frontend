import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-red-500 text-base w-full max-w-screen-2xl mx-auto sticky top-12">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={100}
      >
        {images?.map((img) => (
          <img
            key={img.id}
            src={img.attributes.url}
            alt={img.attributes.name}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
