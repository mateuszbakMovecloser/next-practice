import { ButtonComponentInterface } from "../interfaces/buttonComponent";
import Link from "next/link";

export default function Button({text, quantity}: ButtonComponentInterface) {
    const buttonText = quantity > 0 ? text : "brak na magazynie";
    const isDisabled = quantity <= 0;
    
    if (isDisabled) {
        return (
            <button 
                className="p-2 rounded-none w-full mt-auto bg-gray-400 text-gray-600 cursor-not-allowed"
                disabled
            >
                {buttonText}
            </button>
        );
    }
    
    return (
        <Link 
            href="/order"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-none w-full mt-auto bg-gray-900 text-white hover:bg-gray-800 block text-center cursor-pointer"
        >
            {buttonText}
        </Link>
    );
}