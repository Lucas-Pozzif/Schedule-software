import './horizontal-icon-button.css'

export function HorizontalIconButton({
    icon,
    text,
    reverse
}) {

    return (
        <div className={`horizontal-icon-button ${reverse?'reverse':null}`}>
            <img src={icon} className={`horizontal-icon-button-img`}></img>
            <p className="horizontal-icon-button-text" >{text}</p>
        </div>
    )
}