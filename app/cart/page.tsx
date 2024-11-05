"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../store/store";
import { removeFromCart, clearCart, incrementQuantity, decrementQuantity } from '../store/cartSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CartPage: React.FC = () => {
    const router=useRouter();
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleIncrement = (id: number) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id: number) => {
        dispatch(decrementQuantity(id));
    };

    return (
        <div className="container mx-auto px-16 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-center text-lg text-gray-600">Your cart is empty. Start adding some products!</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="border border-gray-200 bg-background p-4 rounded-lg shadow-md transition hover:shadow-lg">
                                <Image src={item.img} alt={item.name} className="w-1/2 mx-auto object-cover mb-4 rounded" />
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 transition"
                                    >
                                        -
                                    </button>
                                    <span className="text-gray-600">Quantity: {item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrement(item.id)}
                                        className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 transition"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600 transition"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-4 border-t border-gray-200">
                        <h2 className="text-2xl font-bold text-right">Total Price: ${totalPrice.toFixed(2)}</h2>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handleClearCart}
                                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
                            >
                                Clear Cart
                            </button>
                            <button
                             onClick={()=>router.push("/checkout")}
                                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
