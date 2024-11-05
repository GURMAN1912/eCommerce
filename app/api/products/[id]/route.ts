import { NextRequest } from 'next/server';
import { products } from '../../../data';


type Props = {
    params: {
        id: string;
    };
};

export async function GET(
    request: NextRequest,
    { params }: Props
) {
    try {
        const productId = parseInt(params.id);
        
        if (isNaN(productId)) {
            return Response.json(
                { message: 'Invalid product ID format' },
                { status: 400 }
            );
        }

        const product = products.find((p) => p.id === productId);
        
        if (!product) {
            return Response.json(
                { message: `Product with id ${params.id} not found` },
                { status: 404 }
            );
        }

        return Response.json(product);
        
    } catch (error) {
        console.error('Error fetching product:', error);
        return Response.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}