import React from "react";

const items = [
    {
        name: "Four Cheese Pizza",
        desc: "Free Delivery for first order",
        image:
            "https://thumbs.dreamstime.com/b/four-cheese-pizza-dark-background-freshly-baked-basil-leaves-273959593.jpg",
            price: 15.99
    },
    {
        name: "Margherita Pizza",
        desc: "Flat 15% discount on Sunday",
        image:
            "https://thumbs.dreamstime.com/b/margherita-pizza-black-surface-freshly-baked-basil-leaves-dark-textured-background-320453080.jpg",
            price: 12.99
    },
    {
        name: "Hot Dog",
        desc: "Get 20% off on your order",
        image:
            "https://s.yimg.com/ny/api/res/1.2/PQFUiKbkZ1mo20CWJleTcg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTc-/https://media.zenfs.com/en/the_daily_meal_185/12e36e01e9b2b5d2b2dca01d6b932503",
            price: 8.99
    },
    {
        name: "Burger King",
        desc: "Free Delivery for first order",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500",
            price: 10.99
    },
];

const PopularItems = () => {
    return (
        <section className="bg-gradient-to-br from-white to-orange-50 py-16 px-6">
            <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-800">
                    Our <span className="text-orange-500 underline decoration-wavy">Popular</span> Picks
                </h2>
                <button className="text-white bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full shadow transition-all duration-300">
                    Explore More →
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />

                        <div className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full uppercase font-bold shadow-sm">
                            Hot
                        </div>

                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                            <p className="text-gray-600 text-sm mb-5">{item.desc}</p>
                            <div className="flex justify-between items-center">
                                <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
                                    🍴 Order Now
                                </button>
                                <span className="text-green-600 font-bold text-lg">₹{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default PopularItems;
