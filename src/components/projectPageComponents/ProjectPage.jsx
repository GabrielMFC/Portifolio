import Page from "../Page"
import Notes from "../Notes"
import Photo from "../Photo"
import SwitchProject from "./SwitchProject"
import GoToButton from "./GoToButton"
import { useContext } from "react"
import { projectControllerContext } from "../../conexts/projectController"

export default function ProjectPage() {
    const {projectController} = useContext(projectControllerContext)
    
    return(
        <>
        <Page title={"Projeto"} subTitle={projectController.name} text={projectController.desc} Notes={
            <Notes info={{name: projectController.name, whats: "(+55) 24 998771866", email: "ggezcom991gh@gmail.com"}}/>
        } Photo={
            <Photo image={projectController.image} type={"photoContainer"}/>
        }
        GoToButton={<GoToButton link={projectController.link}/>}
        NavigationButtonProps={{navigateTo:"/projectList",updateAnimationValue:""}}
        />
        </>
    )
}