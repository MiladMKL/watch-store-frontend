import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { href: "/", label: "About" },
    { href: "/", label: "Contact" },
    { href: "/", label: "Returns" },
    { href: "/", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container max-w-screen-2xl px-5 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
          <div className="text-center md:text-left">
            &copy; {currentYear} Watch Store. All rights reserved.
          </div>
          <ul className="flex flex-col md:flex-row md:justify-end gap-4 text-center">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
