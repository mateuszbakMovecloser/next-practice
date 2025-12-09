export default function Tag({tags}: {tags: string[]}) {
    const sale = tags.includes("Promocja");
    const  newProduct = tags.includes("Nowość");
    
    return (
        <div className="flex flex-col gap-1 mb-4 w-full text-sm font-weight-400 items-center">
            {sale &&
             <div className="border border-[#a02916] text-[#a02916] uppercase text-center leading-tight tag-item padding-x-3">
                Promocja
            </div>}
            {newProduct && 
            <div className="border border-[#f2c07e] text-[#f2c07e] uppercase text-center leading-tight tag-item">
                Nowość
            </div>}
        </div>
    );
}