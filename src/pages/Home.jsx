import React from "react";
import ProductNormal from "../components/ProductNormal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full min-h-[calc(100vh-72px)] pt-5">
        <p onClick={() => navigate("/foodwebsitechatbot")}>chabot Link</p>

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-16 pt-3 w-full lg:w-1/2">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Exceptional
                </span>
                <span className="block text-gray-900">Culinary</span>
                <span className="block text-gray-900">Experience</span>
              </h1>

              <p className="text-lg text-gray-600 mt-6 max-w-lg leading-relaxed">
                Discover artisanal dishes crafted with passion, premium
                ingredients, and delivered fresh to your doorstep. Every meal is
                a masterpiece.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium 
                bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 
                text-white h-11 rounded-md px-8 shadow-xl hover:shadow-2xl 
                transition-all duration-300 group w-full sm:w-auto"
              >
                Order Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>

              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium 
                border bg-background hover:text-accent-foreground h-11 rounded-md px-8 
                border-orange-200 text-orange-600 hover:bg-orange-50 w-full sm:w-auto"
                onClick={() => {
                  navigate("/menu");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                View Menu
              </button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock w-5 h-5 text-orange-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="font-medium">25 min delivery</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-truck w-5 h-5 text-orange-500"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  <path d="M15 18H9" />
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                  <circle cx="17" cy="18" r="2" />
                  <circle cx="7" cy="18" r="2" />
                </svg>
                <span className="font-medium">Free delivery over $30</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Delicious gourmet meal"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen p-5 flex flex-col gap-4 md:gap-6 lg:gap-10 pt-20">
        <div>
          <h1 className="md:text-4xl sm:text-3xl text-3xl text-center font-bold">
            Featured <span className="text-[#f97316]">Dishes</span>
          </h1>
          <h3 className="md:text-lg sm:text-base text-gray-500 text-center mt-3">
            Discover our chef's carefully curated selection of signature dishes
            that define exceptional taste
          </h3>
        </div>

        <ProductNormal />

        <button
          onClick={() => {
            navigate("/menu");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex m-auto items-center justify-center gap-2 whitespace-nowrap text-sm font-medium 
          border bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-orange-200 
          text-orange-600 hover:bg-orange-50"
        >
          View Full Menu
        </button>
      </div>

      <div className="w-full h-[50%] bg-[#f97a15] py-10 flex flex-col items-center gap-3 md:gap-4 lg:gap-8 px-5">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
          Ready to Experience Exceptional Flavors?
        </h1>
        <p className="text-center text-base  text-white">
          Join thousands of food lovers who trust Delizioso for their culinary
          adventures
        </p>
        <button
          className="inline-flex max-w-44 text-center items-center justify-center gap-2 whitespace-nowrap text-sm font-medium 
  h-11 rounded-md px-8 bg-white text-orange-600 hover:bg-gray-50 
  shadow-xl hover:shadow-2xl transition-all duration-300 group"
        >
          Explore Our Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Home;
