import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const dataLinks = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/men", name: "Men" },
  { id: 3, href: "/women", name: "Women" },
  { id: 4, href: "/collections", name: "Collections", subMenu: true },
];

const Menu = ({ showCategoryMenu, setShowCategoryMenu, collection }) => (
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
                {collection.map(({ attributes: c, id }) => (
                  <Link
                    key={id}
                    href={`/collection/${c.slug}`}
                    onClick={() => setShowCategoryMenu(false)}
                  >
                    <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md hover:text-[#a37e2c]">
                      {c.name}
                      <span className="opacity-50 text-sm">
                        {`${c.products.data.length}`}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ) : (
          <li className="cursor-pointer hover:text-[#a37e2c]">
            <Link href={item.href}>{item.name}</Link>
          </li>
        )}
      </React.Fragment>
    ))}
  </ul>
);

export default Menu;
