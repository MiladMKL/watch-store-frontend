import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React from "react";
import { removeFromCart } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash3 } from "react-icons/bs";

const WishList = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen w-full max-w-screen-2xl px-5 md:px-10 mx-auto ">
      {cartItems.length > 0 && (
        <>
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold pt-10">
              Wishlist
            </div>
          </div>

          <div className="flex flex-row gap-2 py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 text-center">
              {cartItems.map((item) => (
                <div className="relative">
                  <ProductCard key={item.id} data={item} />
                  <button
                    className="absolute left-4 top-4 bg-red-600 text-white px-4 py-4 rounded-full hover:bg-red-700"
                    onClick={() => {
                      dispatch(removeFromCart({ id: item.id }));
                    }}
                  >
                    <BsTrash3 size={25} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* empty screen */}
      {cartItems.length < 1 && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center mt-64">
            <span className="text-2xl font-bold">Your wishlist is empty</span>

            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-[#006039] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList;
