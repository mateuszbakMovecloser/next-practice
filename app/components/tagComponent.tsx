export default function TagComponent({tags}: {tags: string[]}) {
    if (!tags || !Array.isArray(tags)) {
        return null; 
    }
    
    const promocja = tags.includes("Promocja");
    const nowosc = tags.includes("Nowość");
    
    return (
        <div className="flex flex-col gap-2 mb-2 items-center">
            {promocja &&
             <div className="border-2 border-amber-800 text-amber-800 px-2 py-1 rounded-md text-sm min-w-[120px] text-center">
                Promocja
            </div>}
            {nowosc && 
            <div className="border-2 border-yellow-400 text-yellow-400 px-2 py-1 rounded-md text-sm min-w-[120px] text-center">
                Nowość
            </div>}
        </div>
    );
}