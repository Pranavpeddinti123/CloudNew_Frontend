import React, { useEffect, useState } from 'react'
import { products } from "../assets/assetes.js";
import { useParams } from 'react-router-dom'

const ProductBasedId = () => {
  const { itemId } = useParams();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(null);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const fetchProductData = () => {
    const product = products.find((item) => item._id === itemId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // prevent going below 1

  useEffect(() => {
    fetchProductData();
  }, [itemId]);
  return (
    <div className="w-full min-h-[calc(100vh-72px)] pt-5">
      <div className="flex flex-row">
        <div className="w-[50%] p-8">
          <img className="max-w-96 rounded-lg" src={image} alt="" />
        </div>
        <div className="w-[50%] p-8 flex flex-col gap-6 justify-center ">
          <h1 className="font-bold text-4xl text-slate-900">
            {productData?.name}
          </h1>
          <p className="font-medium text-base text-gray-500">
            {productData?.description}
          </p>
          <p className="font-medium text-base text-gray-500">
            Category: {productData?.category}
          </p>
          <p className="font-medium text-2xl text-orange-500">
            ${productData?.price}
          </p>

          <div className='flex -flex-row gap-4 justify-center items-center'>
            <div className="flex items-center justify-between w-28 border rounded-full px-4 py-2">
              <button
                onClick={decrement}
                className="text-xl font-bold text-gray-600"
              >
                −
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increment}
                className="text-xl font-bold text-gray-600"
              >
                +
              </button>
            </div>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md px-8 flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all">
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
                className="lucide lucide-shopping-cart w-5 h-5 mr-2"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBasedId
