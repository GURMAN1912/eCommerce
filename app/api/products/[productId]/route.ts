import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../data';

export async function GET(
    request: NextRequest,
    context: { params: { productId: string } }
) {
    const { productId } = await context.params; // Ensure params are awaited

    try {
        const parsedProductId = Number(productId); // Convert to number

        if (isNaN(parsedProductId)) {
            return NextResponse.json(
                { message: 'Invalid product ID format' },
                { status: 400 }
            );
        }

        const product = products.find((p) => p.id === parsedProductId);

        if (!product) {
            return NextResponse.json(
                { message: `Product with id ${parsedProductId} not found` },
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
