import { ProductInterface } from "../interfaces/productInter";
import Image from "next/image";
import PriceComponent from "./price";
import StarRating from "./starRating";
import TagComponent from "./tag";
import ButtonComponent from "./button";
import TimeOfDay from "./timeOfDay";

export default function ProductSlot({Product}: {Product: ProductInterface}) {
  
  return (
    <div className="px-6 py-4 h-full flex flex-col">
      {/* Sekcja tagów - dynamiczna wysokość */}
      <div>
        <TagComponent tags={Product.tags} />
      </div>

      {/* Środkowa część - flex-grow zajmie pozostałą przestrzeń */}
      <div className="flex-grow flex flex-col">
        <div className="mb-3">
          <Image
            src={Product.image}
            alt={Product.name}
            width={256}
            height={256}
            quality={75}
            className="product-card-image"
          />
        </div>
        <hr className="border-gray-300 mb-3" />
        
        {/* Nazwa produktu - jak w oryginale */}
        <div className="product-card-description">
          <h3>
            {Product.name} {Product.grams}g
          </h3>
        </div>

        <div className="h-[115px] md:h-[90px] md:my-[12px]">
          <PriceComponent
            price={Product.price}
            regularPrice={Product.regularPrice}
            smallestPrice={Product.smallestPrice} 
            grams={Product.grams}
          />
        </div>
        
        <div className="flex items-center justify-between min-h-[50px]">
          <TimeOfDay 
            timeOfDay={Product.timeOfDay} 
          />
          <StarRating 
            opinions={Product.rating} 
          />
        </div>
      </div>

      {/* Guzik - zawsze na dole, mt-auto go "wypycha" */}
      <div className="mt-auto">
        <ButtonComponent
          text="Zamów" 
          quantity={Product.quantity} 
        />
      </div>
    </div>
  )
}