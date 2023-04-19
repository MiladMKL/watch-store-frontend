import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ products }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-10 md:mt-24 mb-10 md:mb-0">
      <div className="text-2xl font-bold mb-5 text-center">
        You Might Also Like
      </div>
      <Carousel responsive={responsive} itemClass="px-[25px]">
        {products?.data?.map((product) => (
          <ProductCard key={product?.id} data={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
