import './detail-button.css'

export function DetailButton({
    text,
    status
}) {
    return (
        <div className={`detail-button ${status ? 'secondary-color-background' : 'terciary-color-background'}`}>
            <p className={`detail-button-text ${status ? 'terciary-color' : 'secondary-color'}`}>{text}</p>
        </div >
    )
}