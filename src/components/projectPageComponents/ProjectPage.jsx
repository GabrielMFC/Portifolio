import Page from "../Page"
import Notes from "../Notes"
import PhotoContainer from "../PhotoContainer"
import SwitchProject from "./SwitchProject"
import { useContext } from "react"
import { projectControllerContext } from "../../conexts/projectController"

export default function ProjectPage() {
    const {projectController} = useContext(projectControllerContext)
    
    return(
        <>
        <Page title={"Projeto"} subTitle={projectController.name} text={projectController.desc} Notes={
            <Notes info={{name: projectController.name, whats: "(+55) 24 998771866", email: "ggezcom991gh@gmail.com"}}/>
        } PhotoContainer={
            <PhotoContainer/>
        }
        SwitchProject={<SwitchProject/>}
        />
        </>
    )
}