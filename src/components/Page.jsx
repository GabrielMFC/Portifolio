import { useContext } from "react"
import { AnimationContext } from "../conexts/isArmAnimate"

export default function Page({Notes, PhotoContainer, title, subTitle, text, GoToButton, SwitchProject}){
    const {isAnimation, setIsAnimation} = useContext(AnimationContext)
    
    function changeContextValue() {
        return isAnimation === "initialValue" ? "projectsList": isAnimation === "projectsList"? "home" : isAnimation === "home" ? "projectsList" : "projectPage"
    }

    return(
        <div className="dossierPage">
            <div className="centralizeNotesAndPhotos">
                {Notes}
                {PhotoContainer}
            </div>
            <div className="centralizeDossierText">
                <h1 className="title">{title}</h1>
                <h2 className="title">{subTitle}</h2>
                <p className="text">{text}</p>
            </div>
            {SwitchProject}
            <div className="centralizeBottomButtons">
                <button className="bottomButton" onClick={() => {setIsAnimation(changeContextValue()), console.log(isAnimation);
                }}>{isAnimation === "projectsList" ? "Fechar" : "Projetos"}</button>
                {GoToButton}
            </div>
        </div>
    )
}