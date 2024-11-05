// /app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../data';


export async function GET(
  request: NextRequest,
  context: {
    params: {
      id: string;
    };
  }
) {
  try {
    const { id } = context.params;

    if (!id) {
      return NextResponse.json(
        { message: 'Product ID is required' },
        { status: 400 }
      );
    }

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
      return NextResponse.json(
        { message: `Product with id ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { message: "internal error" },
      { status: 500 }
    );
  }
}