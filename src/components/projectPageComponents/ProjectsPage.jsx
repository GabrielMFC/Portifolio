import Page from "../Page"
import Notes from "../Notes"
import SwitchProject from "./SwitchProject"
import { useContext } from "react"
import { projectControllerContext } from "../../conexts/projectController"
import ProjectPage from "./ProjectPage"
import "../../../styles/dossier.css"

export default function ProjectsPage() {
    return(
        <Page title={"Projetos"} subTitle={'"Atividades"'} text={"Os botões abaixo, iram lhe redirecionar paras as principais atividades do sujeito."} Notes={
            <Notes info={{name:"Gabriel Matias", age: 19, whats: "(+55) 24 998771866", email: "ggezcom991gh@gmail.com"}}/>
        } 
        SwitchProject={<SwitchProject/>}
        NavigationButtonProps={{navigateTo:"/",updateAnimationValue:"reverseAnimation"}}
        />
    )
}