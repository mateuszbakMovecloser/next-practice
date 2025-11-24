import { mockProducts } from "../MockData/MockProducts";
import { ProductInterface } from "../types/productInter";


export async function getProducts(id: string): Promise<ProductInterface> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const product = mockProducts.find(product => product.id === id);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
}

export async function getProductsByCategory(category: string): Promise<ProductInterface[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const products = mockProducts
        .filter(product => {
            console.log(`Checking ${product.name}: ${product.category} === ${category} ?`, product.category === category);
            return product.category === category;
        })
        .sort((a, b) => b.sales - a.sales);
    
    console.log('Filtered products:', products);
    return products;
}











// export async function getProducts(id: string) {
//     const res = await fetch(`https://api/products/${id}`);
//     if(!res.ok) {
//         throw new Error('Failed to fetch products');
//     }
//     return res.json();
// }