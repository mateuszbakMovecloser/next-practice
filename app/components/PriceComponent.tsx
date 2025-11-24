import { priceComponentsInterface } from "../types/priceComponentsInter";

export default function PriceComponent({price, regularPrice, smallestPrice, grams}: priceComponentsInterface) {
    const discountPercent = regularPrice > price ? Math.round(((regularPrice - price) / regularPrice) * 100) : 0;
    const hasDiscount = discountPercent > 0;
    
    

    return (
        <div className="space-y-0 text-gray-500 text-[10px] leading-[1.1]">
            <div className="flex items-center">
                <span className="text-lg font-bold text-red-500 mb-2">{price} zł</span>
            </div>
                
                <div>
                    {((price/grams)*100).toFixed(2)} zł / 100g
                </div>
            
            {hasDiscount && (
                <div className="flex items-center gap-2">
                    Cena regularna: <span className="line-through">
                         {regularPrice} zł
                    </span>

                    <span className="text-red-500 font-semibold">
                        -{discountPercent}%
                    </span>
                </div>
            )}

            {hasDiscount ?(
                <div>
                    Najniższa cena w okresie 30 dni: <span className="line-through">{smallestPrice} zł</span>
                    <span className="text-red-500 font-semibold ml-1">
                        -{discountPercent}%
                    </span>
                </div>
            ) : (
                <div>
                     Najniższa cena w okresie 30 dni: {smallestPrice} zł
                </div>
            )}
        </div>

    )
}