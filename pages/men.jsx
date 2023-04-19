import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import React from "react";

const Men = ({ collection, products }) => {
  return (
    <div className="w-full md:py-10">
      {/* Wrapper */}
      <div className="w-full max-w-screen-2xl px-5 md:px-10 mx-auto">
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] py-4 mx-auto">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Men watches
          </div>
          <div className="text-md md:text-lg">
            From classic leather straps to sporty metal bracelets, our
            collection features high-quality watches from top brands. Our men's
            watches come in a range of colors and styles, with various
            functionalities like chronographs, timers, and water resistance.
          </div>
        </div>
        {/* heading and paragaph end */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Men;

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps() {
  const slug = "men";
  const collection = await fetchDataFromApi(
    `/api/collections?filters[slug][$eq]=${slug}`
  );

  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][collections][slug][$eq]=${slug}`
  );

  return {
    props: {
      collection,
      products,
      slug,
    },
  };
}
