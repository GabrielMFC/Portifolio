import { createContext, useState } from "react";

export const AnimationContext = createContext()

export function AnimationProvider({children}) {
    const [isAnimation, setIsAnimation] = useState(false)

    return(
        <AnimationContext.Provider value={{isAnimation, setIsAnimation}}>
            {children}
        </AnimationContext.Provider>
    )
}

