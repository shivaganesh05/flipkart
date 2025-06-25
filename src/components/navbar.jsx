"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryNavbar = () => {
  const pathname = usePathname();

  const categories = [
   { label: "All", path: "/all" },
   { label: "Electronics", path: "/electronics" },
    { label: "Jewelery", path: "/jewelery" },
    { label: "Men", path: "/men's clothing" },
    { label: "Women", path: "/women's clothing" },
    { label: "Furniture", path: "/furniture" },
    { label: "Sports", path: "/sports" },
    { label: "Books & More", path: "/books_More" },
  ];

  return (
    <nav className="w-full bg-white  shadow-sm">
    <div className="max-w-[1300px] mx-auto overflow-x-auto py-2">
        <ul className="flex whitespace-nowrap items-center gap-28 px-4 py-2 text-sm font-medium">
          {categories.map((category) => {
            const isActive = pathname === encodeURI(category.path);

            return (
              <li key={category.path}>
                <Link
                  href={category.path}
                  className={`transition ${
                    isActive
                      ? "text-[#2874f0] font-semibold border-b-2 border-[#2874f0]"
                      : "text-black hover:text-[#2874f0]"
                  }`}
                >
                  {category.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
