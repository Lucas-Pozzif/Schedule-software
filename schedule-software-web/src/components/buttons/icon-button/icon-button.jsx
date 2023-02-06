import './icon-button.css'

export function IconButton({
    icon,
    text
}) {

    return (
        <div className="icon-button">
            <img src={icon} className="icon-button-img"></img>
            <p className="icon-button-text" >{text}</p>
        </div>
    )
}