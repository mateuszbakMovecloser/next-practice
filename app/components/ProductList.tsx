'use client'

import { ProductInterface } from "../types/productInter";
import ProductSlot from "./ProductSlot";
import { useRouter } from "next/navigation";

interface ProductListProps {
  products: ProductInterface[];
  items?: number; 
}

export default function ProductList({ products, items = 4 }: ProductListProps) {
  const router = useRouter();

  const handleProductClick = () => {
    // Przekierowanie do strony szczegółów produktu
    router.push(`/product`);
  };

  return (
    <div 
      className="grid gap-3" 
      style={{ gridTemplateColumns: `repeat(${items}, minmax(230px, 1fr))` }}
    >
      {products.length === 0 ? (
        <div className="text-center py-8" style={{ gridColumn: '1 / -1' }}>
          No products found
        </div>
      ) : (
        products.map(product => (
          <div 
            key={product.id} 
            onClick={() => handleProductClick()}
            className="cursor-pointer hover:shadow-lg transition-shadow rounded-md"
          >
            <ProductSlot Product={product} />
          </div>
        ))
      )}
    </div>
  );
}