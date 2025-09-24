import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { products } from "../assets/assetes.js";
import Product from "./Product.jsx";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState(""); // search state
  const [items, setItems] = useState(products.slice(0, 6));

  // Fetch more items on scroll
  const fetchMoreData = () => {
    setTimeout(() => {
      setItems((prev) =>
        prev.concat(products.slice(prev.length, prev.length + 6))
      );
    }, 1000);
  };

  // Apply search filter
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-[calc(100vh-72px)] pt-5">
      {/* Title */}
      <h1 className="md:text-4xl sm:text-3xl text-3xl text-center font-bold">
        Our <span className="text-[#f97316]">Menu</span>
      </h1>
      <h3 className="md:text-lg sm:text-base text-gray-500 text-center mt-3">
        Discover exceptional dishes crafted with passion and premium ingredients
      </h3>

      {/* 🔍 Search Bar */}
      <div className="flex flex-row justify-center items-center mt-6 gap-4">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <Product
        items={items}
        filteredItems={filteredItems}
        fetchMoreData={fetchMoreData}
        products={products}
      />
    </div>
  );
};

export default Menu;
