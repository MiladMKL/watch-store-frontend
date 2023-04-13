import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
// import Wrapper from "@/components/Wrapper";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <div className="w-full max-w-screen-2xl px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Jordan Retro 6 G{/* {p.name} */}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">MRP : &#8364;99.99</p>
            </div>

            <div className="text-md  text-black/[0.5]">incl. of taxes</div>

            <div className="text-md  text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md  text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-5">
                <div className="border  text-center py-3 text-sm hover:bg-black hover:text-white cursor-pointer">
                  UK 6
                </div>
                <div className="border  text-center py-3 text-sm hover:bg-black hover:text-white cursor-pointer">
                  UK 7
                </div>
                <div className="border  text-center py-3 text-sm hover:bg-black hover:text-white cursor-pointer">
                  UK 8
                </div>
                <div className="border  text-center py-3 text-sm hover:bg-black hover:text-white cursor-pointer">
                  UK 9
                </div>
                <div className="border  text-center py-3 text-sm hover:bg-black hover:text-white cursor-pointer">
                  UK 10
                </div>
                <div className="border  text-center py-3 text-sm hover:bg-black hover:text-white cursor-pointer">
                  UK 11
                </div>
                <div className="border  text-center py-3 text-sm cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 12
                </div>
                <div className="border  text-center py-3 text-sm cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              {/* ADD TO CART BUTTON START */}
              <button className="w-full flex-2 py-4 bg-black text-white text-lg  transition-transform active:scale-95 hover:opacity-75 h-full">
                Add to Bag
              </button>

              {/* WHISHLIST BUTTON START */}
              <button className="w-full flex-1 py-4 px-4 border border-black text-lg  transition-transform active:scale-95 flex items-center justify-center hover:opacity-75 h-full">
                <AiFillHeart size={25} className="hover:text-red-500" />
              </button>
            </div>

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                Step into the history books. Paying homage to Frank Rudy, the
                man who created the coveted cornerstone of cushioning—Air—the
                Nike Air Max TW SE celebrates his legacy with fun details. From
                the shoe's release year proudly stamped on the Air unit to its
                translucent plastic detailing, its striking visuals deliver a
                lesson in comfort.
              </div>
            </div>
          </div>

          {/* right column end */}
        </div>

        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
