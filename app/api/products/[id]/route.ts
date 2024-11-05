// /pages/api/products/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../data'; // Make sure this path is correct
import { NextResponse } from 'next/server';

export function GET(req: NextApiRequest, { params }: { params: { id: string } }) {
    const { id } = params; // Get the id from the params
    const product = products.find((p) => p.id === parseInt(id)); // Find the product by id

    if (product) {
        return NextResponse.json(product); // Return the found product
    } else {
        return NextResponse.json({ message: `Product with id ${id} not found` }); // Return a not found message
    }
}
