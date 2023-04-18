import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { addToCart } from "@/store/cartSlice";
import { fetchDataFromApi } from "@/utils/api";
// import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const p = product?.data?.[0]?.attributes;

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <div className="w-full max-w-screen-2xl px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-light mb-2">
              {p.subtitle.toUpperCase()}
            </div>

            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-4 leading-tight">
              {p.name}
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                Price: &#8364; {p.price}
              </p>
            </div>

            {/* <div className="text-md  text-black/[0.5]">incl. of taxes</div> */}

            <div className="text-md  text-black/[0.5] mb-10">
              {`(Incl. 20% taxes)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            {/* <div className="mb-10"> */}
            {/* HEADING START */}
            {/* <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md  text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div> */}
            {/* HEADING END */}

            {/* SIZE START */}
            {/* <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div> */}
            {/* SIZE END */}
            {/* </div> */}

            <div className="mb-10">
              <div className="text-lg font-bold mb-2">Description:</div>
              <div className="markdown text-md mb-5">{p.description}</div>
            </div>

            <div className="flex gap-2 mb-10">
              {/* ADD TO CART BUTTON START */}
              <button
                className="w-full flex-2 py-4 bg-[#006039] text-white text-lg  transition-transform active:scale-95 hover:opacity-75 h-full"
                onClick={() => {
                  dispatch(addToCart({ ...product?.data?.[0] }));
                  notify();
                }}
              >
                Add to Wishlist
              </button>

              {/* WHISHLIST BUTTON START */}
              {/* <button className="w-full flex-1 py-4 px-4 border border-black text-lg  transition-transform active:scale-95 flex items-center justify-center hover:opacity-75 h-full">
                <AiFillHeart size={25} className="hover:text-red-500" />
              </button> */}
            </div>
          </div>

          {/* right column end */}
        </div>

        <RelatedProducts products={products} />
      </div>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
