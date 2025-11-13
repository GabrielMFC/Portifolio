import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AnimationContext } from "../../conexts/isArmAnimate"
import { projectControllerContext } from "../../conexts/projectController"
import projectsData from "../../projectsData"

export default function SwitchProject() {
    const navigate = useNavigate()
    const{projectController,setProjectController} = useContext(projectControllerContext)
    console.log(projectController);
    
    return(
        <div>
            <button onClick={() => {
            setProjectController(projectsData.inForms) 
            navigate("/project")}}>Informs</button>
            <button onClick={() => {
                setProjectController(projectsData.barberagem) 
                navigate("/project")}}>Barberagem</button>
        </div>
    )
}