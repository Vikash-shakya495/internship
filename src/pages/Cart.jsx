import React from "react";
import useCartStore from "../zustand/store";

function Cart() {
    const { cart } = useCartStore();

    return (
        <div className="p-4 mt-20">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <div className="text-center py-10">
                    <h2 className="text-2xl font-semibold text-gray-600 mb-2">🛒 Your cart is feeling lonely!</h2>
                    <p className="text-gray-500 mb-4">You haven’t added anything yet. Let’s fix that!</p>
                    <img className='mx-auto w-1/3'
                        src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg" alt="" />
                    <a
                        href="/menu"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition duration-300"
                    >
                        Browse Menu
                    </a>
                </div>
            ) : (
                <>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
                        {cart.map((item, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-40 object-cover rounded-t-2xl"
                                />
                                <div className="p-4 space-y-2">
                                    <h2 className="text-xl font-extrabold text-gray-800 tracking-wide">
                                        {item.name}{" "}
                                        <span className="text-sm text-gray-500 font-medium">x {item.quantity}</span>
                                    </h2>
                                    <p className="text-sm text-gray-600 font-medium">
                                        Category: <span className="text-pink-600 font-semibold">{item.category}</span>
                                    </p>
                                    <p className="text-sm font-medium text-gray-700">
                                        Original Price:{" "}
                                        <span className="line-through text-red-500">{item.originalPrice}</span>
                                    </p>
                                    <p className="text-base font-bold text-green-600">
                                        Discounted: {item.discountedPrice}
                                    </p>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                        {[...Array(Math.round(item.rating))].map((_, i) => (
                                            <span key={i}>⭐</span>
                                        ))}
                                        <span className="ml-1 text-gray-700">({item.rating})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </>
            )}
        </div>
    );
}

export default Cart;
