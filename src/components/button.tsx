import { ButtonComponentInterface } from "../interfaces/buttonComponent";
import Link from "next/link";

export default function Button({text, quantity}: ButtonComponentInterface) {
    const buttonText = quantity > 0 ? text : "brak na magazynie";
    const isDisabled = quantity <= 0;
    
    if (isDisabled) {
        return (
            <button 
                className="product-card-btn product-card-btn-disabled"
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
            className="product-card-btn product-card-btn-primary"
        >
            <span>{buttonText}</span>
        </Link>
    );
}