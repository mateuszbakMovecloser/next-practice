import { PriceComponentsInterface } from "../interfaces/priceComponentsInter";

const calculateDiscountPercent = (price: number, regularPrice: number) => {
    return regularPrice > price ? Math.round(((regularPrice - price) / regularPrice) * 100) : 0;
}

export default function Price({price, regularPrice, smallestPrice, grams}: PriceComponentsInterface) {
    const discountPercent = calculateDiscountPercent(price, regularPrice);
    const hasDiscount = discountPercent > 0;
    const smallestPriceDiscountPercent = calculateDiscountPercent(price, smallestPrice);
    
    

    return (
<div className="space-y-0 text-gray-500 text-left relative z-[999] product-card-price">        
        <div className="flex items-center text-lg mb-2 font-weight-500"> {/*tutaj sprawdzic font-size: 16px*/}
            {hasDiscount? (
                <span className="text-[#d9000c]">{price} zł</span>
            ):
            (
                <span className="text-[#2b343d]">{price} zł</span>
            )
            }
            </div>
                
                <div className="text-[8px] text-[#7f848a]">
                    {((price/grams)*100).toFixed(2)} zł / 100g
                </div>
            
            {hasDiscount && (
                <div className="flex items-center gap-2 text-[8px] text-[#7f848a]">
                    Cena regularna: <span className="line-through">
                         {regularPrice} zł
                    </span>

                    <span className="text-red-500 font-semibold">
                        -{discountPercent}%
                    </span>
                </div>
            )}

            {hasDiscount ?(
                <div className="text-[8px] text-[#7f848a]">
                    Najniższa cena w okresie 30 dni: <span className="line-through">{smallestPrice} zł</span>
                    <span className="text-red-500 font-semibold ml-1">
                        -{smallestPriceDiscountPercent}%
                    </span>
                </div>
            ) : (
                <div className="text-[8px] text-[#7f848a]">
                     Najniższa cena w okresie 30 dni: {smallestPrice} zł
                </div>
            )}
        </div>

    )
}