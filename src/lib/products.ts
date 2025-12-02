import { mockProducts } from "../mockData/mockProducts";
import { ProductInterface } from "../interfaces/productInter";


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
            return product.category === category;
        })
        .sort((a, b) => b.sales - a.sales);
    return products;
}


// export async function getProducts(id: string) {
//     const res = await fetch(`https://api/products/${id}`);
//     if(!res.ok) {
//         throw new Error('Failed to fetch products');
//     }
//     return res.json();
// }