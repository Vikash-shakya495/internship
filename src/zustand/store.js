import { create } from 'zustand';

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (dish) => set((state) => {
        const existingCart = state.cart.find((existDish) => existDish.name === dish.name);
        if(existingCart){
            return {
                cart: state.cart.map((item) => 
                item.name === dish.name ? {...item, quantity: item.quantity + 1} : item)
            }
        }
        else{
            return {cart: [...state.cart, {...dish, quantity: 1}]}
        }
    }) 
}));


export default useCartStore;