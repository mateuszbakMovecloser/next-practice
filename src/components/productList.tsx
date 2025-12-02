'use client'

import { ProductInterface } from "../interfaces/productInter";
import ProductSlot from "./productSlot";
import { useRouter } from "next/navigation";

interface ProductListProps {
  products: ProductInterface[];
}

export default function ProductList({ products }: ProductListProps) {
  const router = useRouter();

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="grid gap-4 product-grid">
      {products.length === 0 ? (
        <div className="text-center py-8 product-grid-empty">
          No products found
        </div>
      ) : (
        products.map(product => (
          <div 
            key={product.id} 
            onClick={() => handleProductClick(product.id)}
            className="cursor-pointer hover:shadow-2xl transition-all duration-200 ease-in-out relative hover:z-10 hover:scale-102 overflow-hidden"
          >
            <ProductSlot Product={product} />
          </div>
        ))
      )}
    </div>
  );
}