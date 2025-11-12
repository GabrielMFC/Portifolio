import { useContext } from "react"
import { projectControllerContext } from "../../conexts/projectController"
import projectsData from "../../projectsData"

export default function SwitchProject() {
    const{setProjectController} = useContext(projectControllerContext)
    
    return(
        <div>
            <button onClick={() => {setProjectController(projectsData.inForms)}}>Informs</button>
            <button onClick={() => {setProjectController(projectsData.barberagem)}}>Barberagem</button>
        </div>
    )
}