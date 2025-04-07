import React from "react";

const Hero = () => {
  return (
    <section className="bg-white px-6 md:px-24 py-12 mt-32 flex  flex-col-reverse lg:flex-row justify-between items-center gap-8">
      {/* Left Content */}
      <div className="text-center lg:text-left w-1/2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Delicious Meals <span className="text-orange-500">Delivered</span><br className="hidden sm:inline" /> to Your Door
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Enjoy fresh, flavorful meals made with the finest ingredients —
          delivered straight to your doorstep, hot and fast!
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300">
            🍽️ Order Now
          </button>
          <button className="border border-gray-400 hover:border-orange-400 text-gray-700 hover:text-orange-500 px-6 py-3 rounded-md transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          alt="Food Delivery"
          className="w-1/3 sm:w-72 lg:w-96 animate-bounce-slow"
        />
      </div>
    </section>
  );
};

export default Hero;
