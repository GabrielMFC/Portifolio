import ProjectsContainer from "./projectPageComponents/ProjectsContainer"
import "../../styles/dossier.css"

export default function ProjectDossier({showProjectPage}) {
    return(
        <div className={"dossierContainer "  + showProjectPage}>
            <ProjectsContainer/>
        </div>
    )
}