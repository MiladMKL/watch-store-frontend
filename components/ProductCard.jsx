import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data: { id, attributes } }) => {
  return (
    <div className="flex flex-col justify-center items-center text-black text-center border rounded-md p-4">
    <Link
      href={`/product/${attributes.slug}`}
      className="transform overflow-hidden bg-white duration-300 hover:scale-105 cursor-pointer "
    >
      <Image
        src={attributes.thumbnail.data.attributes.url}
        alt="thumbnail"
        width={500}
        height={500}
      />      
        <h2 className="text-base font-sm">{attributes.name}</h2>
        <div className="flex justify-center items-center text-gray-500">
          <p className="text-center text-base font-light break-all">
            &#8364; {attributes.price}
          </p>
        </div>
      
    </Link>
    </div>
  );
};

export default ProductCard;
