"use client"
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Header = () => {
    const cartItem = useSelector((state: RootState) => state.cart.items);
    const length = cartItem.length;

    return (
        <header className="bg-background py-4 px-6 shadow-xl">
            <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
                
                {/* Logo Section */}
                <Link href={"/"}>
                    <h1 className="text-3xl font-semibold text-primary">E-Commerce</h1>
                </Link>

                {/* Search Bar */}
                <div className="hidden md:flex items-center space-x-2 w-1/3">
                    <input 
                        type="text" 
                        placeholder="Search products" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark transition">
                        Search
                    </button>
                </div>

                {/* User Actions */}
                <div className="flex items-center space-x-4">
                    <Link href="/cart" className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary-dark transition">
                        My Cart {length > 0 && `(${length})`}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
