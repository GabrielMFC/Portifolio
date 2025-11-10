import ArmAsset from "../../src/assets/armAsset.png"
import { useContext } from "react"
import { AnimationContext } from "../conexts/isArmAnimate"
import ProjectDossier from "./ProjectDossier"
import "../../styles/arm.css"

export default function Arm() {
    const {isAnimation} = useContext(AnimationContext)
    return(
        isAnimation ?
        <>
        <div className="arm armAnimation" style={{backgroundImage: `url(${ArmAsset})`}}>
        </div>
        <ProjectDossier/>
        </>
        : 
        <div className="arm" style={{backgroundImage: `url(${ArmAsset})`}}></div>
    )
}