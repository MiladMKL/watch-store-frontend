import ProductCard from "@/components/ProductCard";
import React from "react";

const Collection = () => {
  return (
    <div className="w-full md:py-20">
      {/* Wrapper */}
      <div className="w-full max-w-screen-2xl px-5 md:px-10 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-light">
            Adidas Originals
          </div>
        </div>
        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* products grid end */}
      </div>
    </div>
  );
};

export default Collection;
