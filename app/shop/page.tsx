// /pages/products.tsx
"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface Product {
    id: number;
    name: string;
    img: StaticImageData;
    price: number;
    category: string;
    rating: number;
    onSale: boolean;
}

const ProductListingPage: React.FC = () => {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("/api/products");
                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleCategoryChange = (category: string | null) => {
        setSelectedCategory(category);
        setFilteredProducts(category ? products.filter(product => product.category === category) : products);
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Product Listing</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className={`px-4 py-2 rounded ${!selectedCategory ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange(null)}>All</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Electronics' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Electronics')}>Electronics</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Clothing' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Clothing')}>Clothing</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Home' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Home')}>Home</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Sports' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Sports')}>Sports</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Books' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Books')}>Books</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Food' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Food')}>Food</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Beauty' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Beauty')}>Beauty</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Health' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Health')}>Health</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Toys' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Toys')}>Toys</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Furniture' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Furniture')}>Furniture</button>
                    <button className={`px-4 py-2 rounded ${selectedCategory === 'Jewelry' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => handleCategoryChange('Jewelry')}>Jewelry</button>
                </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="flex flex-col justify-between border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 bg-background">
                        <div>
                            <Image src={product.img} alt={product.name} width={200} height={200} className="object-contain mx-auto mb-4" />
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-text">{product.name}</h3>
                                <p className="text-lg font-bold text-text">${product.price}</p>
                                <p className="text-gray-600">{product.category}</p>
                                <p className="text-yellow-500">Rating: {product.rating} ★</p>
                                {product.onSale && <p className="text-green-600 font-semibold">On Sale!</p>}
                            </div>
                        </div>
                        <button
                            onClick={()=>router.push("/product/"+product.id)}
                         className="mt-4 bg-primary text-white w-full py-2 rounded-lg hover:bg-primary-dark transition">View Details</button>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default ProductListingPage;
