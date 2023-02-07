import './large-button.css'

export function LargeButton({
    text,
    hide
}) {
    return (
        <div className={`large-button ${hide?'hide':null}`}>
            <p className='large-button-text'>{text}</p>
        </div>
    )
}