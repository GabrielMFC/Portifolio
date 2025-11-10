import Page from "../Page"
import Notes from "../Notes"
import PhotoContainer from "../PhotoContainer"
import SwitchProject from "./SwitchProject"
import "../../../styles/dossier.css"

export default function ProjectsContainer() {
    return(
        <>
        <Page title={"Projetos"} subTitle={'"Atividades"'} text={"Os botões abaixo, iram lhe redirecionar paras as principais atividades do sujeito."} Notes={
            <Notes info={{name:"Gabriel Matias", age: 19, whats: "(+55) 24 998771866", email: "ggezcom991gh@gmail.com"}}/>
        } PhotoContainer={
            <PhotoContainer/>
        }
        SwitchProject={<SwitchProject/>}
        />
        </>
    )
}