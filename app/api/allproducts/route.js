// app/api/orders/route.ts (or route.js depending on your setup)

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/connectDb'; // adjust path based on your project structure

export async function GET() {
  const client = await clientPromise;
  const db = client.db(); // or db('your-db-name') if needed
  const allproducts = await db.collection('allproducts').find().toArray();

  return NextResponse.json({ allproducts });
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const body = await req.json();

    // Validate required fields
    const { _id, name, price, image, description, category, stock, rating } = body;

    if (!_id || !name || price === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Convert ID to a number, since you're using number IDs in MongoDB
    const product = {
      _id: parseInt(_id),
      name,
      price,
      image,
      description,
      category,
      stock,
      rating
    };

    const result = await db.collection('allproducts').insertOne(product);

    return NextResponse.json({ message: 'Product added', product: result }, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error); // Important for debugging
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

