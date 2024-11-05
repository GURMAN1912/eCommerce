// /components/ProductHighlights.tsx
"use client";
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

const ProductHighlights: React.FC = () => {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching featured products:", error);
            }
        };

        fetchProducts();
    }, []);
    const randomProduct=products?.sort(()=>Math.random()-0.5);

    return (
        <section className="py-8">
            <h2 className="text-5xl text-center text-text font-bold mb-6">Product Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                {randomProduct.slice(0,6).map((product) => (
                    <div 
                        onClick={()=>router.push("/product/"+product.id)}
                        key={product.id} 
                        className="flex flex-col justify-between border bg-background p-4 rounded-[28px] shadow-lg hover:shadow-xl hover:cursor-pointer transition-shadow duration-200"
                    >
                        <Image
                            src={product.img}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="object-contain mx-auto mb-4"
                            layout="fixed"
                        />
                        <div className="text-center flex-grow my-2">
                            <h3 className="text-lg font-semibold text-text">{product.name}</h3>
                            <p className="text-lg font-bold text-text">${product.price}</p>
                            <p className="text-gray-600">Category: {product.category}</p>
                            <p className="text-yellow-500">Rating: {product.rating} ★</p>
                            {product.onSale && (
                                <span className="text-green-600 font-semibold">On Sale!</span>
                            )}
                        </div>
                        <div className="flex justify-between mt-4">
                            <button className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark transition">Add to Cart</button>
                            <button className="bg-secondary-dark text-white px-4 py-2 rounded-lg shadow hover:bg-secondary transition">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductHighlights;
