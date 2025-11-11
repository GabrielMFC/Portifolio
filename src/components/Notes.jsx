import "../../styles/dossier.css"

export default function Notes({info}) {
    return(
        <div className="notes">
            {   
            info.name?         
            <p className="notesInfo">
                <span className="notesTopic">Nome:</span> {info.name}
            </p>
            : null
            }
            
            {
             info.age ?
            <p className="notesInfo">
                <span className="notesTopic">Idade:</span> {info.age}
            </p>
            : null
            }
            
            {
            info.whats ?
            <p className="notesInfo">
                {info.whats}
            </p>
            : null
            }

            {
            info.email ?            
            <p className="notesInfo">
                {info.email}
            </p>
            : null
            }
        </div>
    )
}