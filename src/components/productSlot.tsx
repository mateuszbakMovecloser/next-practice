import { ProductInterface } from "../interfaces/productInter";
import Image from "next/image";
import PriceComponent from "./price";
import StarRating from "./starRating";
import TagComponent from "./tag";
import ButtonComponent from "./button";
import TimeOfDay from "./timeOfDay";

export default function ProductSlot({product}: {product: ProductInterface}) {
  
  return (
    <div className="px-6 py-4 h-full flex flex-col">
    
      <div className="min-h-[45px]">
        <TagComponent tags={product.tags} />
      </div>

      <div className="flex-grow flex flex-col">
        <div className="mb-3">
          <Image
            src={product.image}
            alt={product.name}
            width={256}
            height={256}
            quality={75}
            className="product-card-image"
          />
        </div>
        <hr className="border-gray-300 mb-3" />
        
        <div className="product-card-description">
          <h3>
            {product.name} {product.grams}g
          </h3>
        </div>

        <div className="h-[115px] md:h-[90px] md:my-[12px]">
          <PriceComponent
            price={product.price}
            regularPrice={product.regularPrice}
            smallestPrice={product.smallestPrice} 
            grams={product.grams}
          />
        </div>
        
        <div className="flex items-center justify-between min-h-[50px] mb-3">          <TimeOfDay 
            timeOfDay={product.timeOfDay} 
          />
          <StarRating 
            opinions={product.rating} 
          />
        </div>
      </div>


      <div className="mt-auto">
        <ButtonComponent
          text="Zamów" 
          quantity={product.quantity} 
        />
      </div>
    </div>
  )
}