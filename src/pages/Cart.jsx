import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalItems,
    totalPrice,
  } = useContext(FoodContext);

  if (cart.length === 0) {
    return (
      <div className="w-full min-h-[calc(100vh-72px)] flex items-center justify-center">
        <p className="text-gray-600 text-lg">Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Your <span className="text-[#f97316]">Cart</span>
      </h1>

      {/* Cart Items */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-5"
            >
              {/* Left: Image + Details */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500 text-sm">Fresh and delicious</p>
                  <p className="text-orange-500 font-bold mt-1">
                    ${item.price}
                  </p>
                </div>
              </div>

              {/* Right: Controls */}
              <div className="flex items-center gap-6">
                {/* Quantity */}
                <div className="flex items-center bg-pink-100 rounded-lg px-3 py-1">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="text-orange-500 font-bold text-lg px-2"
                  >
                    −
                  </button>
                  <span className="px-2 text-lg">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="text-orange-500 font-bold text-lg px-2"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-orange-500 hover:text-orange-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trash2"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Total */}
        <div className="bg-white shadow-md rounded-xl p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Subtotal ({totalItems} items)</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition">
            Proceed To Checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
