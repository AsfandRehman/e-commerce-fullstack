import { NextResponse } from 'next/server';
import clientPromise from '@/lib/connectDb';

// GET: Get a single product by _id
export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: 'Missing product ID' }, { status: 400 });
    }

    const numericId = parseInt(id); // your custom numeric _id
    const product = await db.collection('allproducts').findOne({ _id: numericId });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

// PUT: Update a product by _id
export async function PUT(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: 'Missing product ID' }, { status: 400 });
    }

    const updatedProductData = await req.json();

    if (!updatedProductData || !updatedProductData.name || updatedProductData.price === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const numericId = parseInt(id);
    const { name, price, image, description, category, stock, rating } = updatedProductData;
    const sanitizedData = { name, price, image, description, category, stock, rating };

    const result = await db.collection('allproducts').updateOne(
      { _id: numericId },
      { $set: sanitizedData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const updatedProduct = await db.collection('allproducts').findOne({ _id: numericId });
    return NextResponse.json({ message: 'Updated', product: updatedProduct }, { status: 200 });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

// DELETE: Delete a product by _id
export async function DELETE(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const { id } = await params;

    if (!id) return NextResponse.json({ error: 'Missing product ID' }, { status: 400 });

    const numericId = parseInt(id); // Convert to number for matching _id
    const result = await db.collection('allproducts').deleteOne({ _id: numericId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Deleted' });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
