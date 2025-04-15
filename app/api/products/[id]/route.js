import { NextResponse } from 'next/server';
import clientPromise from '@/lib/connectDb';

export async function DELETE(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const { id } = await params;

    const result = await db.collection('products').deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
