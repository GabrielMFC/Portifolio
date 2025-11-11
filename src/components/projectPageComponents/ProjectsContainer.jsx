import Page from "../Page"
import Notes from "../Notes"
import PhotoContainer from "../PhotoContainer"
import SwitchProject from "./SwitchProject"
import { useContext } from "react"
import { projectControllerContext } from "../../conexts/projectController"
import ProjectPage from "./ProjectPage"
import "../../../styles/dossier.css"

export default function ProjectsContainer() {
    const {projectController} = useContext(projectControllerContext)
    return(
        !projectController ?
        <Page title={"Projetos"} subTitle={'"Atividades"'} text={"Os botões abaixo, iram lhe redirecionar paras as principais atividades do sujeito."} Notes={
            <Notes info={{name:"Gabriel Matias", age: 19, whats: "(+55) 24 998771866", email: "ggezcom991gh@gmail.com"}}/>
        } PhotoContainer={
            <PhotoContainer/>
        }

        SwitchProject={<SwitchProject/>}
        />
        :
        <ProjectPage/>
    )
}