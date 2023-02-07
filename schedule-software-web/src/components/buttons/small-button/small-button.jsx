import './small-button.css'

export function SmallButton({
    text,
    light,
    fontsize
}) {
    return (
        <div className={`small-button ${light ? 'secondary-color-background' : 'terciary-color-background'}`}>
            <p style={{ fontSize: fontsize + 'px' }} className={`small-button-text ${!light ? 'secondary-color' : 'terciary-color'}`}>{text}</p>
        </div>
    )
}