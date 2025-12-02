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
    <main className="w-full px-16 md:px-24 lg:px-32 xl:px-40">      
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="mb-8 text-center">
          <h1 className="text-2xl leading-7 my-[30px] font-bold text-black">         
            BESTSELLERY - sprawdź, na czym polega ich wyjątkowość
          </h1>
        </div>
        
        <ProductList products={products} />
      </div>
    </main>
  );
}
