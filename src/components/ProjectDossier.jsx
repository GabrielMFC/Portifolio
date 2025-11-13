import ProjectPage from "./projectPageComponents/ProjectPage"
import "../../styles/dossier.css"

export default function ProjectDossier() {
    return(
        <div className="dossierContainer" style={{zIndex: "6"}}>
            <ProjectPage/>
        </div>
    )
}