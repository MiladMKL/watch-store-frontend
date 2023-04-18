import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data: { id, attributes } }) => {
  return (
    <Link
      href={`/product/${attributes.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      {/* src={attributes.thumbnail. data.attributes.url} */}

      <Image
        src={attributes.thumbnail.data.attributes.url}
        alt="thumbnail"
        width={500}
        height={500}
      />

      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{attributes.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">
            &#8364; {attributes.price}
          </p>

          {/* {true && (
            <p className="text-base font-medium line-through">&#8364; 280</p>
          )}
          <p className="ml-auto text-base font-medium text-red-500">25% off</p> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
