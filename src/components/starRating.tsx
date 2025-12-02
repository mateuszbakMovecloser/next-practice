export default function StarRating({opinions: rating}: {opinions: number}) {
    const stars = [];
    
    const fullStars = Math.floor(rating);
    for(let i = 0; i < fullStars; i++) {
        stars.push(
            <div key={i} className="relative inline-block" style={{ transform: 'scale(0.75)' }}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="26" 
                    height="25"
                >
                    <path 
                        d="M12.997 1.129l3.684 7.466 8.239 1.2-5.962 5.811 1.407 8.206-7.368-3.874-7.369 3.871 1.407-8.206-5.961-5.811 8.239-1.2z" 
                        fill="#f2c07e"
                    />
                </svg>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-end min-h-[28px]">
            {stars}
        </div>
    )
}