// app/api/products/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/connectDb';
import { addProduct } from '@/images/assets';

export async function POST(req) {
  const body = await req.json();
  const { _id, name, price, description, image, category, stock, rating } = body;

  if (!name || !price || !description) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const newProduct = {
    _id,
    name,
    price: parseFloat(price),
    image,
    description,
    category,
    stock,
    rating,
    createdAt: new Date(),
  };

  try {
    const client = await clientPromise;
    const db = client.db(); // optionally pass db name like db('mydb')
    const result = await db.collection('products').insertOne(newProduct);

    // Add to in-memory array
    addProduct({ ...newProduct, _id: result.insertedId });

    return NextResponse.json({ success: true, product: { ...newProduct, _id: result.insertedId } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to add product to database' }, { status: 500 });
  }
}

export async function GET() {
    const client = await clientPromise;
    const db = client.db();
    const products = await db.collection('products').find().toArray();
  
    return NextResponse.json({ products });
  }
