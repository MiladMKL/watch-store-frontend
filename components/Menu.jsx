import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const dataLinks = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/men", name: "Men" },
  { id: 3, href: "/women", name: "Women" },
  { id: 4, href: "/kids", name: "Kids" },
  { id: 5, href: "/collections", name: "Collections", subMenu: true },
];

const dataSubLinks = [
  { id: 1, name: "Adidas Original", doc_count: 11 },
  { id: 2, name: "Yeezy", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

import clsx from "clsx";
import { FiMenu } from "react-icons/fi";

const Menu = ({
  showCategoryMenu,
  setShowCategoryMenu,
  mobileMenu,
  setMobileMenu,
  categories,
}) => (
  <ul className="hidden md:flex items-center gap-8 font-medium text-black">
    {dataLinks.map((item) => (
      <React.Fragment key={item.id}>
        {item?.subMenu ? (
          <li
            className="cursor-pointer flex items-center gap-2 relative"
            onMouseEnter={() => setShowCategoryMenu(true)}
            onMouseLeave={() => setShowCategoryMenu(false)}
          >
            {item.name}
            <BsChevronDown size={14} />

            {showCategoryMenu && (
              <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                {dataSubLinks.map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    onClick={() => setShowCategoryMenu(false)}
                  >
                    <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                      {item.name}
                      <span className="opacity-50 text-sm">
                        {item.doc_count}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ) : (
          <li className="cursor-pointer">
            <Link href="/">{item.name}</Link>
          </li>
        )}
      </React.Fragment>
    ))}
  </ul>
);

export default Menu;
