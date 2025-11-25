export interface ProductInterface {
    id: string;
    name: string;
    price: number;
    regularPrice: number;
    smallestPrice: number;
    rating: number;
    image: string;
    category: string;
    sales: number;
    grams: number;
    tags: string[];
    quantity: number;
    timeOfDay: string[];
}