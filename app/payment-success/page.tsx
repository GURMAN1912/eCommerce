"use client";
import React, { use, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';

const PaymentSuccessPage: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearCart());
    }, []);

    return (
        <div className="container mx-auto px-4 py-12 text-center h-screen justify-center my-auto">
            <h1 className="text-4xl font-bold text-green-600 mb-6">Payment Successful!</h1>
            <p className="text-lg text-gray-700 mb-4">
                Thank you for your purchase! Your order has been confirmed and will be processed shortly.
            </p>
            

            <div className="space-y-4">
                <Link href="/shop" className="text-primary hover:text-primary-dark font-medium text-lg">
                    Continue Shopping
                </Link>
                <br />
            </div>
        </div>
    );
};

export default PaymentSuccessPage;
