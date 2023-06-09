import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import React from "react";

const Collection = ({ collection, products }) => {
  return (
    <div className="w-full md:py-20">
      {/* Wrapper */}
      <div className="w-full max-w-screen-2xl px-5 md:px-10 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-light">
            {collection?.data[0]?.attributes?.name}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

export async function getStaticPaths() {
  const collections = await fetchDataFromApi("/api/collections?populate=*");
  const paths = collections?.data?.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
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
