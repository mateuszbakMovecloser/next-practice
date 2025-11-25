export default function TimeOfDay({timeOfDay}: {timeOfDay: string[]}) {
    if(!timeOfDay || !Array.isArray(timeOfDay)) {
        return null;
    }
    
    const day = timeOfDay.includes("day");
    const night = timeOfDay.includes("night");
    
    return (
        <div className="flex gap-2 text-black">
            {day && (
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 31 31" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"

                >
                    <path d="M15.465 25.536h1.078v6.46h-1.078zM0 15.461h6.467v1.078H0v-1.078zM25.536 15.461h6.468v1.078h-6.468zM26.886 4.321l.762.762-4.507 4.507-.762-.762zM5.121 27.611l-.762-.762 4.507-4.507.762.762-4.507 4.507zM5.122 4.322l4.507 4.507-.762.762L4.36 5.084zM26.887 27.612l-4.507-4.511.762-.762 4.507 4.507z" 
                          fill="currentColor"/>
                    <path d="M16 6.921a9.085 9.085 0 109.085 9.09A9.085 9.085 0 0016 6.921zm0 16.959a7.874 7.874 0 117.874-7.869A7.883 7.883 0 0116 23.88zM15.465 0h1.078v6.475h-1.078V0z"
                    fill="currentColor"/>
                          
                </svg>
            )}
            
            {night && (
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 31 31" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    
                >
                    <path d="M8.114 2.64a14.238 14.238 0 0019.323 18.913A14.008 14.008 0 118.114 2.64zM11.387.001A15.2 15.2 0 1030 18.229 13.029 13.029 0 0111.388 0z" 
                          fill="currentColor"/>
                </svg>
            )}
        </div>
    )
}