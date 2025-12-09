import ProductList from "../components/productList";
import { ProductInterface } from "../interfaces/productInter";
import { getProductsByCategory } from "../lib/products";

export default async function Home() {
  let products: ProductInterface[] = [];
  let error = false;
  
  try {
    products = await getProductsByCategory("bestseller");
  } catch (err) {
    console.error('Error loading products:', err);
    error = true;
  }
  
  if (error) {
    return <div className="text-center py-8">Błąd podczas ładowania produktów</div>;
  }
  
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[10rem]">
      <h1 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] leading-tight sm:leading-7 my-6 md:my-[30px] font-medium text-black text-center w-full">
        BESTSELLERY - sprawdź, na czym polega ich wyjątkowość
      </h1>
      <div className="mx-auto max-w-[1200px]">
        <ProductList products={products} />
      </div>
    </main>
  );
}