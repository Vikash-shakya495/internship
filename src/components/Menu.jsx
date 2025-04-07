import React, { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import pasta from "../assets/pasta.avif";
import pizza from "../assets/pizza.avif";
import burger from "../assets/burger.avif";
import useCartStore from "../zustand/store";

function Menu() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const addToCart = useCartStore((state) => state.addToCart); 

    const dishes = [
        { name: "Pasta", category: "Italian", originalPrice: "$15", discountedPrice: "$12", image: pasta, rating: 4 },
        { name: "Pizza", category: "Italian", originalPrice: "$18", discountedPrice: "$15", image: pizza, rating: 5 },
        { name: "Burger", category: "Fast Food", originalPrice: "$12", discountedPrice: "$10", image: burger, rating: 4.5 }
    ];

    const categories = ["All", "Italian", "Fast Food"];

    const updateScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    useEffect(() => {
        updateScrollButtons();
        if (scrollRef.current) {
            scrollRef.current.addEventListener("scroll", updateScrollButtons);
        }
        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener("scroll", updateScrollButtons);
            }
        };
    }, []);

    const filteredDishes = selectedCategory === "All" ? dishes : dishes.filter(dish => dish.category === selectedCategory);

    return (
        <section id="menu" className="mt-20 py-16 bg-gradient-to-br from-yellow-50 to-red-100">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-wide">🍽️ Explore Our Menu</h2>
      
        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border-2 text-sm font-semibold transition duration-300 ease-in-out ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-lg scale-105"
                  : "bg-white text-gray-800 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      
        {/* Scroll Buttons */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={scrollLeft}
            className={`px-5 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold shadow-md hover:shadow-xl transition ${
              !canScrollLeft ? "opacity-40 cursor-not-allowed" : ""
            }`}
            disabled={!canScrollLeft}
          >
            ⬅️
          </button>
          <button
            onClick={scrollRight}
            className={`px-5 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold shadow-md hover:shadow-xl transition ${
              !canScrollRight ? "opacity-40 cursor-not-allowed" : ""
            }`}
            disabled={!canScrollRight}
          >
            ➡️
          </button>
        </div>
      
        {/* Menu Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar px-8 py-6"
          style={{ scrollSnapType: "x mandatory" }}
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") scrollLeft();
            if (e.key === "ArrowRight") scrollRight();
          }}
        >
          {filteredDishes.map((dish, index) => (
            <div
              key={index}
              className="flex-none w-72 transform transition hover:scale-[1.05] hover:brightness-110 duration-300"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/30 backdrop-blur-md border border-white/30">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{dish.name}</h3>
                  <p className="text-gray-400 text-sm line-through">{dish.originalPrice}</p>
                  <p className="text-lg font-semibold text-red-500">{dish.discountedPrice}</p>
                  <div className="flex justify-center gap-1 mt-2 animate-pulse">
                    {[...Array(Math.round(dish.rating))].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 drop-shadow" />
                    ))}
                  </div>
                  <button
                    className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:scale-105 transition shadow-md hover:shadow-lg"
                    onClick={() => addToCart(dish)}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    );
}

export default Menu;
