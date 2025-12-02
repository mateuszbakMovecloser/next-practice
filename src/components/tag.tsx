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
            <div className="w-full border border-[#f2c07e] text-[#f2c07e] uppercase text-center leading-tight tag-item">
                Nowość
            </div>}
        </div>
    );
}