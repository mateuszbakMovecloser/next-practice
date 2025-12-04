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
    <main className="px-16 md:px-24 lg:px-32 xl:px-40">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-2xl leading-7 my-[30px] font-bold text-black text-center">
          BESTSELLERY - sprawdź, na czym polega ich wyjątkowość
        </h1>
        <ProductList products={products} />
      </div>
    </main>
  );
}
