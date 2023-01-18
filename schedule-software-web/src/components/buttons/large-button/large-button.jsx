import './large-button.css'

export function LargeButton(parameters) {
    const text = parameters.text
    return (
        <div className='large-button'>
            <p className='large-button-text'>{text}</p>
        </div>
    )
}