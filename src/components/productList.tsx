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
    <div className="grid gap-5 product-grid">
      {products.length === 0 ? (
        <div className="text-center py-8 product-grid-empty">
          No products found
        </div>
      ) : (
        products.map(product => (
          <div 
            key={product.id} 
            onClick={() => handleProductClick(product.id)}
            className="product-card-wrapper"
          >
            <ProductSlot product={product} />
          </div>
        ))
      )}
    </div>
  );
}