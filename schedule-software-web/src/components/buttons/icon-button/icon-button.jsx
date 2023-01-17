import './icon-button.css'

export function IconButton(parameters) {
    const iconLink = parameters.iconLink;
    const text = parameters.text;

    return (
        <div className="icon-button">
            <img src={iconLink} className="icon-button-img"></img>
            <p className="icon-button-text" >{text}</p>
        </div>
    )
}