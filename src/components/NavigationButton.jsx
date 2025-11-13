import { useLocation, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AnimationContext } from "../conexts/isArmAnimate"

export default function NavigationButton({updateAnimationValue, navigateTo}) {
    const location = useLocation().pathname
    const navigate = useNavigate()
    const {setIsAnimation} = useContext(AnimationContext)

    return(
        <button className="bottomButton" onClick={() => {
            setIsAnimation(updateAnimationValue),
            navigate(navigateTo)
        }}>{location === "/" ? "Projetos" : "Fechar"}</button>
    )
}