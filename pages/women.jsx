import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import React from "react";

const Women = ({ collection, products, slug }) => {
  return (
    <div className="w-full md:py-20">
      {/* Wrapper */}
      <div className="w-full max-w-screen-2xl px-5 md:px-10 mx-auto">
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Women watches
          </div>
          <div className="text-md md:text-lg">
            Our watch collection for women is a reflection of elegance and
            sophistication, with a variety of styles and designs to choose from.
            We offer an extensive range of women's watches, featuring delicate
            bracelets, colorful leather straps, and timeless designs from top
            brands.
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

export default Women;

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps() {
  const slug = "women";
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
