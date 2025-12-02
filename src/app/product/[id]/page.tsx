import { ProductInterface } from '../../../interfaces/productInter';
import { getProducts } from '../../../lib/products';

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  let product: ProductInterface | null = null;

  try {
    product = await getProducts(id);
  } catch (e) {
    console.error('Error loading product:', e);
  }

  if (!product) {
    return (
      <main className="text-black mx-auto p-8">
        <div>Produkt nie znaleziony</div>
      </main>
    );
  }

  return (
    <main className="text-black mx-auto p-8">        
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
      </div>
    </main>
  );
}