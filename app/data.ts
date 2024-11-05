import { NextResponse } from 'next/server';
import iphone from './assests/iphone.jpg';
import tshirt from './assests/tshirt.jpeg';
import book from './assests/books.jpeg';
import table from './assests/table.jpeg';
import shoes from './assests/shoes.jpeg';
import bat from './assests/bat.jpeg';
import watch from './assests/watch.jpeg';
import jewelry from './assests/jewelry.jpeg';
import food from './assests/food.jpeg';
import beauty from './assests/beauty.webp';
import toys from './assests/toys.jpeg';
import furniture from './assests/furniture.jpeg';
import health from './assests/health.jpeg';
import { StaticImageData } from 'next/image'; // Import StaticImageData

// Define the product type
interface Product {
    id: number;
    name: string;
    img: StaticImageData; // Change type to StaticImageData
    price: number;
    category: string;
    rating: number;
    onSale: boolean;
    description: string;
}

export const products: Product[] = [
    { id: 1, name: "Product A", img: iphone, price: 20, category: "Electronics", rating: 4.5, onSale: true, description: "High-quality smartphone with a sleek design and powerful features." },
    { id: 2, name: "Product B", img: tshirt, price: 50, category: "Clothing", rating: 4.7, onSale: false, description: "Comfortable cotton T-shirt with a trendy design and vibrant colors." },
    { id: 3, name: "Product C", img: table, price: 15, category: "Home", rating: 4.8, onSale: true, description: "Sturdy wooden table perfect for dining rooms or living areas." },
    { id: 4, name: "Product D", img: bat, price: 30, category: "Sports", rating: 4.2, onSale: false, description: "Durable cricket bat made from high-quality wood for a superior grip." },
    { id: 5, name: "Product E", img: book, price: 25, category: "Books", rating: 4.6, onSale: true, description: "Bestselling novel that keeps readers engaged with a thrilling plot." },
    { id: 6, name: "Product F", img: food, price: 40, category: "Food", rating: 4.9, onSale: false, description: "Organic snack pack with assorted nuts and dried fruits." },
    { id: 7, name: "Product G", img: beauty, price: 10, category: "Beauty", rating: 4.3, onSale: true, description: "Moisturizing face cream for soft and radiant skin." },
    { id: 8, name: "Product H", img: health, price: 35, category: "Health", rating: 4.7, onSale: false, description: "Vitamins and supplements to support a healthy lifestyle." },
    { id: 9, name: "Product I", img: toys, price: 60, category: "Toys", rating: 4.5, onSale: true, description: "Fun and educational toy set for children of all ages." },
    { id: 10, name: "Product J", img: furniture, price: 45, category: "Furniture", rating: 4.8, onSale: false, description: "Modern and stylish sofa, perfect for any living room." },
    { id: 11, name: "Product K", img: jewelry, price: 70, category: "Jewelry", rating: 4.2, onSale: true, description: "Elegant necklace made with premium-quality materials." },
    { id: 12, name: "Product L", img: shoes, price: 80, category: "Footwear", rating: 4.9, onSale: true, description: "Comfortable running shoes with superior cushioning and durability." },
    { id: 13, name: "Product M", img: watch, price: 120, category: "Accessories", rating: 4.8, onSale: false, description: "Luxury wristwatch with a classic design and high-precision movement." },
    { id: 14, name: "Product N", img: jewelry, price: 150, category: "Jewelry", rating: 4.7, onSale: true, description: "Beautiful bracelet with an intricate design, perfect for special occasions." },
    { id: 15, name: "Product O", img: iphone, price: 900, category: "Electronics", rating: 4.9, onSale: true, description: "Latest model smartphone with advanced features and a stunning display." },
];