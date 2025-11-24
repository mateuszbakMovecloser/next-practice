import { ProductInterface } from "../types/productInter";
import Image from "next/image";
import PriceComponent from "./PriceComponent";
import StarRating from "./StarRating";
import TagComponent from "./tagComponent";
import ButtonComponent from "./buttonComponent";

export default function ProductSlot({Product}: {Product: ProductInterface}) {
  
  return (
    <div className=" p-3 transition-transform duration-200 hover:scale-102">
      <div className="min-h-[100px]">
        <TagComponent tags={Product.tags} />
      </div>

      <div className="mb-3">
        <Image
          src={Product.image}
          alt={Product.name}
          width={100}
          height={100}
          className="w-full h-48 rounded-md object-contain"
           />
      </div>
        <hr className="border-gray-300 mb-3" />
        <h3 className="text-mg text-black h-16 mb-20">{Product.name} {Product.grams}g</h3>

        <div className="min-h-[100px]">
          <PriceComponent
            price={Product.price}
            regularPrice={Product.regularPrice}
            smallestPrice={Product.smallestPrice} 
            grams={Product.grams}
         />
        </div>
        
        <div className="min-h-[50px]">
            <StarRating 
              opinions={Product.rating} 
              />
        </div>
        <ButtonComponent
          text="Zamów" 
          quantity={Product.quantity} 
          />
    </div>
    
  )
}