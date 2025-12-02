export default function Tag({tags}: {tags: string[]}) {
    const promocja = tags.includes("Promocja");
    const nowosc = tags.includes("Nowość");
    const beautyClub = tags.includes("Beauty Club");
    
    return (
        <div className="flex flex-col gap-1 mb-4 w-full text-sm font-weight-400">
            {promocja &&
             <div className="w-full border border-[#a02916] text-[#a02916] uppercase text-center leading-tight tag-item">
                Promocja
            </div>}
            {nowosc && 
            <div className="w-full border border-[#d4af37] text-[#d4af37] uppercase text-center leading-tight tag-item">
                Nowość
            </div>}
            {beautyClub && 
            <div className="w-full border border-[#a02916] text-[#a02916] uppercase text-center text-xs leading-tight tag-item">
                Odkryj kod w Beauty Club*
            </div>}
        </div>
    );
}