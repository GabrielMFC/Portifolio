import Page from "../Page"
import Notes from "../Notes"
import Photo from "../Photo"
import subjectImage from "../../assets/dossierPhotos/subjectImage.jpg"
import "../../../styles/dossier.css"

export default function SubjectPage() {
    return(
        <Page title={"Dev"} subTitle={'"GabrielMFC"'} text={"Um sujeito um tanto enigmático. Não se sabe ao certo suas reais ambições..."} Notes={
            <Notes info={{name:"Gabriel Matias", age: 19, whats: "(+55) 24 998771866", email: "ggezcom991gh@gmail.com"}}/>
        } Photo={
            <Photo image={subjectImage} type={"projectPhotoContainer"}/>
        }
        NavigationButtonProps={{navigateTo:"/projectList",updateAnimationValue:"animation"}}
        />
    )
}