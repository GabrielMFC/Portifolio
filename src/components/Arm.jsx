import ArmAsset from "../../src/assets/armAsset.png"
import { useContext } from "react"
import { AnimationContext } from "../conexts/isArmAnimate"
import ProjectsDossier from "./ProjectsDossier"
import "../../styles/arm.css"

export default function Arm() {
    const {isAnimation} = useContext(AnimationContext)
    return(
            isAnimation === "animation" ?
            <>
            <div key={1} className="arm armAnimation" style={{backgroundImage: `url(${ArmAsset})`}}></div>
            <ProjectsDossier showProjectPage={"activate"}/>
            </>
            :
            isAnimation === "reverseAnimation" ?
            <>
            <div key={2} className="arm armReverseAnimation" style={{backgroundImage: `url(${ArmAsset})`}}></div>
            <ProjectsDossier showProjectPage={"desactivate"}/>
            </>
            : null
    )
}