import { useContext } from "react"
import { AnimationContext } from "../conexts/isArmAnimate"

export default function Page({Notes, PhotoContainer, title, subTitle, text}){
    const {isAnimation, setIsAnimation} = useContext(AnimationContext)
    
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
            <div className="centralizeBottomButtons">
                <button className="bottomButton" onClick={() => {setIsAnimation(isAnimation === "initialValue" ? true : !isAnimation), console.log(isAnimation);
                }}>{isAnimation === true ? "Fechar" : "Projetos"}</button>
            </div>
        </div>
    )
}