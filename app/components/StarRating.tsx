export default function StarRating({opinions: rating}: {opinions: number}) {
    const stars=[];
    
    const fullStars = Math.floor(rating);
    for(let i=0; i<fullStars; i++) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
    }

    return (
        <div className="flex text-lg items-center justify-end gap-1 min-h-[28px]">
            {stars}
        </div>
    )
}