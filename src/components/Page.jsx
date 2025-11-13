import NavigationButton from "./NavigationButton"

export default function Page({Notes, Photo, title, subTitle, text, GoToButton, SwitchProject, NavigationButtonProps}){
    return(
        <div className="dossierPage">
            <div className="centralizeNotesAndPhotos">
                {Notes}
                {Photo}
            </div>
            <div className="centralizeDossierText">
                <h1 className="title">{title}</h1>
                <h2 className="title">{subTitle}</h2>
                <p className="text">{text}</p>
            </div>
            {SwitchProject}
            <div className="centralizeBottomButtons">
                <NavigationButton {...NavigationButtonProps}
                />
                {GoToButton}
            </div>
        </div>
    )
}