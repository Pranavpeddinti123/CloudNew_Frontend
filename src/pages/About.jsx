import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-[calc(100vh-72px)] pt-5">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#f97316]">About Delizioso</h1>
        <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Our passion is crafting unforgettable culinary experiences with the
          finest ingredients, delivered right to your door.
        </p>
      </div>

      <div className="flex flex-row">
        <div className="w-[50%]">
          <img
            data-filename="pages/About"
            data-linenumber="49"
            data-visual-selector-id="pages/About49"
            data-source-location="pages/About:49:12"
            data-dynamic-content="false"
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            alt="Our Kitchen"
            class="rounded-lg shadow-lg"
          ></img>
        </div>
        <div className="w-[50%] p-10 text-lg text-gray-700 gap-20 flex flex-col justify-center">
          <p
            data-filename="pages/About"
            data-linenumber="56"
            data-visual-selector-id="pages/About56"
            data-source-location="pages/About:56:12"
            data-dynamic-content="false"
          >
            Founded in 2024, Delizioso started with a simple idea: make gourmet
            food accessible to everyone. We believe that a great meal can bring
            people together, create memories, and turn an ordinary day into
            something special.
          </p>
          <p
            data-filename="pages/About"
            data-linenumber="57"
            data-visual-selector-id="pages/About57"
            data-source-location="pages/About:57:12"
            data-dynamic-content="false"
          >
            Our team of dedicated chefs sources the freshest local ingredients
            to create a menu that is both classic and innovative. Every dish is
            prepared with meticulous attention to detail and a deep respect for
            flavor.
          </p>
        </div>
      </div>

      <div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#f97316]">
            Contact Us
          </h2>

          <div className="max-w-xl mx-auto">
            <form className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="Write your message..."
                  className="flex min-h-[100px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 text-white hover:bg-orange-700 h-10 px-6 py-2 w-full transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
