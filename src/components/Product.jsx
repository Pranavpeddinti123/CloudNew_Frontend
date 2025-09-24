import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../context/FoodContext";

const Product = ({ items, filteredItems, fetchMoreData, products }) => {
  let navigate = useNavigate();
  const { addToCart } = useContext(FoodContext); 

  return (
    <div>
      {/* Infinite Scroll */}
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < products.length}
        loader={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white p-5 rounded-sm animate-pulse"
              >
                <div className="w-[70%] sm:w-[80%] h-40 bg-gray-300 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="flex flex-row justify-around gap-5 w-full">
                  <div className="h-4 w-12 bg-gray-300 rounded"></div>
                  <div className="h-9 w-16 bg-gray-400 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        }
      >
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-5 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  onClick={() => navigate(`/menu/${item._id}`)}
                  src={item.image}
                  className="w-[70%] sm:w-[80%] rounded-xl shadow-md cursor-pointer"
                  alt={item.name}
                  loading="lazy"
                />
                <h2 className="mt-3 text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1 text-center">
                  {item.description}
                </p>
                <div className="flex flex-row items-center justify-around gap-5 w-full">
                  <p className="text-[#f97316] text-lg font-bold">
                    ${item.price}
                  </p>
                  <button
                    onClick={() =>
                      addToCart({
                        id: item._id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 h-9 rounded-md px-3 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plus w-4 h-4 mr-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    Add
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500 mt-5">
              No dishes found.
            </p>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Product;
