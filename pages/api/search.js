// pages/api/search.js

import clientPromise from '@/lib/connectDb'; // Adjust based on how you connect to MongoDB

export default async function handler(req, res) {
    const { q } = req.query;
  if (req.method !== 'GET') return res.status(405).end();


  try {
    const client = await clientPromise;
    const db = client.db(); // default DB or specify e.g., db("yourdbname")
    const products = await db
      .collection('allproducts')
      .find({ name: { $regex: q, $options: 'i' } }) // case-insensitive search
      .toArray();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
}
