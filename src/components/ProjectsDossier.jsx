import ProjectsContainer from "./projectPageComponents/ProjectsPage"
import "../../styles/dossier.css"

export default function ProjectsDossier({showProjectPage}) {
    return(
        <div className={"dossierContainer "  + showProjectPage}>
            <ProjectsContainer/>
        </div>
    )
}