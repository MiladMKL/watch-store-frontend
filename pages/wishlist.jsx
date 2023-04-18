import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const WishList = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen w-full max-w-screen-2xl px-5 md:px-10 mx-auto">
      {/* <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
          My Wishlist
        </div> */}

      {cartItems.length > 0 && (
        <>
          {/* HEADING AND PARAGRAPH START */}
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Shopping Cart
            </div>
          </div>
          {/* HEADING AND PARAGRAPH END */}

          {/* CART CONTENT START */}
          <div className="flex flex-col lg:flex-row gap-12 py-10">
            {/* CART ITEMS START */}
            <div className="flex-[2]">
              <div className="text-lg font-bold">Cart Items</div>
              {cartItems.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
            {/* CART ITEMS END */}

            {/* SUMMARY START */}
          </div>
          {/* CART CONTENT END */}
        </>
      )}

      {/* This is empty screen */}
      {cartItems.length < 1 && (
        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishList;
