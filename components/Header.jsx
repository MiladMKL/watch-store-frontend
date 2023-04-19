import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import Menu from "./Menu";
import MenuMobile from "./MobileMenu";

import { BiHeart } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { GrMenu } from "react-icons/gr";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [collection, setCollections] = useState(null);
  const { cartItems } = useSelector((state) => state.cart);

  /*useEffect 
  ----------------------------------------------- */
  useEffect(() => {
    fetchCollection();
  }, []);

  const fetchCollection = async () => {
    const { data } = await fetchDataFromApi(`/api/collections?populate=*`);
    setCollections(data);
  };

  return (
    <div className="w-full h-[60px] md:h-[80px] flex items-center justify-between z-50 sticky top-0 bg-white">
      <div className="w-full flex justify-between items-center max-w-screen-2xl px-5 md:px-10 mx-auto">
        {/* Mobile icon start */}
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
          {mobileMenu ? (
            <VscChromeClose size={20} onClick={() => setMobileMenu(false)} />
          ) : (
            <GrMenu size={20} onClick={() => setMobileMenu(true)} />
          )}
        </div>
        {/* Mobile icon end */}

        {mobileMenu && (
          <MenuMobile
            showCategoryMenu={showCategoryMenu}
            setShowCategoryMenu={setShowCategoryMenu}
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
            collection={collection}
          />
        )}

        <Link href="/">
          <Image
            src="/rolex-logo.png"
            alt="logo"
            width="40"
            height="40"
            className="md:w-[60px]"
          />
        </Link>

        <Menu
          showCategoryMenu={showCategoryMenu}
          setShowCategoryMenu={setShowCategoryMenu}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          collection={collection}
        />

        <div className="flex items-center gap-2 text-black">
          <Link href="/wishlist">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BiHeart className="text-[19px] md:text-[24px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
