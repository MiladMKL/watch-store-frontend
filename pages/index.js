import Image from "next/image";
import { Inter } from "next/font/google";
import Slider from "@/components/Slider";
import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  const brands = products.data.flatMap(
    (brand) => brand.attributes.collections.data
  );

  const brandsName = brands.map((brand) => brand.attributes.slug);
  const uniqueBrandsName = new Set(brandsName);

  console.log("PRODUCTS:", products);
  console.log("BRANDS:", brands);
  console.log("uniqueBrandsName:", uniqueBrandsName);

  return (
    <main>
      <Slider />
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-8">
        <div className="text-[28px] md:text-[34px] mb-2 font-semibold leading-light">
          Get all your favorites here!
        </div>
      </div>

      <div className="w-full flex justify-between items-center max-w-screen-2xl px-5 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          {products?.data.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  const products = await fetchDataFromApi(`/api/products?populate=*`);

  // const collections = await fetchDataFromApi(`/api/products?populate=*`);

  return {
    props: {
      products: products,
    },
  };
}
