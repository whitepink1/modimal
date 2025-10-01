import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/lib/models/Product';
import { parseProductSummaries, ProductSummary } from '@/lib/Schemas/productSummary';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'GET') {
    const bestSellerIds = [2, 8, 7, 4];

    try {
      const products = await Product.find(
        { id: { $in: bestSellerIds } },
        { name: 1, type: 1, price: 1, colors: 1, image: 1, id: 1, _id: 0 }
      );

      const sortedProducts = bestSellerIds
        .map(id => products.find(p => p.id === id))
        .filter(Boolean);

      const summaries: ProductSummary[] = parseProductSummaries(sortedProducts);
      res.setHeader('Cache-Control', 's-maxage=3600');
      res.status(200).json(summaries);
    } catch (error) {
      console.error('Error fetching best sellers:', error);
      res.status(500).json({ error: 'Failed to fetch best sellers' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}