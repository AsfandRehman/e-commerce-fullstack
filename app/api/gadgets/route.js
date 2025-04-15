// app/api/orders/route.ts (or route.js depending on your setup)

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/connectDb'; // adjust path based on your project structure

export async function GET() {
  const client = await clientPromise;
  const db = client.db(); // or db('your-db-name') if needed
  const gadgets = await db.collection('gadgets').find().toArray();

  return NextResponse.json({ gadgets });
}
