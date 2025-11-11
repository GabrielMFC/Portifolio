import { createContext, useState } from "react";

export const projectControllerContext = createContext()

export function ProjectControllerProvider({children}) {
    const [projectController, setProjectController] = useState(false)

    return(
        <projectControllerContext.Provider value={{projectController, setProjectController}}>
            {children}
        </projectControllerContext.Provider>
    )
}