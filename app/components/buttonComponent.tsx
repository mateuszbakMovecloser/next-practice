import { buttonComponentInterface } from "../types/buttonComponent";
import { useRouter } from "next/navigation";

export default function ButtonComponent({text, quantity}: buttonComponentInterface) {
    const buttonText = quantity > 0 ? text : "brak na magazynie";
    const isDisabled = quantity <= 0;
    const router = useRouter();
    
    const handleOrderClick = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        
        if (!isDisabled) {
            // Przekierowanie na stronę zamawiania
            router.push(`/order`); 
        }
    };
    
    return (
        <button 
            onClick={handleOrderClick}
            className={`p-2 rounded-none w-full mt-auto ${
                isDisabled 
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed" 
                    : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
            disabled={isDisabled}
        >
            {buttonText}
        </button>
    )
}