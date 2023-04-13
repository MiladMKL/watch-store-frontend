import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/returns", label: "Returns" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
          <div className="text-center md:text-left">
            &copy; {currentYear} Shoe Store. All rights reserved.
          </div>
          <ul className="flex flex-col md:flex-row md:justify-end gap-4 text-center">
            {links.map((link) => (
              <li key={link.href}>
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
