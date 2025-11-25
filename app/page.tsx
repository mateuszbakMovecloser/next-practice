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
      <div className="mb-8xw text-center">
        <h1 className="text-3xl font-bold text-black mb-10">         
        BESTSELLERY - sprawdź, na czym polega ich wyjątkowość
        </h1>
      </div>
      
      <ProductList 
        products={products} 
        items={5} 
      />
    </main>
  );
}
