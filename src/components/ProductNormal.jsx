import React from 'react'
import { products } from "../assets/assetes.js";

const ProductNormal = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.slice(0, 6).map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white p-5 rounded-sm"
        >
          <img
            src={item.image}
            className="w-[70%] sm:w-[80%] rounded-xl shadow-lg"
            alt={item.name}
          />
          <h2 className="mt-3 text-lg font-semibold">{item.name}</h2>
          <p class="text-gray-500 text-sm mb-3 line-clamp-2 flex-1 text-center">
            {item.description}
          </p>
          <div className="flex flex-row  items-center justify-around gap-5 w-full">
            <p className="text-[#f97316] text-lg font-bold">${item.price}</p>
            <button
              onClick={() =>
                addToCart({
                  id: item._id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                })
              }
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 bg-gray-900 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus w-4 h-4 mr-1"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductNormal
