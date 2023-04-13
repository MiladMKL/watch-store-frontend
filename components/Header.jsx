import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiShoppingBag, BiHeart, BiMenuAltRight } from "react-icons/bi";
import Menu from "./Menu";
import MenuMobile from "./MobileMenu";

import { VscChromeClose } from "react-icons/vsc";
import { GrMenu } from "react-icons/gr";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  return (
    <div className="w-full h-[50px] md:h-[80px] flex items-center justify-between z-50 sticky top-0 transition-transform duration-300 bg-white">
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
            categories={categories}
          />
        )}

        <Link href="/">
          <Image
            src="/adidas-trefoil.png"
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
          categories={categories}
        />

        <div className="flex items-center gap-2 text-black">
          {/* Icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BiHeart className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>
          {/* Icon end */}

          {/* Icon start */}
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BiShoppingBag className="md:text-[24px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-cyan-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                5
              </div>
            </div>
          </Link>
          {/* Icon end */}
        </div>
      </div>
    </div>
  );
};

export default Header;
