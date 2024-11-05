import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../data';

export async function GET(
    request: NextRequest,
    { params }: { params: { productId: number } }
) {
    try {
        const productId = Number(params.productId);
        
        if (isNaN(productId)) {
            return NextResponse.json(
                { message: 'Invalid product ID format' },
                { status: 400 }
            );
        }

        const product = products.find((p) => p.id === productId);
        
        if (!product) {
            return NextResponse.json(
                { message: `Product with id ${productId} not found` },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
        
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}