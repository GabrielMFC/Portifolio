import "../../styles/dossier.css"

export default function Notes({info}) {
    return(
        <div className="notes">
            <p className="notesInfo">
                <span className="notesTopic">Nome:</span> {info.name}
            </p>
            
            <p className="notesInfo">
                <span className="notesTopic">Idade:</span> {info.age}
            </p>
            
            <p className="notesInfo">
                {info.whats}
            </p>

            <p className="notesInfo">
                {info.email}
            </p>
        </div>
    )
}