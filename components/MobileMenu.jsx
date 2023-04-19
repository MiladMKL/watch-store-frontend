import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const dataLinks = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/men", name: "Men" },
  { id: 3, href: "/women", name: "Women" },
  { id: 4, href: "/collections", name: "Collections", subMenu: true },
];

const MenuMobile = ({
  showCategoryMenu,
  setShowCategoryMenu,
  setMobileMenu,
  collection,
}) => (
  <ul className="flex flex-col md:hidden font-bold absolute top-[60px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
    {dataLinks.map((item) => (
      <React.Fragment key={item.id}>
        {item?.subMenu ? (
          <li
            className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
            onClick={() => setShowCategoryMenu(!showCategoryMenu)}
          >
            <div className="flex justify-between items-center">
              {item.name}
              <BsChevronDown size={14} />
            </div>

            {showCategoryMenu && (
              <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                {collection?.map(({ attributes: c, id }) => (
                  <Link
                    key={id}
                    href={`/collection/${c.slug}`}
                    onClick={() => {
                      setShowCategoryMenu(false);
                      setMobileMenu(false);
                    }}
                  >
                    <li className="py-4 px-8 border-t flex justify-between">
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
          <li className="py-4 px-5 border-b">
            <Link href={item?.href} onClick={() => setMobileMenu(false)}>
              {item.name}
            </Link>
          </li>
        )}
      </React.Fragment>
    ))}
  </ul>
);

export default MenuMobile;
