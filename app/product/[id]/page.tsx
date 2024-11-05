"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import axios from 'axios';
import Image, { StaticImageData } from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/app/store/cartSlice';
import ProductHighlights from '@/app/components/ProductHighlight';
import { RootState } from "../../store/store";
import toast from 'react-hot-toast';

interface Product {
    id: number;
    name: string;
    img: StaticImageData;
    price: number;
    category: string;
    rating: number;
    onSale: boolean;
    description: string;
}

const ProductDetailPage: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const id = pathname.split('/').pop();
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1); // Default to 1 for "Buy Now" functionality
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    // Fetch product details
    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            try {
                const response = await axios.post('/api/products/134', {
                    productId: id, // Send productId in the request body
                });
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchProduct();
    }, [id]);

    // Set initial quantity if product is already in the cart
    useEffect(() => {
        if (product) {
            const cartItem = cartItems.find(item => item.id === product.id);
            if (cartItem) {
                setQuantity(cartItem.quantity);
            }
        }
    }, [product, cartItems]);

    // Handler function for adding to cart
    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                quantity,
            }));
            toast.success('Product added to cart!');
        }
    };

    // Handler for "Buy Now"
    const handleBuyNow = () => {
        if (product) {
            // Add product to cart with selected quantity
            dispatch(addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                quantity,
            }));
            // Navigate to the checkout page
            router.push('/checkout');
        }
    };

    // Handlers for incrementing and decrementing quantity
    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <section className="flex flex-col min-h-screen md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                    <Image
                        src={product.img}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-contain mx-auto shadow-lg rounded-xl"
                    />
                </div>
                <div className="w-full md:w-1/2 px-4 py-2 rounded-[28px]">
                    <h1 className="text-3xl font-bold text-text mb-4">{product.name}</h1>
                    <p className="text-lg text-gray-600 mb-2">Category: {product.category}</p>
                    <p className="text-lg text-gray-600 mb-2">Rating: {product.rating} ★</p>
                    {product.onSale && <p className="text-green-600 font-semibold mb-4">On Sale!</p>}
                    <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
                    <p className="text-lg text-gray-700 mb-6">{product.description}</p>

                    <div className="flex items-center mb-4">
                        <button
                            onClick={decrementQuantity}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-300 transition"
                        >
                            -
                        </button>
                        <span className="px-4 py-2 border-t border-b">{quantity}</span>
                        <button
                            onClick={incrementQuantity}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-300 transition"
                        >
                            +
                        </button>
                    </div>

                    <div className="flex space-x-4">
                        <button
                            onClick={handleAddToCart}
                            className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark transition"
                        >
                            {cartItems.find(item => item.id === product.id) ? 'Update Cart' : 'Add to Cart'}
                        </button>
                        <button
                            onClick={handleBuyNow}
                            className="bg-secondary-dark text-white px-4 py-2 rounded-lg shadow hover:bg-secondary transition"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </section>
            <ProductHighlights />
        </main>
    );
};

export default ProductDetailPage;
