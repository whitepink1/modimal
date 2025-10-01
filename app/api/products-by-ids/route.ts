import connectToDatabase from '@/lib/mongodb';
import Product from '@/lib/models/Product';
import { ProductSummary, parseProductSummaries } from '@/lib/Schemas/productSummary';

export async function GET(request: Request) {
  await connectToDatabase();

  const { searchParams } = new URL(request.url);
  const idsParam = searchParams.get('ids');
  const bestSellerIds = idsParam ? idsParam.split(',').map(Number) : [];

  try {
    const products = await Product.find(
      bestSellerIds.length > 0 ? { id: { $in: bestSellerIds } } : {},
      { id: 1, date: 1, name: 1, type: 1, price: 1, colors: 1, image: 1, _id: 0  }
    );
    const summaries: ProductSummary[] = parseProductSummaries(products);
    return new Response(JSON.stringify(summaries), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}