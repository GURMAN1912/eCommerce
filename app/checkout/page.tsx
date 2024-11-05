"use client";

import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CheckoutForm from '../components/CheckoutForm';
import convertToSubcurrency from '../components/convertToSubcurrency';

// Load Stripe with the public key
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
    throw new Error("Stripe public key is not set");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CheckoutPage: React.FC = () => {
    // Select cart items from the Redux store
    const cartItems = useSelector((state: RootState) => state.cart.items);
    
    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: convertToSubcurrency(totalAmount),
                    currency: "usd",
                }}
            >
                <CheckoutForm amount={totalAmount} />
            </Elements>
        </div>
    );
};

export default CheckoutPage;
