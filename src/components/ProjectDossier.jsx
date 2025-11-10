import ProjectPage from "./projectPage/ProjectPage"
import "../../styles/dossier.css"

export default function ProjectDossier({showProjectPage}) {
    return(
        <div className={"dossierContainer "  + showProjectPage}>
            <ProjectPage/>
        </div>
    )
}