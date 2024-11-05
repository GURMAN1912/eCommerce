import { products } from '../../../data';



export async function GET(
    request: Request,
    { params }: { params: { productId: string } }
) {
    try {
        const productId = parseInt(params.productId);
        
        if (isNaN(productId)) {
            return Response.json(
                { message: 'Invalid product ID format' },
                { status: 400 }
            );
        }

        const product = products.find((p) => p.id === productId);
        
        if (!product) {
            return Response.json(
                { message: `Product with id ${productId} not found` },
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