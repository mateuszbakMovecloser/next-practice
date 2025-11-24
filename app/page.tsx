'use client'; // Dodaj jeśli nie masz

import { useState, useEffect } from 'react';
import ProductList from "./components/ProductList";
import { ProductInterface } from "./types/productInter";
import { getProductsByCategory } from "./Lib/Products";

export default function Home() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory("bestseller");
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  if (loading) {
    return <div className="text-center py-8">Loading products...</div>;
  }
  
  return (
    <main className="container mx-auto px-45">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Najlepiej sprzedające się produkty
        </h1>
        <p className="text-gray-600">
          Odkryj nasze bestsellery tego miesiąca
        </p>
      </div>
      
      <ProductList 
        products={products} 
        items={5} 
      />
    </main>
  );
}
