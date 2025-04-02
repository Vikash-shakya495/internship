import React, { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import pasta from "../assets/pasta.avif";
import pizza from "../assets/pizza.avif";
import burger from "../assets/burger.avif";

function Menu() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const dishes = [
        { name: "Pasta", originalPrice: "$15", discountedPrice: "$12", image: pasta, rating: 4 },
        { name: "Pizza", originalPrice: "$18", discountedPrice: "$15", image: pizza, rating: 5 },
        { name: "Burger", originalPrice: "$12", discountedPrice: "$10", image: burger, rating: 4.5 }
    ];

    // Update scroll button state
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

    return (
        <section id="menu" className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-6">Menu</h2>

            {/* Scroll Buttons */}
            <div className="flex justify-center gap-4 mb-4">
                <button 
                    onClick={scrollLeft} 
                    className={`px-4 py-2 bg-gray-800 text-white rounded-md transition ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={!canScrollLeft}
                >
                    ←
                </button>
                <button 
                    onClick={scrollRight} 
                    className={`px-4 py-2 bg-gray-800 text-white rounded-md transition ${!canScrollRight ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={!canScrollRight}
                >
                    →
                </button>
            </div>

            {/* Menu Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto no-scrollbar px-8 py-4"
                style={{ scrollSnapType: "x mandatory" }}
                tabIndex="0"
                onKeyDown={(e) => {
                    if (e.key === "ArrowLeft") scrollLeft();
                    if (e.key === "ArrowRight") scrollRight();
                }}
            >
                {dishes.map((dish, index) => (
                    <div key={index} className="flex-none w-64">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-110 transition duration-300">
                            {/* Menu Image with Hover Zoom Effect */}
                            <img 
                                src={dish.image} 
                                alt={dish.name} 
                                className="w-full h-48 object-cover transition duration-300 hover:scale-110" 
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold">{dish.name}</h3>
                                {/* Display Prices with Discount */}
                                <p className="text-gray-500 line-through">{dish.originalPrice}</p>
                                <p className="text-red-600 font-semibold">{dish.discountedPrice}</p>
                                {/* Star Ratings */}
                                <div className="flex justify-center mt-2">
                                    {[...Array(Math.round(dish.rating))].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-500" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Menu;
