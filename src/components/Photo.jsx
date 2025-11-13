import "../../styles/dossier.css"

export default function Photo({image, type}) {
    return(
        <div className="photoContainer">
            <img className={type} src={image}></img>
        </div>
    )
}