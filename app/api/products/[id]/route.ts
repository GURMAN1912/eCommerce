// /app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../data'; // Adjust the path as necessary

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params; // Get the id from the params
    const product = products.find((p) => p.id === parseInt(id)); // Find the product by id

    if (product) {
        return NextResponse.json(product); // Return the found product
    } else {
        return NextResponse.json({ message: `Product with id ${id} not found` }, { status: 404 }); // Return a not found message
    }
}
