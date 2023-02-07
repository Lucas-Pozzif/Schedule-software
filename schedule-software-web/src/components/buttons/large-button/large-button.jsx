import './large-button.css'

export function LargeButton({
    text,
    hide
}) {
    return (
        <div className={`large-button-overlap ${hide ? 'hide' : null}`}>
            <div className={`large-button`}>
                <p className='large-button-text'>{text}</p>
            </div>
        </div >
    )
}