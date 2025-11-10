import ArmAsset from "../../src/assets/armAsset.png"
import { useContext } from "react"
import { AnimationContext } from "../conexts/isArmAnimate"
import ProjectDossier from "./ProjectDossier"
import "../../styles/arm.css"

export default function Arm() {
    const {isAnimation} = useContext(AnimationContext)
    return(
            isAnimation === "initialValue" ?
            <>
            <div className="arm" style={{backgroundImage: `url(${ArmAsset})`}}>
            </div>
            </>
            :
            isAnimation === "projectsList" ?
            <>
            <div key={1} className="arm armAnimation" style={{backgroundImage: `url(${ArmAsset})`}}></div>
            <ProjectDossier showProjectPage={"activate"}/>
            </>
            :
            isAnimation === "home" ?
            <>
            <div key={2} className="arm armReverseAnimation" style={{backgroundImage: `url(${ArmAsset})`}}></div>
            <ProjectDossier showProjectPage={"desactivate"}/>
            </>
            : null
    )
}