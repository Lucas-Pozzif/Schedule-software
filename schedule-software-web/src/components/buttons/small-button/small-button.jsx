import './small-button.css'

export function SmallButton(parameters) {
    const text = parameters.text
    return (
        <div className='small-button'>
            <p className='small-button-text'>{text}</p>
        </div>
    )
}