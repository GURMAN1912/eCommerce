// /components/CategoriesSection.js

import React from 'react';
import Link from 'next/link';

const categories = [
  { name: "Electronics", link: "/category/electronics" },
  { name: "Clothing", link: "/category/clothing" },
  { name: "Home", link: "/category/home" },
  { name: "Sports", link: "/category/sports" },
  {name: "Books", link: "/category/books"},
    {name: "Food", link: "/category/food"},
    {name: "Beauty", link: "/category/beauty"},
    {name: "Health", link: "/category/health"},
    {name: "Toys", link: "/category/toys"},
    {name: "Furniture", link: "/category/furniture"},
    {name: "Jewelry", link: "/category/jewelry"},
    {name: "Shoes", link: "/category/shoes"},
    {name: "Bags", link: "/category/bags"},
    {name: "Watches", link: "/category/watches"},

  // Add more categories as needed
];

const CategoriesSection = () => {
  return (
    <section className="py-8 ">
  <h2 className="text-5xl font-bold text-text mb-6 text-center">
    Browse Categories
  </h2>
  <div className="flex flex-wrap justify-center gap-4">
    {categories.map((category) => (
      <Link href={"/shop"} key={category.name}>
        <p className="bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark transition transform hover:scale-105 duration-200">
          {category.name}
        </p>
      </Link>
    ))}
  </div>
</section>

  );
};

export default CategoriesSection;
