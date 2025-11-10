import Page from "../Page"
import Notes from "../Notes"
import PhotoContainer from "../PhotoContainer"
import "../../../styles/dossier.css"

export default function ProjectPage() {
    return(
        <Page title={"Projeto"} subTitle={'"InForms"'} text={"Um sujeito um tanto enigmático. Não se sabe ao certo suas reais ambições..."} Notes={
            <Notes info={{name:"Gabriel Matias", age: 19, whats: "(+55) 24 998771866", email: "ggezcom991gh@gmail.com"}}/>
        } PhotoContainer={
            <PhotoContainer/>
        }/>
    )
}