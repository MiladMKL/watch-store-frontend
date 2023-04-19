import Slider from "@/components/Slider";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import Link from "next/link";

export default function Home({ products }) {
  return (
    <main>
      <Slider />
      {/* heading and paragaph start */}
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Get all your favorites here!
        </div>
        <div className="text-md md:text-xl">
          Discover a world of elegance and style with our diverse collection of
          timepieces, crafted to suit your individual preferences. At our store,
          we pride ourselves on providing an extensive range of watches to cater
          to the unique tastes of our customers.
        </div>
      </div>
      {/* heading and paragaph end */}

      <div className="flex flex-col md:flex-row justify-evenly items-center max-w-screen-2xl px-5 md:px-10 mx-auto gap-8">
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/men-watch.png"
            alt="Shop for Men"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <Link
            href="/men"
            className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl hover:opacity-80"
          >
            Shop for Men
          </Link>
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/women-watch.png"
            alt="Shop for Women"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <Link
            href="/women"
            className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl hover:opacity-80"
          >
            Shop for Women
          </Link>
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

  return {
    props: {
      products: products,
    },
  };
}
